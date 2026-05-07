# 🍰 Landing Page - Confeitaria

Este repositório contém uma landing page desenvolvida com **Next.js (App Router)** e gerada inicialmente pelo [v0.dev](https://v0.dev) da Vercel.  
O objetivo é apresentar de forma moderna e responsiva uma confeitaria, destacando produtos, depoimentos e informações de contato.

---

## 📂 Estrutura do Projeto

### `/app`
- `layout.tsx` → Layout raiz (fontes, metadados, providers)
- `page.tsx` → Página inicial (landing page)
- `globals.css` → Estilos globais e tokens de design

### `/components`
- `header.tsx` → Navegação fixa com menu responsivo
- `hero.tsx` → Seção principal com CTA
- `about.tsx` → Seção "Sobre Nós"
- `products.tsx` → Cards de produtos
- `schedule.tsx` → Horário de funcionamento
- `testimonials.tsx` → Depoimentos de clientes
- `contact.tsx` → Seção de contato com mapa
- `footer.tsx` → Rodapé
- `whatsapp-button.tsx` → Botão flutuante do WhatsApp
- `theme-provider.tsx` → Gerenciamento de tema claro/escuro

### `/components/ui`
- Biblioteca **shadcn/ui** com componentes prontos (Button, Card, Dialog, etc.)

### `/public/images`
- Imagens da confeitaria (bolos, brigadeiros, cupcakes, etc.)

### `/hooks`
- Hooks customizados como `use-mobile.ts` e `use-toast.ts`

### `/lib`
- Funções utilitárias, como `cn()` para classes condicionais

### Arquivos de Configuração
- `package.json` → Dependências e scripts
- `tsconfig.json` → Configuração TypeScript
- `next.config.mjs` → Configuração Next.js
- `components.json` → Configuração shadcn/ui
- `postcss.config.mjs` → Configuração PostCSS/Tailwind

---

## ⚙️ Tecnologias Utilizadas

- [Next.js 16](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com) para deploy
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
