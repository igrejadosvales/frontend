import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorBlue: "var(--color-blue)",
        colorOrange:"var(--color-orange)",
        buttonColor: "var(--color-bege)",
        gradient: "var(--gradient-card)",
        footer: "var(--footer)",
      },
      spacing: {
        header: '36.813rem',
        online: '31.25rem',
        photoOnline: '50rem',
        heightCardGeracoes: '29.688rem',
      },
      backgroundImage: {
        'background-header': "url('/global/background-header.webp')",
        'background-music': "url('/global/ivales_music.png')",
      },
      borderRadius: {
        borderDrink: '2rem',
        borderButton: '1rem',
        borderCardGeracoes: '3.125rem',
      }
    },
    
  },
  plugins: [],
};
export default config;
