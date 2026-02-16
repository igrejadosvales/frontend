"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "iGrupos", href: "/igrupos" },
    { name: "Voluntariado", href: "/voluntarios" },
    { name: "Bíblia", href: "/biblia" },
  ];

  return (
    <>
      <header className="z-40 w-full">
        <div className="bg-transparent absolute w-full flex h-16 items-center justify-between px-4 md:px-6">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="Igreja dos Vales Logo"
              width={200}
              height={50}
              className="flex items-center"
            ></Image>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-white font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button>Doar Agora</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-999 w-full h-full bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className=" mx-auto h-full flex flex-col p-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold tracking-tight">
              Igreja dos Vales
            </span>
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          <nav className="flex flex-col items-end justify-center gap-3 w-full mt-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-medium transition-colors hover:text-primary text-right w-full border-b-2 border-border pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-auto px-10 py-5" size="sm">
              Oferte
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}
