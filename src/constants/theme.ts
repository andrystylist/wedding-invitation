export type ThemeVariant = "azul" | "beige" | "menta" | "oliva" | "pastel";

export const THEMES: Record<ThemeVariant, { label: string; color: string }> = {
  pastel: { label: "Pastel", color: "#f8c3c5" },
  azul: { label: "Azul", color: "#a0c4ff" },
  beige: { label: "Beige", color: "#e6e0d4" },
  menta: { label: "Menta", color: "#b2f7ef" },
  oliva: { label: "Oliva", color: "#a0b084" },
};
