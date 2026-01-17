"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { hangarResources, mockFeedbacks } from "@/lib/mock-volunteers";
import {
  Pencil,
  Mortarboard,
  StarFill,
  Star as StarIcon,
  CheckCircle,
  CameraVideo,
  Headphones as HeadphonesIcon,
  ChevronLeft,
} from "react-bootstrap-icons";

interface StepExistingVolunteerProps {
  onBack: () => void;
}

export default function StepExistingVolunteer({
  onBack,
}: StepExistingVolunteerProps) {
  const [activeTab, setActiveTab] = useState<"feedback" | "hangar">("feedback");
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    area: "",
    rating: 5,
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 border-b">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="mb-4 sm:mb-6 cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <ChevronLeft
                size={20}
                className="text-gray-600 group-hover:text-[#fc7703] transition-colors"
              />
              <span className="text-sm font-bold text-gray-600 group-hover:text-[#fc7703] transition-colors">
                Voltar
              </span>
            </div>
          </button>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Área do Voluntário
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Deixe seu feedback ou acesse recursos para seu crescimento
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex justify-start gap-8 mb-12 border-b">
          <button
            onClick={() => setActiveTab("feedback")}
            className={`px-2 py-4 text-lg font-bold transition-colors relative ${
              activeTab === "feedback"
                ? "text-[#fc7703]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Pencil size={22} className="inline-block mr-2 align-text-bottom" />
            Deixar Feedback
            {activeTab === "feedback" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#fc7703]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("hangar")}
            className={`px-2 py-4 text-lg font-bold transition-colors relative ${
              activeTab === "hangar"
                ? "text-[#fc7703]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Mortarboard
              size={22}
              className="inline-block mr-2 align-text-bottom"
            />
            Hangar
            {activeTab === "hangar" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#fc7703]" />
            )}
          </button>
        </div>

        {/* Feedback Tab */}
        {activeTab === "feedback" && (
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Formulário */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Compartilhe sua Experiência
              </h3>
              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-4 sm:space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-green-100 rounded-full p-4 sm:p-6">
                      <CheckCircle
                        size={48}
                        className="text-green-600 sm:w-16 sm:h-16"
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-green-600">
                    Feedback Enviado!
                  </h4>
                  <p className="text-base sm:text-lg text-gray-600">
                    Obrigado por compartilhar sua experiência conosco!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmitFeedback}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      value={feedbackForm.name}
                      onChange={(e) =>
                        setFeedbackForm({
                          ...feedbackForm,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc7703] focus:border-[#fc7703] transition-all"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3">
                      Área de Atuação
                    </label>
                    <select
                      value={feedbackForm.area}
                      onChange={(e) =>
                        setFeedbackForm({
                          ...feedbackForm,
                          area: e.target.value,
                        })
                      }
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc7703] focus:border-[#fc7703] transition-all"
                      required
                    >
                      <option value="">Selecione uma área</option>
                      <option value="Next (Crianças)">Next (Crianças)</option>
                      <option value="Hangout (Jovens)">Hangout (Jovens)</option>
                      <option value="Outside">Outside</option>
                      <option value="Louvor">Louvor</option>
                      <option value="Mídia">Mídia</option>
                      <option value="Recepção">Recepção</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3">
                      Avaliação: {feedbackForm.rating}/5
                    </label>
                    <div className="flex gap-2 sm:gap-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() =>
                            setFeedbackForm({ ...feedbackForm, rating: star })
                          }
                          className="hover:scale-125 transition-transform"
                          aria-label={`Nota ${star}`}
                        >
                          {star <= feedbackForm.rating ? (
                            <StarFill className="text-[#fc7703] w-6 h-6 sm:w-8 sm:h-8" />
                          ) : (
                            <StarIcon className="text-gray-300 w-6 h-6 sm:w-8 sm:h-8" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3">
                      Comentário
                    </label>
                    <textarea
                      value={feedbackForm.comment}
                      onChange={(e) =>
                        setFeedbackForm({
                          ...feedbackForm,
                          comment: e.target.value,
                        })
                      }
                      rows={4}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc7703] focus:border-[#fc7703] transition-all"
                      placeholder="Compartilhe sua experiência..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold bg-[#fc7703] hover:bg-[#e56902]"
                  >
                    Enviar Feedback
                  </Button>
                </form>
              )}
            </div>
            {/* Feedbacks Recentes */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Feedbacks Recentes
              </h3>
              {mockFeedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                    <p className="font-bold text-base sm:text-lg text-gray-900">
                      {feedback.volunteerName}
                    </p>
                    <span className="text-xs sm:text-sm font-semibold text-[#fc7703] bg-orange-50 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                      {feedback.area}
                    </span>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: feedback.rating }).map((_, i) => (
                      <StarFill
                        key={i}
                        className="text-[#fc7703] w-4 h-4 sm:w-5 sm:h-5"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    {feedback.comment}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {new Date(feedback.date).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hangar Tab */}
        {activeTab === "hangar" && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 mb-3">
                <div className="bg-[#fc7703] text-white p-3 rounded-lg shrink-0">
                  <Mortarboard className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
                  Hangar - Recursos para Voluntários
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-700 text-center sm:text-left">
                Materiais exclusivos para seu crescimento e desenvolvimento como
                voluntário
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {hangarResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#fc7703] to-orange-600 flex items-center justify-center text-white">
                    {resource.type === "video" ? (
                      <CameraVideo className="w-10 h-10 sm:w-12 sm:h-12" />
                    ) : (
                      <HeadphonesIcon className="w-10 h-10 sm:w-12 sm:h-12" />
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="text-xs font-bold text-[#fc7703] uppercase bg-orange-50 px-2 sm:px-3 py-1 rounded-full">
                        {resource.type === "video" ? "Vídeo" : "Áudio"}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {resource.duration}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4 group-hover:text-[#fc7703] transition-colors">
                      {resource.title}
                    </h4>
                    <Button
                      size="lg"
                      className="w-full py-3 sm:py-4 text-sm sm:text-base bg-[#fc7703] hover:bg-[#e56902] text-white font-bold"
                    >
                      Acessar Recurso
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
