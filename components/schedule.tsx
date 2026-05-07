'use client'

import { useEffect, useRef, useState } from 'react'
import { Clock, CalendarDays } from 'lucide-react'

const schedule = [
  { day: 'Segunda-feira', hours: '08:00 - 18:00', isOpen: true },
  { day: 'Terça-feira', hours: '08:00 - 18:00', isOpen: true },
  { day: 'Quarta-feira', hours: '08:00 - 18:00', isOpen: true },
  { day: 'Quinta-feira', hours: '08:00 - 18:00', isOpen: true },
  { day: 'Sexta-feira', hours: '08:00 - 18:00', isOpen: true },
  { day: 'Sábado', hours: '08:00 - 14:00', isOpen: true },
  { day: 'Domingo', hours: 'Fechado', isOpen: false },
]

export function Schedule() {
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

  const today = new Date().getDay()
  const adjustedToday = today === 0 ? 6 : today - 1

  return (
    <section
      ref={sectionRef}
      id="horarios"
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Horários
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Quando nos encontrar
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Estamos sempre prontos para atender você com todo carinho.
            Encomendas devem ser feitas com antecedência mínima de 48 horas.
          </p>
        </div>

        <div
          className={`mt-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 p-6 border-b border-border bg-primary/5">
              <CalendarDays className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Horário de Funcionamento
              </h3>
            </div>
            <div className="divide-y divide-border">
              {schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between p-4 sm:p-5 transition-colors ${
                    index === adjustedToday ? 'bg-primary/5' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index === adjustedToday && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                    <span
                      className={`font-medium ${
                        index === adjustedToday
                          ? 'text-primary'
                          : 'text-foreground'
                      }`}
                    >
                      {item.day}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span
                      className={`text-sm ${
                        item.isOpen
                          ? 'text-muted-foreground'
                          : 'text-destructive'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            * Encomendas especiais podem ter horários diferenciados. Entre em
            contato para mais informações.
          </p>
        </div>
      </div>
    </section>
  )
}
