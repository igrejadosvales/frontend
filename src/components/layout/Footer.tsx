import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Ministérios", href: "/ministerios" },
    { name: "Eventos", href: "/eventos" },
    { name: "Contato", href: "/contato" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
  ]

  return (
    <footer className="w-full border-t bg-neutral-100">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight">Igreja dos Vales</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Levando a palavra de Deus e transformando vidas através do amor e da comunhão.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Rua da Igreja, 123 - Centro</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contato@igrejadosvales.com</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cultos</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="font-medium text-foreground">Domingo:</span> 10h e 19h</p>
              <p><span className="font-medium text-foreground">Quarta-feira:</span> 20h</p>
              <p><span className="font-medium text-foreground">Sábado:</span> 19h (Jovens)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Igreja dos Vales. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
