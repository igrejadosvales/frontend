"use client";

import { Button } from "@/components/ui/button";
import { volunteerAreas, VolunteerFormData } from "@/lib/mock-volunteers";
import Link from "next/link";
import {
  CheckCircle,
  ChatDots,
  ClipboardCheck,
  GeoAlt,
} from "react-bootstrap-icons";

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
    <div className="min-h-screen bg-white flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#fc7703] rounded-full flex items-center justify-center shadow-2xl">
            <CheckCircle size={48} className="text-white sm:w-14 sm:h-14" />
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            {needHelp ? "Pedido enviado!" : "Cadastro realizado!"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            {needHelp
              ? "Nossa equipe entrará em contato em breve para te ajudar a encontrar a área perfeita para você."
              : "Obrigado por se voluntariar! Em breve nossa equipe entrará em contato."}
          </p>
        </div>

        {/* Selected Areas (if any) */}
        {!needHelp && selectedAreasDetails.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Áreas selecionadas:
            </h2>
            <div className="grid gap-3 sm:gap-4">
              {selectedAreasDetails.map((area) => (
                <div
                  key={area.id}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border-2 border-gray-200"
                >
                  <div className="text-2xl sm:text-3xl shrink-0">
                    {area.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900">{area.name}</h3>
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Info Summary */}
        <div className="bg-orange-50 rounded-2xl p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Seus dados:
          </h3>
          <div className="space-y-2 text-left">
            <p className="text-sm sm:text-base text-gray-700 break-words">
              <strong>Nome:</strong> {formData.name}
            </p>
            <p className="text-sm sm:text-base text-gray-700 break-words">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              <strong>Telefone:</strong> {formData.phone}
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Próximos passos:
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fc7703] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Confirmação
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Você receberá um email de confirmação em breve.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fc7703] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Contato
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Nossa equipe entrará em contato para mais detalhes.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fc7703] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Comece a servir
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Junte-se ao time e faça a diferença!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8">
          <Button
            onClick={onBack}
            size="lg"
            className="bg-[#fc7703] hover:bg-[#e66d02] text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-lg shadow-xl"
          >
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
}
