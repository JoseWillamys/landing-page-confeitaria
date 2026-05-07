'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const WHATSAPP_NUMBER = '5579999999999'

const products = [
  {
    name: 'Bolos Decorados',
    description:
      'Bolos personalizados para aniversários, casamentos e eventos especiais.',
    image: '/images/decorated-cake.jpg',
    price: 'A partir de R$ 120',
  },
  {
    name: 'Brigadeiros Gourmet',
    description:
      'Brigadeiros tradicionais e gourmet com diversos sabores e recheios.',
    image: '/images/brigadeiros.jpg',
    price: 'Cento R$ 80',
  },
  {
    name: 'Doces Finos',
    description:
      'Bem-casados, cajuzinhos, camafeus e outros doces para festas.',
    image: '/images/doces-finos.jpg',
    price: 'Cento R$ 95',
  },
  {
    name: 'Cupcakes',
    description:
      'Cupcakes decorados com coberturas cremosas e sabores variados.',
    image: '/images/cupcakes.jpg',
    price: 'Unidade R$ 8',
  },
  {
    name: 'Tortas',
    description:
      'Tortas de frutas, chocolate e sobremesas geladas para toda ocasião.',
    image: '/images/tortas.jpg',
    price: 'A partir de R$ 90',
  },
]

export function Products() {
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

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre: ${productName}`
    )
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank'
    )
  }

  return (
    <section ref={sectionRef} id="produtos" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossos Produtos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Delícias para todos os momentos
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Cada produto é feito com ingredientes frescos e selecionados,
            garantindo sabor e qualidade incomparáveis.
          </p>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {products.map((product, index) => (
            <Card
              key={product.name}
              className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleWhatsApp(product.name)}
                    className="rounded-full"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Encomendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
