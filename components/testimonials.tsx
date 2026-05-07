'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Noiva',
    content:
      'O bolo do meu casamento foi simplesmente perfeito! Além de lindo, estava delicioso. Todos os convidados elogiaram muito. Andreza superou todas as minhas expectativas!',
    rating: 5,
  },
  {
    name: 'João Santos',
    role: 'Aniversário da filha',
    content:
      'Encomendei o bolo de unicórnio para minha filha e ela amou! O atendimento foi excelente e o bolo chegou no horário combinado. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Ana Oliveira',
    role: 'Festa empresarial',
    content:
      'Os doces finos para nosso evento corporativo estavam impecáveis. Apresentação linda e sabor incomparável. Com certeza faremos pedidos novamente.',
    rating: 5,
  },
  {
    name: 'Carlos Lima',
    role: 'Aniversário de casamento',
    content:
      'Celebramos nosso aniversário de casamento com um bolo maravilhoso da Andreza. O carinho no atendimento fez toda a diferença!',
    rating: 5,
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} id="depoimentos" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-card hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed italic">
                  {`"${testimonial.content}"`}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
