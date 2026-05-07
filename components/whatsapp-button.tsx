'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Vim pelo site e gostaria de fazer um pedido.')

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    // Hide tooltip after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 8000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
          <div className="relative bg-card rounded-lg shadow-lg p-4 max-w-[240px]">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
              aria-label="Fechar"
            >
              <X className="h-3 w-3 text-muted-foreground" />
            </button>
            <p className="text-sm text-foreground font-medium">
              Olá! Posso ajudar com seu pedido?
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Clique para conversar no WhatsApp
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card rotate-45 shadow-lg" />
          </div>
        </div>
      )}

      {/* Button */}
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-[#25D366] hover:bg-[#20BD5A] text-white"
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </Button>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30 pointer-events-none" />
    </div>
  )
}
