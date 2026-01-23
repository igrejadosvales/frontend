"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Como faço para me tornar membro?",
    answer:
      "Para se tornar membro, você pode participar do nosso curso de integração 'Bem-vindo à Família', que acontece periodicamente. Fale com um de nossos líderes ou visite o balcão de informações após o culto para saber a próxima data.",
  },
  {
    question: "Quais são os horários dos cultos?",
    answer:
      "Nossos cultos acontecem todos os domingos às 10h e às 18h. Também temos cultos de oração às terças-feiras às 20h e cultos de jovens aos sábados às 19h30.",
  },
  {
    question: "A igreja possui ministério infantil?",
    answer:
      "Sim! Temos o 'Vales Kids', um ministério dedicado a cuidar e ensinar crianças de 0 a 12 anos. As crianças são divididas por faixa etária e participam de atividades lúdicas e bíblicas durante todos os nossos cultos de domingo.",
  },
  {
    question: "Como posso participar de um pequeno grupo?",
    answer:
      "É muito simples! Acesse a seção 'iGrupos' aqui no nosso site para encontrar um grupo próximo a sua casa ou com o seu perfil. Você pode entrar em contato diretamente com o líder do grupo pelo WhatsApp.",
  },
  {
    question: "Onde a igreja está localizada?",
    answer:
      "Estamos localizados na Avenida Principal, 1000 - Centro. Temos estacionamento próprio e fácil acesso por transporte público.",
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ item, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group transition-colors cursor-pointer"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform duration-300 ease-in-out",
            isOpen && "transform rotate-180 text-primary"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out font-light text-gray-400 overflow-hidden",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-24 mt-5 max-w-7xl mx-auto">
      <div className="px-4 md:px-6">
        <h2 className="text-5xl font-bold text-white mb-6">FAQs</h2>
        <div className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
