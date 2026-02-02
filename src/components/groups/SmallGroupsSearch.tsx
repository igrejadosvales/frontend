"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  Search,
  ChevronLeft,
  User,
  Calendar,
  Clock,
  MapPin,
  Users,
  Filter,
  MessageCircle,
  Map as MapIcon,
  List,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { SMALL_GROUPS, SmallGroup } from "@/lib/mock-pgs";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

// Dynamically import the map component to avoid SSR issues with Leaflet
const GroupMap = dynamic(() => import("@/components/groups/GroupMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#121212] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 font-medium">Carregando mapa...</p>
      </div>
    </div>
  ),
});

const DAYS = [
  "Todos",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

export default function SmallGroupsSearch() {
  const [search, setSearch] = useState("");
  const [selectedDay, setSelectedDay] = useState("Todos");
  const [selectedGroup, setSelectedGroup] = useState<SmallGroup | null>(null);
  const [openWhatsApp, setOpenWhatsApp] = useState(false);
  const [mobileView, setMobileView] = useState<"list" | "map">("list");

  const filteredGroups = useMemo(() => {
    return SMALL_GROUPS.filter((group) => {
      const matchesSearch =
        group.name.toLowerCase().includes(search.toLowerCase()) ||
        group.neighborhood.toLowerCase().includes(search.toLowerCase()) ||
        group.leader.toLowerCase().includes(search.toLowerCase());

      const matchesDay = selectedDay === "Todos" || group.day === selectedDay;

      return matchesSearch && matchesDay;
    });
  }, [search, selectedDay]);

  const handleWhatsAppClick = (group: SmallGroup, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedGroup(group);
    setOpenWhatsApp(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden bg-[#121212] relative">
      {/* Sidebar */}
      {/* Sidebar - relative container for sliding views */}
      <div
        className={cn(
          "w-full md:w-[600px] border-r border-white/5 bg-[#0f0f0f] flex-col h-full z-10 shadow-2xl relative overflow-hidden",
          mobileView === "map" ? "hidden md:flex" : "flex",
        )}
      >
        {/* Header - Always visible for list, but we might want to hide it or change it for details. 
            For now, let's keep the header part of the 'list view' container so it slides away too.
        */}

        {/* LIST VIEW CONTAINER */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out bg-[#0f0f0f]",
            openWhatsApp ? "-translate-x-full" : "translate-x-0",
          )}
        >
          <div className="p-6 space-y-6 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] border-b border-white/5 shrink-0">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                iGrupos
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Encontre uma família perto de você para caminhar junto.
              </p>
            </div>

            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
              <Input
                placeholder="Buscar por nome do Líder ou bairro..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary/50 h-10 transition-all hover:bg-white/10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <Filter className="w-3 h-3" /> Filtrar por dia
              </div>
              <div className="flex flex-wrap gap-2">
                {DAYS.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                      selectedDay === day
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                        : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10",
                    )}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-[#0f0f0f]">
            {filteredGroups.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredGroups.map((group) => (
                  <div
                    key={group.id}
                    className={cn(
                      "group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col",
                      selectedGroup?.id === group.id
                        ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                        : "bg-[#1a1a1a] border-white/5 hover:border-white/20 hover:bg-[#202020] hover:translate-y-[-2px] hover:shadow-xl",
                    )}
                    onClick={() => setSelectedGroup(group)}
                  >
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3
                          className={cn(
                            "font-bold text-lg leading-tight transition-colors",
                            selectedGroup?.id === group.id
                              ? "text-primary"
                              : "text-white group-hover:text-primary",
                          )}
                        >
                          {group.name}
                        </h3>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4 shrink-0 text-gray-500 group-hover:text-primary/70 transition-colors" />
                          <span className="line-clamp-1">
                            {group.neighborhood}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <User className="w-4 h-4 shrink-0 text-gray-500 group-hover:text-primary/70 transition-colors" />
                          <span className="line-clamp-1">{group.leader}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4 shrink-0 text-gray-500 group-hover:text-primary/70 transition-colors" />
                          <span>
                            {group.day} às {group.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full bg-white/5 border-white/10 hover:bg-primary hover:text-white hover:border-primary text-gray-300 transition-all font-semibold duration-300"
                      onClick={(e) => handleWhatsAppClick(group, e)}
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-40 flex flex-col items-center justify-center text-center space-y-2 p-8 border-2 border-dashed border-white/5 rounded-xl bg-white/5 text-gray-500">
                <Search className="w-8 h-8 opacity-50" />
                <p>Nenhum grupo encontrado com esses filtros.</p>
              </div>
            )}
          </div>
        </div>

        {/* DETAILS VIEW CONTAINER */}
        <div
          className={cn(
            "absolute inset-0 bg-[#0f0f0f] z-20 flex flex-col transition-transform duration-300 ease-in-out",
            openWhatsApp ? "translate-x-0" : "translate-x-full",
          )}
        >
          {selectedGroup && (
            <div className="flex flex-col h-full overflow-y-hidden custom-scrollbar p-6">
              {" "}
              {/* Added padding directly here instead of wrapper modal */}
              <button
                onClick={() => setOpenWhatsApp(false)}
                className="self-start flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group shrink-0 cursor-pointer"
                title="Voltar"
              >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </button>
              <div className="flex flex-col items-center text-center mb-8 animate-in fade-in zoom-in duration-300 shrink-0">
                <div className="w-21 h-21 rounded-full bg-linear-to-br from-primary to-orange-600 p-[3px] mb-3 shadow-2xl shadow-primary/20">
                  <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden relative">
                    {/* Placeholder Avatar */}
                    <img
                      src={`https://ui-avatars.com/api/?name=${selectedGroup.name}&background=random&color=fff`}
                      alt="Group Avatar"
                      className="object-cover h-full w-full opacity-90"
                    />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  {selectedGroup.name}
                </h1>
                <div className="flex items-center gap-3 justify-center mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold uppercase tracking-wider border border-primary/20">
                    {selectedGroup.day}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm font-bold uppercase tracking-wider border border-white/10">
                    {selectedGroup.time}
                  </span>
                </div>
              </div>
              <div className="space-y-4 flex-1 animate-in slide-in-from-bottom-8 fade-in duration-500 delay-100">
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all group">
                  <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Liderança
                  </h3>
                  <p className="text-xl text-white font-medium pl-6 border-l-2 border-primary/50">
                    {selectedGroup.leader}
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all group">
                  <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Localização
                  </h3>
                  <div className="pl-6 border-l-2 border-white/10 group-hover:border-primary/50 transition-colors">
                    <p className="text-xl text-white font-medium mb-1">
                      {selectedGroup.neighborhood}
                    </p>
                    <p className="text-gray-400">{selectedGroup.address}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 animate-in slide-in-from-bottom-8 fade-in duration-500 delay-200 shrink-0 h-full">
                <Button
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold h-14 text-lg rounded-xl shadow-lg shadow-green-600/20 transition-all hover:scale-[1.02]"
                  onClick={() => {
                    window.open(
                      `https://wa.me/?text=Olá, gostaria de visitar o grupo ${selectedGroup.name}`,
                      "_blank",
                    );
                  }}
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Quero Participar
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Você será redirecionado para o WhatsApp do líder.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Map Area */}
      <div
        className={cn(
          "flex-1 h-full relative bg-[#121212]",
          mobileView === "list" ? "hidden md:block" : "block",
        )}
      >
        <GroupMap
          groups={filteredGroups}
          selectedGroup={selectedGroup}
          onShowDetails={(group) => {
            setSelectedGroup(group);
            setOpenWhatsApp(true);
          }}
        />
        {/* Map Overlay Gradient */}
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[#121212] to-transparent pointer-events-none z-400" />
      </div>

      {/* Mobile Toggle FAB */}
      <button
        onClick={() => setMobileView(mobileView === "list" ? "map" : "list")}
        className="md:hidden absolute bottom-6 right-6 z-50 bg-primary text-white w-14 h-14 rounded-full shadow-2xl shadow-primary/20 hover:bg-orange-600 transition-all active:scale-95 flex items-center justify-center border border-white/10 cursor-pointer"
        aria-label={mobileView === "list" ? "Ver Mapa" : "Ver Lista"}
      >
        {mobileView === "list" ? (
          <MapIcon className="w-6 h-6" />
        ) : (
          <List className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
