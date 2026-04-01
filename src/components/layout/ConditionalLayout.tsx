"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/igrupos" || pathname === "/sprint";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="flex-1">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
