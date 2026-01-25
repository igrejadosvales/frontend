import { ChevronRight } from "lucide-react";
import React from "react";

// Não exporta mais ChurchInfoItem, pois churchInfos fica interno

export const ChurchInfoGrid: React.FC = () => {
  // Informações internas, fácil de editar
  const churchInfos = [
    {
      title: "Culto Especial de Domingo",
      description:
        "Participe do culto especial neste domingo às 19h. Traga sua família!",
      color: "#1e293b",
      linkText: "Saiba mais",
      linkHref: "#",
    },
    {
      title: "Inscrições para Retiro 2026",
      description:
        "Garanta sua vaga no retiro anual. Inscrições abertas até 10/02.",
      color: "#334155",
      linkText: "Saiba mais",
      linkHref: "#",
    },
    {
      title: "Campanha de Alimentos",
      description:
        "Doe alimentos não perecíveis para ajudar famílias da comunidade.",
      color: "#0f766e",
      linkText: "Saiba mais",
      linkHref: "#",
    },
    {
      title: "Novo Grupo de Jovens",
      description:
        "Encontros toda sexta-feira às 20h na sala 3. Venha fazer parte!",
      color: "#7c3aed",
      linkText: "Saiba mais",
      linkHref: "#",
    },
    {
      title: "Aulas de Discipulado",
      description:
        "Quartas-feiras às 20h. Inscreva-se na secretaria da igreja.",
      color: "#be185d",
      linkText: "Saiba mais",
      linkHref: "#",
    },
    {
      title: "Transmissão ao Vivo",
      description:
        "Assista aos cultos ao vivo todos os domingos às 10h e 19h em nosso site.",
      color: "#f59e42",
      linkText: "Saiba mais",
      linkHref: "#",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 md:px-6">
      <div className="mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
          Um lugar para você e sua família
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Fique por dentro dos avisos, eventos e oportunidades para se envolver
          na vida da igreja.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {churchInfos.map((item, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-700 flex flex-col min-h-48 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: `linear-gradient(120deg, ${item.color} 60%, #18181b 100%)`,
            }}
          >
            <div className="flex-1 p-8 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-200">
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed mb-2">
                {item.description}
              </p>
              {item.linkText && item.linkHref && (
                <div className="group">
                  <a
                    href={item.linkHref}
                    className="groupLink flex items-center gap-1 mt-2 font-bold text-sm hover:text-primary transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.linkText}
                    <ChevronRight className="h-4 w-4 font-bold mt-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              )}
            </div>
            {/* Marca d'água sutil para visual moderno */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="8" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
