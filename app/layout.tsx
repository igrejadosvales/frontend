import type { Metadata } from "next";
import { Instrument_Sans } from 'next/font/google';
import "./globals.css";


const InstrumentSans = Instrument_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Igreja dos Vales | Aqui é a sua casa",
  description: "Generated by create next app",
  authors: { name: 'IVLS Tech' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${InstrumentSans.className} ${InstrumentSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
