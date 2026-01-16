import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // Import DM Sans
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"], // Explicitly loading regular, medium, and bold
});

export const metadata: Metadata = {
  title: {
    default: "Igreja dos Vales",
    template: "%s | Igreja dos Vales",
  },
  description: "Bem-vindo à Igreja dos Vales. Uma comunidade de fé vibrante em Gravataí e Porto Alegre. Junte-se a nós para cultos, louvor e pequenos grupos.",
  keywords: [
    "Igreja",
    "Igreja em Gravataí",
    "Igreja em Porto Alegre",
    "Igreja Evangélica",
    "Cultos",
    "Família",
    "Fé",
    "Igreja dos Vales"
  ],
  authors: [{ name: "Igreja dos Vales" }],
  creator: "Igreja dos Vales",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://igrejadosvales.com.br", // Replace with actual URL
    title: "Igreja dos Vales",
    description: "Uma igreja de fé, esperança e amor. Junte-se a nós nos cultos e pequenos grupos.",
    siteName: "Igreja dos Vales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igreja dos Vales",
    description: "Uma igreja de fé, esperança e amor. Junte-se a nós nos cultos e pequenos grupos.",
    creator: "@igrejadosvales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dmSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Igreja dos Vales",
                  "url": "https://igrejadosvales.com.br",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://igrejadosvales.com.br/busca?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": ["Início", "Sobre Nós", "Ministérios", "Eventos", "Pequenos Grupos", "Contato"],
                  "url": [
                    "https://igrejadosvales.com.br",
                    "https://igrejadosvales.com.br/sobre",
                    "https://igrejadosvales.com.br/ministerios",
                    "https://igrejadosvales.com.br/eventos",
                    "https://igrejadosvales.com.br/pequenos-grupos",
                    "https://igrejadosvales.com.br/contato"
                  ]
                }
              ]
            }),
          }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
