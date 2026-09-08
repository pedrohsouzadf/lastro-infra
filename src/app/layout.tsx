import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LASTRO — Infraestrutura cloud para empresas com sistema em produção",
  description:
    "Diagnóstico, correção e acompanhamento de infraestrutura em AWS, Vercel e Supabase. Custo, segurança, backup e performance sob controle.",
  metadataBase: new URL("https://lastro.cloud"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LASTRO — Infraestrutura cloud para empresas com sistema em produção",
    description:
      "Diagnóstico, correção e acompanhamento de infraestrutura em AWS, Vercel e Supabase. Custo, segurança, backup e performance sob controle.",
    url: "https://lastro.cloud",
    siteName: "LASTRO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LASTRO — Infraestrutura cloud para empresas com sistema em produção",
    description:
      "Diagnóstico, correção e acompanhamento de infraestrutura em AWS, Vercel e Supabase. Custo, segurança, backup e performance sob controle.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LASTRO Infraestrutura Cloud",
  description:
    "Diagnóstico, estruturação e acompanhamento de infraestrutura cloud e confiabilidade para startups e empresas de tecnologia.",
  url: "https://lastro.cloud",
  areaServed: {
    "@type": "Country",
    name: "Brazil",
  },
  knowsAbout: [
    "AWS",
    "Vercel",
    "Supabase",
    "Terraform",
    "DevOps",
    "FinOps",
    "Cloud Security",
    "PostgreSQL Performance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Infraestrutura Cloud",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Raio-X de Infraestrutura",
          description:
            "Diagnóstico completo de custo, risco de segurança, backup e roadmap priorizado em 5 dias úteis.",
        },
        price: "1497.00",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estruturação & Correção de Nuvem",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Acompanhamento Contínuo de Infraestrutura",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text min-h-screen flex flex-col font-body selection:bg-[#1F2933]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
