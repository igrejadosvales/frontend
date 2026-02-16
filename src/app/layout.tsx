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
  metadataBase: new URL("https://igrejadosvales.com.br"),
  title: {
    default: "Igreja dos Vales",
    template: "%s | Igreja dos Vales",
  },
  description:
    "Bem-vindo à Igreja dos Vales. Uma comunidade de fé vibrante em Gravataí e Porto Alegre. Junte-se a nós para cultos, louvor e pequenos grupos.",
  keywords: [
    "Igreja",
    "Igreja em Gravataí",
    "Igreja em Porto Alegre",
    "Igreja Evangélica",
    "Cultos",
    "Família",
    "Fé",
    "Igreja dos Vales",
  ],
  authors: [{ name: "Igreja dos Vales" }],
  creator: "Igreja dos Vales",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://igrejadosvales.com.br",
    title: "Igreja dos Vales",
    description:
      "Uma igreja de fé, esperança e amor. Junte-se a nós nos cultos e pequenos grupos.",
    siteName: "Igreja dos Vales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igreja dos Vales",
    description:
      "Uma igreja de fé, esperança e amor. Junte-se a nós nos cultos e pequenos grupos.",
    creator: "@igrejadosvales",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://igrejadosvales.com.br",
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
                  "@type": "Organization",
                  "@id": "https://igrejadosvales.com.br/#organization",
                  name: "Igreja dos Vales",
                  url: "https://igrejadosvales.com.br",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://igrejadosvales.com.br/logo.png",
                    width: 200,
                    height: 50,
                  },
                  sameAs: [
                    "https://www.instagram.com/ivalesonline",
                    "https://www.youtube.com/@ivalesonline",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "financeiro@igrejadosvales.com.br",
                    contactType: "customer service",
                    areaServed: "BR",
                    availableLanguage: "Portuguese",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://igrejadosvales.com.br/#website",
                  url: "https://igrejadosvales.com.br",
                  name: "Igreja dos Vales",
                  description: "Uma comunidade de fé vibrante em Gravataí e Porto Alegre.",
                  publisher: {
                    "@id": "https://igrejadosvales.com.br/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://igrejadosvales.com.br/busca?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
