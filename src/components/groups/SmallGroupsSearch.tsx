"use client"

import { useState, useMemo } from "react"
import dynamic from "next/dynamic"
import { Search, ChevronLeft, User, Calendar, Clock, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SMALL_GROUPS, SmallGroup } from "@/lib/mock-pgs"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

// Dynamically import the map component to avoid SSR issues with Leaflet
const GroupMap = dynamic(() => import("@/components/groups/GroupMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-muted flex items-center justify-center">
      <p className="text-muted-foreground">Carregando mapa...</p>
    </div>
  ),
})

const DAYS = ["Todos", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

export default function SmallGroupsSearch() {
  const [search, setSearch] = useState("")
  const [selectedDay, setSelectedDay] = useState("Todos")
  const [selectedGroup, setSelectedGroup] = useState<SmallGroup | null>(null)
  const [openWhatsApp, setOpenWhatsApp] = useState(false)

  const filteredGroups = useMemo(() => {
    return SMALL_GROUPS.filter((group) => {
      const matchesSearch =
        group.name.toLowerCase().includes(search.toLowerCase()) ||
        group.neighborhood.toLowerCase().includes(search.toLowerCase()) ||
        group.leader.toLowerCase().includes(search.toLowerCase())

      const matchesDay = selectedDay === "Todos" || group.day === selectedDay

      return matchesSearch && matchesDay
    })
  }, [search, selectedDay])

  const handleWhatsAppClick = (group: SmallGroup, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedGroup(group)
    setOpenWhatsApp(true)
  }

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-[600px] border-r bg-background flex flex-col h-full z-10">
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Pequenos Grupos</h2>

          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome do Líder ou bairro..."
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium transition-colors",
                  selectedDay === day
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-muted"
                )}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* WhatsApp Modal
        {openWhatsApp && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background p-4 rounded-md">
              <p>WhatsApp</p>
              <Button onClick={() => setOpenWhatsApp(false)}>Fechar</Button>
            </div>
          </div>
        )} */}

        <div className="flex-1 overflow-y-auto px-4">
          {filteredGroups.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredGroups.map((group) => (
                <div
                  key={group.id}
                  className={cn(
                    "p-4 cursor-pointer rounded-md transition-colors hover:bg-muted/50 border border-white/20 bg-white/10",
                    selectedGroup?.id === group.id && "bg-muted"
                  )}
                  onClick={() => setSelectedGroup(group)}
                >
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-sm text-muted-foreground">{group.neighborhood}</p>
                  <div className="mt-2  items-start justify-between text-xs flex flex-col">
                    <span className="text-primary font-medium">{group.day} às {group.time}</span>
                    <span className="text-muted-foreground">Líder: {group.leader}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full cursor-pointer"
                    onClick={(e) => handleWhatsAppClick(group, e)}
                  >
                    Conhecer iGrupo
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              Nenhum grupo encontrado com esses filtros.
            </div>
          )}
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 h-full relative">
        <GroupMap groups={filteredGroups} selectedGroup={selectedGroup} />
      </div>

      {/* WhatsApp Modal Overlay */}
      {openWhatsApp && selectedGroup && (
        <div className="absolute z-50 flex p-4 left-0 w-[600px] h-[calc(100vh-64px)]">
          {/* Blurred Backdrop */}
          <div
            className="absolute bg-black/60 backdrop-blur-sm"
            onClick={() => setOpenWhatsApp(false)}
          />

          {/* Modal Content */}
          <div className="bg-[#020817] w-full overflow-y-auto rounded-xl shadow-2xl relative z-10 p-8 text-white border border-gray-800 animate-in zoom-in-95 fade-in duration-200">
            <button
              onClick={() => setOpenWhatsApp(false)}
              className="flex items-center text-sm font-medium mb-8 hover:text-gray-300 transition-colors w-fit"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Voltar para a busca de LINKs
            </button>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden relative shrink-0">
                  {/* Placeholder Avatar */}
                  <img src="https://github.com/shadcn.png" alt="Avatar" className="object-cover h-full w-full" />
                </div>
              </div>

              <h1 className="text-2xl font-bold mb-1 uppercase tracking-wide">{selectedGroup.name}</h1>
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">LINKS - FAMILIA</p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

                <Button
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 w-full sm:w-auto"
                  onClick={() => {
                    // Add actual WhatsApp link logic here if needed
                    window.open(`https://wa.me/?text=Olá, gostaria de visitar o grupo ${selectedGroup.name}`, '_blank')
                  }}
                >
                  Quero participar
                </Button>
              </div>

              <div className="h-px bg-gray-800 w-full mb-8" />

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-400 shrink-0" />
                  <div>
                    <span className="font-bold">Líderes:</span> <span className="text-gray-300">{selectedGroup.leader}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400 shrink-0" />
                  <div>
                    <span className="font-bold">Dia:</span> <span className="text-gray-300">{selectedGroup.day}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400 shrink-0" />
                  <div>
                    <span className="font-bold">Horário:</span> <span className="text-gray-300">{selectedGroup.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
                  <div>
                    <span className="font-bold">Local:</span> <span className="text-gray-300">{selectedGroup.address} - {selectedGroup.neighborhood}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}
