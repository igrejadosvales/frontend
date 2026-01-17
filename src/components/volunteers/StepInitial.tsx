"use client";

import { Button } from "@/components/ui/button";

interface StepInitialProps {
  onSelectPath: (path: "existing" | "new") => void;
  onBack: () => void;
}

export default function StepInitial({
  onSelectPath,
  onBack,
}: StepInitialProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Use seus dons.
            <br />
            Faça parte do time.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
            Voluntariar-se é uma das melhores maneiras de se conectar. Deus lhe
            deu talentos únicos para ajudar a construir Sua igreja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onSelectPath("new")}
              size="lg"
              className="bg-[#fc7703] hover:bg-[#e66d02] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-xl"
            >
              Quero ser voluntário
            </Button>
            <Button
              onClick={() => onSelectPath("existing")}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-lg backdrop-blur-sm"
            >
              Já sou voluntário
            </Button>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Impacte outros e construa a igreja
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Não podemos esperar para ver como Deus usará suas habilidades,
            paixões e dons. Siga os passos simples abaixo para encontrar
            oportunidades de voluntariado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fc7703] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto">
              1
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Explore as áreas
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Saiba mais sobre as diferentes áreas e encontre uma que se alinhe
              com seus dons únicos.
            </p>
          </div>

          <div className="text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fc7703] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto">
              2
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Cadastre-se
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Preencha suas informações e escolha as áreas onde você gostaria de
              servir.
            </p>
          </div>

          <div className="text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fc7703] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto">
              3
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Comece a servir
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Veja Deus trabalhar através de seus dons para causar um impacto
              duradouro em outros.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Veja o que Deus pode fazer através de você.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Entre no seu propósito e faça parte da missão.
          </p>
          <Button
            onClick={() => onSelectPath("new")}
            size="lg"
            className="bg-[#fc7703] hover:bg-[#e66d02] text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-xl"
          >
            Começar agora
          </Button>
        </div>
      </div>
    </div>
  );
}
