import type { NextConfig } from "next";
import path from "path";

/**
 * `next dev` e `next build` compartilhavam o mesmo diretório `.next`.
 * Quando um build roda (ou o dev server reinicia), os chunks que a aba
 * aberta no browser ainda referencia são apagados — o App Router tenta
 * buscar o payload RSC, não encontra nada, e o overlay mostra
 * "TypeError: Failed to fetch" vindo de fetch-server-response.js.
 *
 * Separando os diretórios, build e dev deixam de se atropelar.
 * Produção continua em `.next` (Vercel/`next start` esperam esse caminho).
 */
const distDir = process.env.NODE_ENV === "development" ? ".next-dev" : ".next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir,
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
