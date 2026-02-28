import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type ThemeVariant = 'azul' | 'beige' | 'menta' | 'oliva' | 'pastel';

export const THEMES: Record<ThemeVariant, { label: string; color: string }> = {
    pastel: { label: 'Pastel', color: '#f8c3c5' },
    azul: { label: 'Azul', color: '#a0c4ff' },
    beige: { label: 'Beige', color: '#e6e0d4' },
    menta: { label: 'Menta', color: '#b2f7ef' },
    oliva: { label: 'Oliva', color: '#a0b084' },
};

interface GlobalSettings {
    webPageAudio: boolean;
    themeVariant: ThemeVariant;
    isEnvelopeOpen: boolean;
}

interface GlobalSettingsContextType {
    settings: GlobalSettings;
    themeColor: string;
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

    const themeColor = THEMES[settings.themeVariant].color;

    return (
        <GlobalSettingsContext.Provider value={{ settings, themeColor, toggleAudio, setTheme, setEnvelopeOpen }}>
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
