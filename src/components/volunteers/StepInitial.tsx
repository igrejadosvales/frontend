"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sparkles, CheckCircle2, UserCheck, HandHeart } from "lucide-react";

interface StepInitialProps {
  onSelectPath: (path: "existing" | "new") => void;
  onBack: () => void;
}

export default function StepInitial({
  onSelectPath,
  onBack,
}: StepInitialProps) {
  return (
    <section className="min-h-screen bg-[#121212] text-white">
      {/* Hero / Selection Section */}
      <div className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 py-20">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
          <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full text-center space-y-12">

          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-gray-300">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Faça a diferença hoje</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Sirva com propósito, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-600">
                transforme vidas.
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Cada talento importa. Descubra onde você se encaixa e use seus dons para construir algo eterno.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            {/* New Volunteer Card */}
            <button
              onClick={() => onSelectPath("new")}
              className="cursor-pointer group relative flex flex-col items-start p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300 text-left hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="p-3 rounded-xl bg-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <HandHeart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Quero ser voluntário
              </h3>
              <p className="text-gray-400 mb-8 grow">
                Ainda não sirvo, mas quero descobrir meus dons e começar minha jornada.
              </p>
              <div className="flex items-center text-sm font-semibold text-white group-hover:text-primary transition-colors">
                Começar agora <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Existing Volunteer Card */}
            <button
              onClick={() => onSelectPath("existing")}
              className="cursor-pointer group relative flex flex-col items-start p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-left hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Já sou voluntário
              </h3>
              <p className="text-gray-400 mb-8 grow">
                Já faço parte de uma equipe e quero acessar minha área ou ver escalas.
              </p>
              <div className="flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                Acessar área <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Steps / Info Section */}
      <div className="border-t border-white/5 bg-[#0f0f0f] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Como funciona?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              É simples fazer parte da família de voluntários. Siga a jornada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center space-y-4 group">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                <Users className="w-10 h-10 text-gray-300 group-hover:text-primary transition-colors" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Conheça as Áreas</h3>
              <p className="text-gray-400 leading-relaxed">
                Explore os ministérios e encontre aquele que faz seu coração bater mais forte.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center space-y-4 group">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                <CheckCircle2 className="w-10 h-10 text-gray-300 group-hover:text-primary transition-colors" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Cadastre-se</h3>
              <p className="text-gray-400 leading-relaxed">
                Preencha seus dados e conte-nos um pouco sobre sua vontade de servir.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center space-y-4 group">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                <Heart className="w-10 h-10 text-gray-300 group-hover:text-primary transition-colors" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Comece a Servir</h3>
              <p className="text-gray-400 leading-relaxed">
                Integre-se à equipe, receba treinamento e comece a impactar vidas.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
