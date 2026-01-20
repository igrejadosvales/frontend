"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { hangarResources, mockFeedbacks } from "@/lib/mock-volunteers";
import {
  MessageSquarePlus,
  GraduationCap,
  Star,
  CheckCircle2,
  Video,
  Headphones,
  ChevronLeft,
  User,
  LayoutDashboard,
  Clock
} from "lucide-react";

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
      setFeedbackForm({ name: "", area: "", rating: 5, comment: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      {/* Header */}
      <div className="bg-[#121212]/80 backdrop-blur-xl border-b border-white/5 py-4 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group shrink-0 cursor-pointer"
              title="Voltar"
            >
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
            </button>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-3">
                <LayoutDashboard className="w-5 h-5 text-primary" /> Área do Voluntário
              </h1>
            </div>
          </div>

          <div className="flex p-1 bg-white/5 rounded-lg border border-white/5">
            <button
              onClick={() => setActiveTab("feedback")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === "feedback"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <MessageSquarePlus className="w-4 h-4" /> Feedback
            </button>
            <button
              onClick={() => setActiveTab("hangar")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === "hangar"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <GraduationCap className="w-4 h-4" /> Hangar
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">

        {/* Feedback Tab */}
        {activeTab === "feedback" && (
          <div className="grid lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Formulário */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Compartilhe sua Experiência
                </h3>
                <p className="text-gray-400">
                  Sua opinião nos ajuda a construir uma comunidade melhor.
                </p>
              </div>

              {submitted ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-white">
                      Feedback Enviado!
                    </h4>
                    <p className="text-gray-400 max-w-xs mx-auto">
                      Obrigado por compartilhar sua experiência conosco!
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitFeedback} className="space-y-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Seu Nome</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={feedbackForm.name}
                        onChange={(e) =>
                          setFeedbackForm({ ...feedbackForm, name: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 transition-all"
                        placeholder="Digite seu nome"
                      />
                      <User className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Área de Atuação</label>
                    <select
                      value={feedbackForm.area}
                      onChange={(e) =>
                        setFeedbackForm({
                          ...feedbackForm,
                          area: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="bg-[#1a1a1a]">Selecione uma área</option>
                      <option value="Next (Crianças)" className="bg-[#1a1a1a]">Next (Crianças)</option>
                      <option value="Hangout (Jovens)" className="bg-[#1a1a1a]">Hangout (Jovens)</option>
                      <option value="Outside" className="bg-[#1a1a1a]">Outside</option>
                      <option value="Louvor" className="bg-[#1a1a1a]">Louvor</option>
                      <option value="Mídia" className="bg-[#1a1a1a]">Mídia</option>
                      <option value="Recepção" className="bg-[#1a1a1a]">Recepção</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Avaliação</label>
                    <div className="flex gap-2 p-3 bg-white/5 border border-white/5 rounded-lg w-fit">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() =>
                            setFeedbackForm({ ...feedbackForm, rating: star })
                          }
                          className="hover:scale-110 transition-transform focus:outline-none cursor-pointer"
                        >
                          <Star
                            className={`w-8 h-8 ${star <= feedbackForm.rating
                              ? "fill-primary text-primary"
                              : "text-gray-600"
                              }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Comentário</label>
                    <textarea
                      value={feedbackForm.comment}
                      onChange={(e) =>
                        setFeedbackForm({
                          ...feedbackForm,
                          comment: e.target.value,
                        })
                      }
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 transition-all resize-none"
                      placeholder="Compartilhe sua experiência..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg font-bold shadow-lg shadow-primary/20"
                  >
                    Enviar Feedback
                  </Button>
                </form>
              )}
            </div>

            {/* Feedbacks Recentes */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  Feedbacks Recentes
                </h3>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {mockFeedbacks.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-bold text-white text-lg">
                          {feedback.volunteerName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(feedback.date).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {feedback.area}
                      </span>
                    </div>

                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < feedback.rating ? "fill-primary text-primary" : "text-gray-700"}`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm">
                      "{feedback.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hangar Tab */}
        {activeTab === "hangar" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-linear-to-r from-primary/20 to-orange-600/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-primary/20 rounded-2xl text-primary">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Hangar
                  </h3>
                  <p className="text-lg text-gray-300 max-w-2xl">
                    Sua central de crescimento. Acesse materiais exclusivos e treinamentos para aprimorar seu serviço.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {hangarResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all cursor-pointer group flex flex-col"
                >
                  <div className="aspect-video bg-linear-to-br from-gray-900 to-gray-800 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {resource.type === "video" ? (
                      <Video className="w-12 h-12 text-gray-500 group-hover:text-primary transition-colors" />
                    ) : (
                      <Headphones className="w-12 h-12 text-gray-500 group-hover:text-primary transition-colors" />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded border border-white/10">
                        {resource.type === "video" ? "Vídeo" : "Áudio"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {resource.duration}
                    </div>
                    <h4 className="font-bold text-lg text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title}
                    </h4>
                    <Button
                      size="sm"
                      className="w-full mt-auto bg-white/5 hover:bg-primary hover:text-white text-gray-300 border border-white/10 transition-all"
                    >
                      Acessar Conteúdo
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
