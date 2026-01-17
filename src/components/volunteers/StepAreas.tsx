"use client";

import { useState } from "react";
import {
  People,
  MusicNoteBeamed,
  PersonFill,
  Controller,
  CameraVideo,
  HandThumbsUp,
  Heart,
  QuestionCircle,
  Clock,
} from "react-bootstrap-icons";
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
    { id: "all", name: "Todas", icon: People },
    { id: "louvor", name: "Louvor", icon: MusicNoteBeamed },
    { id: "criancas", name: "Crianças", icon: PersonFill },
    { id: "jovens", name: "Jovens", icon: Controller },
    { id: "midia", name: "Mídia", icon: CameraVideo },
    { id: "recepcao", name: "Recepção", icon: HandThumbsUp },
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-[#fc7703] mb-6 sm:mb-8 flex items-center gap-2 text-sm font-medium"
          >
            ← Voltar
          </button>
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Encontre sua área
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Olá, <strong>{formData.name}</strong>! Descubra onde sua vocação
              se encontra com as necessidades da nossa comunidade.
            </p>
          </div>
        </div>
      </div>

      {/* Help Banner */}
      <div className="bg-[#fc7703] text-white py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Não sabe onde voluntariar?
            </h3>
            <p className="text-sm sm:text-base text-orange-100">
              Nossa equipe pode te ajudar a descobrir onde seus dons se encaixam
              melhor.
            </p>
          </div>
          <Button
            onClick={onNeedHelp}
            size="lg"
            className="bg-white text-[#fc7703] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg"
          >
            Preciso de Ajuda
          </Button>
        </div>
      </div>

      {/* Categories & Areas */}
      <div className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        {/* Filtro de Categorias */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() =>
                  setSelectedCategory(
                    category.id === "all" ? null : category.id,
                  )
                }
                className={`px-3 sm:px-4 md:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm border-2 transition-all flex items-center gap-1 sm:gap-2
                  ${
                    (category.id === "all" && !selectedCategory) ||
                    selectedCategory === category.id
                      ? "border-[#fc7703] bg-[#fc7703] text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-[#fc7703]"
                  }`}
              >
                <Icon className="inline-block w-4 h-4 sm:w-5 sm:h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Grid de Áreas - Estilo Elevation Church */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {filteredAreas.map((area) => {
            const isSelected = selectedAreas.includes(area.id);
            return (
              <button
                key={area.id}
                onClick={() => toggleArea(area.id)}
                className={`group relative w-full overflow-hidden rounded-2xl transition-all text-left bg-white border-2 hover:shadow-2xl
                  ${isSelected ? "border-[#fc7703] shadow-xl" : "border-gray-200"}`}
              >
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-2/5 bg-gradient-to-br from-gray-100 to-gray-200 p-8 sm:p-10 md:p-12 flex items-center justify-center relative overflow-hidden min-h-[200px] sm:min-h-[250px]">
                    <div className="absolute inset-0 bg-[#fc7703]/5"></div>
                    <div className="relative z-10">
                      {(() => {
                        switch (area.category) {
                          case "louvor":
                            return (
                              <MusicNoteBeamed className="text-[#fc7703] w-16 h-16 sm:w-20 sm:h-20" />
                            );
                          case "criancas":
                            return (
                              <PersonFill className="text-[#fc7703] w-16 h-16 sm:w-20 sm:h-20" />
                            );
                          case "jovens":
                            return (
                              <Controller className="text-[#fc7703] w-16 h-16 sm:w-20 sm:h-20" />
                            );
                          case "midia":
                            return (
                              <CameraVideo className="text-[#fc7703] w-16 h-16 sm:w-20 sm:h-20" />
                            );
                          case "recepcao":
                            return (
                              <HandThumbsUp className="text-[#fc7703] w-16 h-16 sm:w-20 sm:h-20" />
                            );
                          case "outros":
                            return (
                              <Heart className="text-[#fc7703] w-16 h-16 sm:w-20 sm:h-20" />
                            );
                          default:
                            return (
                              <People className="text-[#fc7703] w-16 h-16 sm:w-20 sm:h-20" />
                            );
                        }
                      })()}
                    </div>
                    {isSelected && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-[#fc7703] rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold shadow-lg">
                        ✓
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#fc7703] transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    {area.requiredSkills && area.requiredSkills.length > 0 && (
                      <div className="mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Habilidades desejadas:
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {area.requiredSkills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-gray-700 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-1.5 sm:gap-2">
                      <Clock className="text-[#fc7703] w-4 h-4" />
                      {area.commitment}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resumo e Botão de Envio */}
      {selectedAreas.length > 0 && (
        <div className="sticky bottom-0 bg-[#fc7703] text-white py-4 sm:py-5 md:py-6 px-4 sm:px-6 shadow-2xl">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs sm:text-sm text-orange-100 mb-1">
                Áreas selecionadas:
              </p>
              <p className="text-xl sm:text-2xl font-bold">
                {selectedAreas.length}{" "}
                {selectedAreas.length === 1 ? "área" : "áreas"}
              </p>
            </div>
            <Button
              onClick={handleSubmit}
              size="lg"
              className="bg-white text-[#fc7703] hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-lg shadow-xl w-full md:w-auto"
            >
              Finalizar Cadastro →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
