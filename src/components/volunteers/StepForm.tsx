"use client";

import { useState } from "react";
import { ClipboardList, Lock, ChevronLeft, User, Mail, Phone, Calendar, GraduationCap } from "lucide-react";
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
    <div className="min-h-screen bg-[#121212] py-12 px-4 sm:px-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-2xl mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <button
          onClick={onBack}
          className="self-start flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group shrink-0 cursor-pointer"
          title="Voltar"
        >
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </div>
        </button>
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Suas informações
          </h1>
          <p className="text-lg text-gray-400">
            Preencha seus dados para continuar sua jornada.
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome Completo */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" /> Nome Completo *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 transition-all ${errors.name ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10"
                }`}
              placeholder="Digite seu nome completo"
            />
            {errors.name && (
              <p className="text-xs text-red-400 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 transition-all ${errors.email ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10"
                }`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-xs text-red-400 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Telefone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: formatPhone(e.target.value) })
                }
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 transition-all ${errors.phone ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10"
                  }`}
                placeholder="(00) 00000-0000"
                maxLength={15}
              />
              {errors.phone && (
                <p className="text-xs text-red-400 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Data de Nascimento */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" /> Data de Nascimento *
              </label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) =>
                  setFormData({ ...formData, birthDate: e.target.value })
                }
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-600 transition-all scheme-dark ${errors.birthDate ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10"
                  }`}
                max={new Date().toISOString().split("T")[0]}
              />
              {errors.birthDate && (
                <p className="text-xs text-red-400 font-medium">
                  {errors.birthDate}
                </p>
              )}
            </div>
          </div>

          {/* Escolaridade */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" /> Escolaridade *
            </label>
            <div className="relative">
              <select
                value={formData.education}
                onChange={(e) =>
                  setFormData({ ...formData, education: e.target.value as any })
                }
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white appearance-none cursor-pointer hover:bg-white/10 transition-colors"
                style={{ backgroundImage: 'none' }} // remove default arrow on some browsers if needed, but styling usually handles it
              >
                <option value="fundamental" className="bg-[#1a1a1a]">Ensino Fundamental</option>
                <option value="medio" className="bg-[#1a1a1a]">Ensino Médio</option>
                <option value="superior" className="bg-[#1a1a1a]">Ensino Superior</option>
                <option value="pos-graduacao" className="bg-[#1a1a1a]">Pós-graduação</option>
              </select>
              {/* Custom Arrow */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronLeft className="w-4 h-4 -rotate-90" />
              </div>
            </div>
          </div>

          {/* Aviso de Privacidade */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start gap-3 mt-4">
            <Lock size={18} className="text-primary mt-1 shrink-0" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Seus dados serão utilizados apenas para fins de contato
              relacionados ao voluntariado e não serão compartilhados com
              terceiros.
            </p>
          </div>

          {/* Botão de Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 mt-6"
          >
            Continuar para Áreas de Atuação →
          </Button>
        </form>
      </div>
    </div>
  );
}
