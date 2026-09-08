import type { Config } from "tailwindcss";

/**
 * Paleta oficial LASTRO (brand board).
 * Verde técnico #39D353 é o ÚNICO acento — o antigo limão #c9f56a foi removido.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0D1117",
          elevated: "#131A22",
        },
        border: {
          DEFAULT: "#1F2933",
        },
        text: {
          DEFAULT: "#F7F7F5",
          muted: "#8B98A5",
        },
        accent: {
          DEFAULT: "#39D353",
          deep: "#153E2B",
        },
        alert: {
          DEFAULT: "#C0392B",
        },
        // Aliases usados no markup — antes não existiam e as classes eram descartadas
        ink: "#0D1117",
        paper: "#F7F7F5",
        muted: "#8B98A5",
        line: "rgba(210, 232, 216, 0.13)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};
export default config;
