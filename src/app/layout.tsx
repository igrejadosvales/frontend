import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Igreja dos Vales",
    template: "%s | Igreja dos Vales",
  },
  description: "Uma igreja de fé, esperança e amor. Junte-se a nós nos cultos e pequenos grupos.",
  keywords: ["Igreja", "Fé", "Vales", "Culto", "Cristão", "Comunidade"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
