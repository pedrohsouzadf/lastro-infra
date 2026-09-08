# LASTRO — Landing Page Institucional

Landing page oficial da **LASTRO** (Infraestrutura Cloud & Confiabilidade).

## Stack Tecnológico
- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Design Tokens:** Fundo `#0D1117`, Superfície `#131A22`, Borda `#1F2933`, Acento `#39D353`, Alerta `#C0392B`.
- **Tipografia:** Space Grotesk (Títulos), Inter (Corpo), JetBrains Mono (Código & Métricas).

## Como Executar Localmente

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Build para Produção

```bash
npm run build
npm run start
```

## Como Fazer Deploy Gratuito

### Opção 1: Vercel (Recomendado)
1. Crie um repositório no GitHub e faça push deste projeto.
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
3. Importe o repositório `lastro-landing`.
4. Clique em **Deploy** (o Next.js App Router é detectado e configurado automaticamente).

### Opção 2: GitHub Pages (Exportação Estática)
1. No arquivo `next.config.ts`, adicione `output: 'export'`.
2. Execute `npm run build` para gerar a pasta `out/`.
3. Configure o GitHub Pages para servir a partir da branch `gh-pages` ou pasta `/out`.

## Integração do Formulário de Contato
A função de envio está centralizada em [`src/components/ContactForm.tsx`](./src/components/ContactForm.tsx).
Para conectar com serviços como **Resend**, **Formspree** ou Webhooks próprios, basta atualizar a função `handleSubmit`.
