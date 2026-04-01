import Image from "next/image";
import { Metadata } from "next";
import { CountdownTimer } from "@/components/sprint/CountdownTimer";

export const metadata: Metadata = {
  title: "Sprint - Igreja dos Vales",
  description: "Contagem regressiva oficial para o evento Sprint 2026.",
};

export default function SprintPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen font-sans">
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex-shrink-0 font-black text-2xl tracking-tighter text-lime-500 uppercase italic">
            SPRINT 2026
          </div>

          <nav className="hidden lg:flex gap-8 font-semibold text-sm text-gray-600 uppercase">
            <a href="#home" className="hover:text-lime-500 transition-colors">
              Home
            </a>
            <a
              href="#percurso"
              className="hover:text-lime-500 transition-colors"
            >
              Percurso
            </a>
            <a href="#info" className="hover:text-lime-500 transition-colors">
              Informações
            </a>
          </nav>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7KKPlRusPMkqWpYgEmEYikUCRYU54dYu7WK19hQ9A0Ewitw/viewform" target="_blank" rel="noopener noreferrer" className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-6 rounded text-xs sm:text-sm uppercase transition-colors shadow-md">
            INSCRIÇÕES 2026
          </a>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col relative" id="home">
        <div className="w-full h-[300px] md:h-[500px] relative shrink-0 bg-gray-200">
          <Image
            src="/sprint.png"
            alt="Sprint Event Hero Banner"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-neutral-100 flex flex-col items-center border-b border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-800 mb-2">
              A prova começa em:
            </h2>
          </div>

          <CountdownTimer />
        </section>

        <section
          className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
          id="info"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-lime-950 uppercase">
                Informações da Prova
              </h2>
              <div className="w-24 h-1 bg-lime-500 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-gray-500 text-xs sm:text-sm font-bold uppercase mb-2">
                  Data da Corrida
                </h3>
                <p className="text-2xl sm:text-3xl font-black text-gray-800">
                  11 de Abril
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-gray-500 text-xs sm:text-sm font-bold uppercase mb-2">
                  Concentração
                </h3>
                <p className="text-2xl sm:text-3xl font-black text-gray-800">
                  07:00
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-gray-500 text-xs sm:text-sm font-bold uppercase mb-2">
                  Largada
                </h3>
                <p className="text-2xl sm:text-3xl font-black text-gray-800">
                  07:30
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-gray-500 text-xs sm:text-sm font-bold uppercase mb-2">
                  Quilometragem
                </h3>
                <p className="text-2xl sm:text-3xl font-black text-gray-800">
                  4.800m
                </p>
                <span className="text-gray-500 font-medium">(3 Milhas)</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 border-t border-gray-200"
          id="estrutura"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-lime-950 uppercase">
                Estrutura do Evento
              </h2>
              <div className="w-24 h-1 bg-lime-500 mx-auto mt-6"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Preparamos uma estrutura completa e segura para você focar no
                que importa: a sua corrida e o nosso propósito.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-lime-500 text-white rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-800 uppercase leading-tight">
                    Gazebos{" "}
                    <span className="text-lime-600 text-base sm:text-lg block sm:inline mt-1 sm:mt-0">
                      (3 unidades)
                    </span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-green-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Entrega de kits
                  </li>
                  <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-green-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Entrega de comida e água
                  </li>
                  <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-green-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Enfermagem
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-lime-500 text-white rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-800 uppercase leading-tight">
                    Presença de Apoio
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-green-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Brigadistas
                  </li>
                  <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-green-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Enfermeiros
                  </li>
                  <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-green-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Guarda Municipal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
          id="percurso"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-lime-950 uppercase">
                Local da Prova
              </h2>
              <div className="w-24 h-1 bg-lime-500 mx-auto mt-6"></div>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-bold">
                Av. João Benjamin Zaffari
              </p>
            </div>

            <div className="w-full max-w-5xl mx-auto rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[350px] sm:h-[500px] relative bg-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=AV.%20JO%C3%83O%20BENJAMIN%20ZAFFARI&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Mapa do Local da Corrida"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="w-full py-24 px-4 bg-lime-500 text-white text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            SPRINT - CORRA COM PROPÓSITO
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto">
            Seu corpo é a ferramenta para o mover do Espírito.
            Um evento da Igreja do Vales para unir esporte e fé com um propósito real: edificar o corpo, a alma e o espírito.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7KKPlRusPMkqWpYgEmEYikUCRYU54dYu7WK19hQ9A0Ewitw/viewform" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-lime-500 font-bold py-4 px-10 rounded text-lg uppercase transition-colors shadow-lg">
            GARANTA SUA INSCRIÇÃO
          </a>
        </section>
      </main>
    </div>
  );
}
