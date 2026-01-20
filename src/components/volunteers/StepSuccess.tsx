"use client";

import { Button } from "@/components/ui/button";
import { volunteerAreas, VolunteerFormData } from "@/lib/mock-volunteers";
import {
  CheckCircle2,
  Mail,
  Phone,
  User,
  ArrowRight,
  Sparkles,
  MapPin,
  CalendarCheck,
  MessageCircle
} from "lucide-react";

interface StepSuccessProps {
  formData: VolunteerFormData;
  needHelp?: boolean;
  onBack: () => void;
}

export default function StepSuccess({
  formData,
  needHelp,
  onBack,
}: StepSuccessProps) {
  const selectedAreasDetails = formData.selectedAreas
    ? volunteerAreas.filter((area) => formData.selectedAreas?.includes(area.id))
    : [];

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center space-y-12 animate-in fade-in zoom-in duration-500">

        {/* Success Header */}
        <div className="space-y-6">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            {/* Sparkles decoration */}
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-500 animate-pulse" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {needHelp ? "Pedido enviado!" : "Cadastro realizado!"}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {needHelp
                ? "Sua solicitação chegou até nós. Logo entraremos em contato para te guiar."
                : "Bem-vindo ao time! Glória a Deus por sua vida e disposição em servir."}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Summary Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> Seus Dados
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Nome</p>
                  <p className="text-gray-200 font-medium">{formData.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                  <p className="text-gray-200 font-medium break-all">{formData.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Telefone</p>
                  <p className="text-gray-200 font-medium">{formData.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Areas or Next Steps */}
          <div className="space-y-6">
            {!needHelp && selectedAreasDetails.length > 0 && (
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Áreas Escolhidas
                </h3>
                <div className="space-y-3">
                  {selectedAreasDetails.map(area => (
                    <div key={area.id} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-gray-200 font-medium">{area.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Próximos Passos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">1</span>
                  Confirmação por email
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">2</span>
                  Contato da liderança
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">3</span>
                  Treinamento inicial
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-8">
          <Button
            onClick={onBack}
            size="lg"
            className="font-bold px-10 py-6 rounded-xl shadow-xl transition-all hover:scale-105"
          >
            Voltar ao início <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

      </div>
    </div>
  );
}
