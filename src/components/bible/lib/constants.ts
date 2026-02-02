// Constantes para funcionalidade de Bíblia
import { HighlightColor } from "../types";

export const BIBLE_VERSIONS = [
  { value: "nvi", label: "NVI" },
  { value: "acf", label: "ACF" },
  { value: "aa", label: "AA" },
] as const;

export const HIGHLIGHT_COLORS: HighlightColor[] = [
  { name: "Amarelo", color: "bg-yellow-400/30", border: "border-yellow-400" },
  { name: "Verde", color: "bg-green-400/30", border: "border-green-400" },
  { name: "Azul", color: "bg-blue-400/30", border: "border-blue-400" },
  { name: "Rosa", color: "bg-pink-400/30", border: "border-pink-400" },
  { name: "Roxo", color: "bg-purple-400/30", border: "border-purple-400" },
];

export const FONT_SIZE = {
  MIN: 12,
  MAX: 32,
  DEFAULT: 18,
  STEP: 2,
} as const;

export const TEXT_COLORS = [
  { name: "Branco", value: "#FFFFFF" },
  { name: "Preto", value: "#000000" },
  { name: "Vermelho", value: "#EF4444" },
  { name: "Laranja", value: "#F97316" },
  { name: "Verde", value: "#22C55E" },
  { name: "Azul", value: "#3B82F6" },
  { name: "Roxo", value: "#A855F7" },
  { name: "Rosa", value: "#EC4899" },
] as const;

export const FONT_SIZES = [
  { label: "Pequeno", value: "14px" },
  { label: "Normal", value: "16px" },
  { label: "Grande", value: "18px" },
  { label: "Maior", value: "20px" },
] as const;
