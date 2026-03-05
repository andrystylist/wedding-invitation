import { useContext } from "react";

import { GlobalSettingsContext } from "@/types/globalSettingsTypes";

export const useGlobalSettings = () => {
  const context = useContext(GlobalSettingsContext);
  if (context === undefined) {
    throw new Error("useGlobalSettings must be used within a GlobalSettingsProvider");
  }
  return context;
};
