'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Gostaria de mais informações.')

const contactInfo = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: process.env.NEXT_PUBLIC_CLIENT_ADDRESS,
    href: 'https://maps.google.com/?q=Aracaju+Sergipe+Brasil',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: process.env.NEXT_PUBLIC_CLIENT_PHONE,
    href: `tel:+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_CLIENT_EMAIL}`,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: process.env.NEXT_PUBLIC_CLIENT_INSTAGRAM,
    href: `https://instagram.com/${process.env.NEXT_PUBLIC_CLIENT_INSTAGRAM}`,
  },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Vamos conversar?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Entre em contato para fazer sua encomenda ou tirar dúvidas. Estamos
            prontos para criar algo especial para você!
          </p>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-card rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            <Button
              asChild
              size="lg"
              className="w-full mt-6 rounded-full bg-primary text-primary-foreground"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar Mensagem no WhatsApp
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125005.24555879738!2d-37.11775387851562!3d-10.9472273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab1e0c0d97c8d%3A0x12345678!2sAracaju%2C%20SE!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Andreza Santana Confeitaria em Aracaju"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
