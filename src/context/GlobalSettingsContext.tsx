import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type ThemeVariant = 'azul' | 'beige' | 'menta' | 'oliva' | 'pastel';

interface GlobalSettings {
    webPageAudio: boolean;
    themeVariant: ThemeVariant;
    isEnvelopeOpen: boolean;
}

interface GlobalSettingsContextType {
    settings: GlobalSettings;
    toggleAudio: () => void;
    setTheme: (theme: ThemeVariant) => void;
    setEnvelopeOpen: (isOpen: boolean) => void;
}

const defaultSettings: GlobalSettings = {
    webPageAudio: false,
    themeVariant: 'pastel',
    isEnvelopeOpen: false,
};

const GlobalSettingsContext = createContext<GlobalSettingsContextType | undefined>(undefined);

export const GlobalSettingsProvider = ({ children }: { children: ReactNode }) => {
    const [settings, setSettings] = useState<GlobalSettings>(() => {
        const saved = localStorage.getItem('weddingConfig');
        return saved ? JSON.parse(saved) : defaultSettings;
    });

    useEffect(() => {
        localStorage.setItem('weddingConfig', JSON.stringify(settings));
        document.body.className = `theme-${settings.themeVariant}`;
    }, [settings]);

    const toggleAudio = () => {
        setSettings((prev) => ({ ...prev, webPageAudio: !prev.webPageAudio }));
    };

    const setTheme = (themeVariant: ThemeVariant) => {
        setSettings((prev) => ({ ...prev, themeVariant }));
    };

    const setEnvelopeOpen = (isOpen: boolean) => {
        setSettings((prev) => ({ ...prev, isEnvelopeOpen: isOpen }));
    };

    return (
        <GlobalSettingsContext.Provider value={{ settings, toggleAudio, setTheme, setEnvelopeOpen }}>
            {children}
        </GlobalSettingsContext.Provider>
    );
};

export const useGlobalSettings = () => {
    const context = useContext(GlobalSettingsContext);
    if (context === undefined) {
        throw new Error('useGlobalSettings must be used within a GlobalSettingsProvider');
    }
    return context;
};
