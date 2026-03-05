import { createContext } from "react";

import type { ThemeVariant } from "@/constants/theme";

export interface GlobalSettings {
  webPageAudio: boolean;
  themeVariant: ThemeVariant;
  isEnvelopeOpen: boolean;
}

export interface GlobalSettingsContextType {
  settings: GlobalSettings;
  themeColor: string;
  toggleAudio: () => void;
  setTheme: (theme: ThemeVariant) => void;
  toggleEnvelopeOpen: () => void;
  envelopeOpen: boolean;
}

export const defaultSettings: GlobalSettings = {
  webPageAudio: false,
  themeVariant: "menta",
  isEnvelopeOpen: false,
};

export const GlobalSettingsContext = createContext<GlobalSettingsContextType | undefined>(
  undefined,
);
