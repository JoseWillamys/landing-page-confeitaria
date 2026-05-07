import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Andreza Santana | Confeitaria Artesanal em Aracaju',
  description: 'Doces e bolos artesanais feitos com amor e ingredientes selecionados. Confeitaria em Aracaju/SE especializada em bolos decorados, doces finos e sobremesas para eventos.',
  keywords: ['confeitaria', 'bolos artesanais', 'doces finos', 'Aracaju', 'Sergipe', 'bolos decorados', 'sobremesas'],
  authors: [{ name: 'Andreza Santana' }],
  openGraph: {
    title: 'Andreza Santana | Confeitaria Artesanal',
    description: 'Doces e bolos artesanais feitos com amor em Aracaju/SE',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
