# Engenho Nogueira Site

Este é o site oficial do Engenho Nogueira, desenvolvido com [Next.js](https://nextjs.org), React e Tailwind CSS. O projeto apresenta a história, produtos, visitação, restaurante e formas de contato do Engenho Nogueira, tradicional produtor de cachaça artesanal em Viçosa do Ceará.

## Funcionalidades

- **Página inicial** com banner, apresentação e navegação responsiva.
- **Seção Sobre**: história do engenho e da família Nogueira.
- **Catálogo de Produtos**: carrossel responsivo com os principais produtos (cachaças, licores, drinks).
- **Visitação**: informações sobre o tour guiado, regras e agendamento via WhatsApp.
- **Restaurante**: cardápio completo com entradas, guarnições, refeições, bebidas, drinks e sobremesas.
- **Contato**: links para WhatsApp, Instagram, Facebook, YouTube e TikTok.
- **Portfólio de Clientes**: lista de estabelecimentos que comercializam os produtos.
- **Botão flutuante mobile** para voltar ao início.
- **Design responsivo** para desktop e mobile.

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

2. Configure as variáveis de ambiente em um arquivo `.env` na raiz do projeto:
   ```
   NEXT_PUBLIC_WHATSAPP_URL="https://wa.me/558896973991"
   NEXT_PUBLIC_INSTAGRAM_URL="https://www.instagram.com/engenhonogueira"
   NEXT_PUBLIC_FACEBOOK_URL="https://www.facebook.com/cachacanogueira"
   NEXT_PUBLIC_YOUTUBE_URL="https://www.youtube.com/channel/UCDA9FiislCGXkel5IvjdKRw"
   NEXT_PUBLIC_TIKTOK_URL="https://www.tiktok.com/@engenhonogueira"
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura de Pastas

- `src/app/page.tsx` — Página inicial
- `src/components/Products.tsx` — Carrossel de produtos
- `src/components/Contact.tsx` — Seção de contato e redes sociais
- `src/app/AllProducts/page.tsx` — Catálogo completo de produtos
- `src/app/Restaurant/page.tsx` — Cardápio do restaurante
- `public/` — Imagens e fontes

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper](https://swiperjs.com/) (carrossel de produtos)
- [React Icons](https://react-icons.github.io/react-icons/)

## Deploy

O deploy pode ser feito facilmente na [Vercel](https://vercel.com/), com suporte a variáveis de ambiente para produção.

## Créditos

Desenvolvido por Engenho Nogueira.  
Contato: [@engenhonogueira](https://www.instagram.com/engenhonogueira) | WhatsApp: (88) 9 9697-3991

---

> “Cada cachaça deste catálogo é fruto de tradição e paixão.”
