'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart, Award, Users, Clock } from 'lucide-react'

const stats = [
  { icon: Heart, value: '5+', label: 'Anos de Experiência' },
  { icon: Award, value: '1000+', label: 'Bolos Entregues' },
  { icon: Users, value: '500+', label: 'Clientes Felizes' },
  { icon: Clock, value: '100%', label: 'Feito na Hora' },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sobre Nós
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Uma paixão que virou profissão
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Sou Andreza Santana, confeiteira em Aracaju/SE. Há mais de 5 anos
            transformo ingredientes selecionados em verdadeiras obras de arte
            comestíveis. Cada bolo, cada doce é feito com carinho, dedicação e o
            compromisso de fazer do seu momento especial algo inesquecível.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Acredito que a confeitaria vai além do sabor — é sobre criar
            memórias, celebrar conquistas e adoçar a vida das pessoas que
            confiam no meu trabalho.
          </p>
        </div>

        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
