"use client";

import { useState } from "react";
import {
  Users,
  Music,
  Baby,
  Gamepad2,
  Video,
  HandHeart,
  Heart,
  HelpCircle,
  Clock,
  Check,
  ChevronLeft,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { volunteerAreas, VolunteerFormData } from "@/lib/mock-volunteers";

interface StepAreasProps {
  formData: VolunteerFormData;
  onSubmit: (selectedAreas: string[]) => void;
  onBack: () => void;
  onNeedHelp: () => void;
}

export default function StepAreas({
  formData,
  onSubmit,
  onBack,
  onNeedHelp,
}: StepAreasProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "Todas", icon: Users },
    { id: "louvor", name: "Louvor", icon: Music },
    { id: "criancas", name: "Crianças", icon: Baby },
    { id: "jovens", name: "Jovens", icon: Gamepad2 },
    { id: "midia", name: "Mídia", icon: Video },
    { id: "recepcao", name: "Recepção", icon: HandHeart },
    { id: "outros", name: "Outros", icon: Heart },
  ];

  const filteredAreas =
    selectedCategory && selectedCategory !== "all"
      ? volunteerAreas.filter((area) => area.category === selectedCategory)
      : volunteerAreas;

  const toggleArea = (areaId: string) => {
    setSelectedAreas((prev) =>
      prev.includes(areaId)
        ? prev.filter((id) => id !== areaId)
        : [...prev, areaId],
    );
  };

  const handleSubmit = () => {
    if (selectedAreas.length > 0) {
      onSubmit(selectedAreas);
    }
  };

  // Helper to map category/id to Lucide Icon dynamically
  const getAreaIcon = (category: string) => {
    switch (category) {
      case "louvor": return <Music className="w-12 h-12" />;
      case "criancas": return <Baby className="w-12 h-12" />;
      case "jovens": return <Gamepad2 className="w-12 h-12" />;
      case "midia": return <Video className="w-12 h-12" />;
      case "recepcao": return <HandHeart className="w-12 h-12" />;
      default: return <Heart className="w-12 h-12" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      {/* Header Section */}
      <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 border-b border-white/5 bg-[#121212] backdrop-blur-md bg-opacity-90">
        <div className="">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBack}
              className="self-start flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group shrink-0 cursor-pointer"
              title="Voltar"
            >
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
            </button>
            <div className="text-right">
              <span className="text-gray-500 text-sm block">Voluntário</span>
              <span className="text-gray-300 font-bold">{formData.name}</span>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Encontre sua área
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Selecione os ministérios que mais combinam com você.
            </p>
          </div>

          {/* Filtro de Categorias */}
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = (category.id === "all" && !selectedCategory) || selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(
                      category.id === "all" ? null : category.id,
                    )
                  }
                  className={`px-4 py-2 rounded-full font-medium text-sm border transition-all flex items-center gap-2 cursor-pointer
                  ${isActive
                      ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                      : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grow max-w-6xl mx-auto w-full px-4 sm:px-6 py-12">

        {/* Help Banner */}
        <div className="mb-12 rounded-2xl bg-linear-to-r from-orange-900/40 to-primary/20 border border-primary/20 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20 text-primary shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Não sabe onde servir?
              </h3>
              <p className="text-gray-400 text-sm">
                Nossa equipe pode te ajudar a descobrir onde seus dons se encaixam melhor.
              </p>
            </div>
          </div>
          <Button
            onClick={onNeedHelp}
            variant="secondary"
            className="bg-white/10 hover:bg-white/20 text-white border-0"
          >
            Pedir orientação
          </Button>
        </div>


        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {filteredAreas.map((area) => {
            const isSelected = selectedAreas.includes(area.id);
            return (
              <button
                key={area.id}
                onClick={() => toggleArea(area.id)}
                className={`group relative w-full overflow-hidden rounded-2xl transition-all text-left border-2 cursor-pointer
                  ${isSelected
                    ? "bg-white/5 border-primary shadow-[0_0_30px_-5px_var(--color-primary)] shadow-primary/20 ring-1 ring-primary/50"
                    : "bg-[#1a1a1a] border-white/5 hover:border-white/20 hover:bg-white/5"}`}
              >
                <div className="md:flex h-full">
                  {/* Icon Section */}
                  <div className={`md:w-48 p-8 flex items-center justify-center relative overflow-hidden transition-colors duration-300
                      ${isSelected ? "bg-primary/20 text-primary" : "bg-black/20 text-gray-500 group-hover:text-primary/70"}`}>

                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                      {getAreaIcon(area.category)}
                    </div>
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white md:hidden">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-2xl font-bold transition-colors ${isSelected ? "text-primary" : "text-white group-hover:text-primary"}`}>
                        {area.name}
                      </h3>
                      {isSelected && (
                        <div className="hidden md:flex items-center gap-2 text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
                          <Check className="w-4 h-4" /> Selecionado
                        </div>
                      )}
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    <div className="mt-auto space-y-4">
                      {area.requiredSkills && area.requiredSkills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {area.requiredSkills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-sm text-gray-500 pt-2 border-t border-white/5">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{area.commitment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resumo e Botão de Envio */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/10 p-4 sm:px-8 py-6 transition-transform duration-300 z-50 ${selectedAreas.length > 0 ? "translate-y-0" : "translate-y-full"}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mb-1">
              Você selecionou:
            </p>
            <p className="text-2xl font-bold text-white">
              {selectedAreas.length}{" "}
              <span className="text-primary">{selectedAreas.length === 1 ? "opção" : "opções"}</span>
            </p>
          </div>
          <Button
            onClick={handleSubmit}
            size="lg"
            className="w-full md:w-auto px-10 py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20"
          >
            Finalizar Cadastro <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
