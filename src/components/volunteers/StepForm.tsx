"use client";

import { useState } from "react";
import { ClipboardList, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VolunteerFormData } from "@/lib/mock-volunteers";

interface StepFormProps {
  onSubmit: (data: VolunteerFormData) => void;
  onBack: () => void;
}

export default function StepForm({ onSubmit, onBack }: StepFormProps) {
  const [formData, setFormData] = useState<VolunteerFormData>({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    education: "medio",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof VolunteerFormData, string>>
  >({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof VolunteerFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (
      !/^\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4}$/.test(
        formData.phone.replace(/\s/g, ""),
      )
    ) {
      newErrors.phone = "Telefone inválido";
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "Data de nascimento é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2");
    }
    return value;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-[#fc7703] mb-6 sm:mb-8 flex items-center gap-2 text-sm font-medium"
          >
            ← Voltar
          </button>
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Suas informações
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Preencha seus dados para continuar sua jornada de voluntariado.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Nome Completo */}
          <div>
            <label className="block text-base font-semibold text-gray-900 mb-3">
              Nome Completo *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-5 py-4 text-lg border-2 rounded-lg focus:ring-2 focus:ring-[#fc7703] focus:border-[#fc7703] transition-all ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Digite seu nome completo"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-base font-semibold text-gray-900 mb-3">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-5 py-4 text-lg border-2 rounded-lg focus:ring-2 focus:ring-[#fc7703] focus:border-[#fc7703] transition-all ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-base font-semibold text-gray-900 mb-3">
              Telefone/WhatsApp *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: formatPhone(e.target.value) })
              }
              className={`w-full px-5 py-4 text-lg border-2 rounded-lg focus:ring-2 focus:ring-[#fc7703] focus:border-[#fc7703] transition-all ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600 font-medium">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Data de Nascimento */}
          <div>
            <label className="block text-base font-semibold text-gray-900 mb-3">
              Data de Nascimento *
            </label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) =>
                setFormData({ ...formData, birthDate: e.target.value })
              }
              className={`w-full px-5 py-4 text-lg border-2 rounded-lg focus:ring-2 focus:ring-[#fc7703] focus:border-[#fc7703] transition-all ${
                errors.birthDate ? "border-red-500" : "border-gray-300"
              }`}
              max={new Date().toISOString().split("T")[0]}
            />
            {errors.birthDate && (
              <p className="mt-2 text-sm text-red-600 font-medium">
                {errors.birthDate}
              </p>
            )}
          </div>

          {/* Escolaridade */}
          <div>
            <label className="block text-base font-semibold text-gray-900 mb-3">
              Escolaridade *
            </label>
            <select
              value={formData.education}
              onChange={(e) =>
                setFormData({ ...formData, education: e.target.value as any })
              }
              className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc7703] focus:border-[#fc7703] transition-all"
            >
              <option value="fundamental">Ensino Fundamental</option>
              <option value="medio">Ensino Médio</option>
              <option value="superior">Ensino Superior</option>
              <option value="pos-graduacao">Pós-graduação</option>
            </select>
          </div>

          {/* Aviso de Privacidade */}
          <div className="bg-gray-50 border-l-4 border-[#fc7703] rounded-lg p-5 flex items-start gap-3">
            <Lock size={20} className="text-[#fc7703] mt-1 flex-shrink-0" />
            <p className="text-sm text-gray-700 leading-relaxed">
              Seus dados serão utilizados apenas para fins de contato
              relacionados ao voluntariado e não serão compartilhados com
              terceiros.
            </p>
          </div>

          {/* Botão de Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full py-6 text-lg font-bold bg-[#fc7703] hover:bg-[#e66d02] rounded-lg shadow-xl"
          >
            Continuar para Áreas de Atuação →
          </Button>
        </form>
      </div>
    </div>
  );
}
