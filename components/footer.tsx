import { Cake, Heart, Instagram, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Cake className="h-8 w-8 text-primary" />
            <span className="font-sans text-xl font-bold">Andreza Santana</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#inicio"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#produtos"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              Produtos
            </a>
            <a
              href="#contato"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`https://instagram.com/${process.env.NEXT_PUBLIC_CLIENT_INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/60">
            © {currentYear} Andreza Santana Confeitaria. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 text-xs text-background/40 flex items-center justify-center gap-1">
            Feito com <Heart className="h-3 w-3 text-primary fill-primary" /> em
            Aracaju/SE
          </p>
        </div>
      </div>
    </footer>
  )
}
