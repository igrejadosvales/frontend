import { Hero } from "@/components/section/Hero";
import { InfoCard } from "@/components/ui/info-card";
import { FAQSection } from "@/components/section/Faq";
import { ChurchInfoGrid } from "@/components/grid/ChurchInfoGrid";
import { HandHeart, Mail, Car } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Hero />

      <ChurchInfoGrid />

      <section className="max-w-7xl mx-auto py-16 px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Como se Envolver
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja como Deus pode usar seus dons para causar um impacto eterno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            imageSrc="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"
            title="Voluntariado"
            description="Participe da missão de promover o evangelho servindo em um time de voluntários."
            linkText="Saiba mais"
            linkHref="/voluntarios"
          />
          <InfoCard
            imageSrc="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
            title="Pequeno Grupo"
            description="Participe de um pequeno grupo de discipulado para aprender mais sobre Jesus e sua vontade."
            linkText="Saiba mais"
            linkHref="/igrupos"
          />
          <InfoCard
            imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            title="Vagas"
            description="Explore oportunidades de trabalho para usar seus talentos em um ambiente ministerial."
            linkText="Saiba mais"
            linkHref="/"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 md:px-6 mb-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Outras formas de contribuir
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            title="Doe Pessoalmente"
            icon={<HandHeart />}
            description="Você pode contribuir pessoalmente em qualquer uma de nossas unidades durante os cultos de fim de semana."
          />
          <InfoCard
            title="Envie pelo Correio"
            icon={<Mail />}
            description={
              <div>
                A/C: Financeiro Igreja dos Vales
                <br />
                Rua Exemplo, 123
                <br />
                Cidade, SP 12345-678
              </div>
            }
          />
          <InfoCard
            title="Bens e Ativos"
            icon={<Car />}
            description={
              <div>
                Se você possui outros ativos (veículos, imóveis, etc) que
                gostaria de doar, por favor envie um email para{" "}
                <Link
                  href="mailto:financeiro@igrejadosvales.com.br"
                  className="underline hover:text-white"
                >
                  financeiro@igrejadosvales.com.br
                </Link>
              </div>
            }
          />
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
