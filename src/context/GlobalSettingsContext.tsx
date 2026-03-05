import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import { THEMES } from "@/constants/theme";

import type { GlobalSettings } from "@/types/globalSettingsTypes";
import { defaultSettings, GlobalSettingsContext } from "@/types/globalSettingsTypes";

export const GlobalSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<GlobalSettings>(() => {
    const saved = localStorage.getItem("WeddingConfig");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const [envelopeOpen, setEnvelopeOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("WeddingConfig", JSON.stringify(settings));
    document.body.className = `theme-${settings.themeVariant}`;
  }, [settings]);

  const toggleAudio = () => {
    setSettings((prev) => ({ ...prev, webPageAudio: !prev.webPageAudio }));
  };

  const setTheme = (themeVariant: GlobalSettings["themeVariant"]) => {
    setSettings((prev) => ({ ...prev, themeVariant }));
  };

  const themeColor = THEMES[settings.themeVariant].color;

  const toggleEnvelopeOpen = () => {
    setEnvelopeOpen((prev) => !prev);
  };

  return (
    <GlobalSettingsContext.Provider
      value={{ settings, themeColor, toggleAudio, setTheme, toggleEnvelopeOpen, envelopeOpen }}
    >
      {children}
    </GlobalSettingsContext.Provider>
  );
};
