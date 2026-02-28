import { Volume2, VolumeX, Palette } from 'lucide-react';
import { useGlobalSettings } from '../context/GlobalSettingsContext';
import { useState } from 'react';

export const FloatingControls = () => {
    const { settings, toggleAudio, setTheme } = useGlobalSettings();
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

    const themes = [
        { id: 'pastel', label: 'Pastel', color: '#f8c3c5' },
        { id: 'azul', label: 'Azul', color: '#a0c4ff' },
        { id: 'beige', label: 'Beige', color: '#e6e0d4' },
        { id: 'menta', label: 'Menta', color: '#b2f7ef' },
        { id: 'oliva', label: 'Oliva', color: '#a0b084' },
    ] as const;

    return (
        <div className="absolute bottom-6 right-6 flex flex-col items-center gap-4 z-40">

            {/* Theme Switcher */}
            <div className="relative flex flex-col items-center">
                {isThemeMenuOpen && (
                    <div className="absolute bottom-full mb-4 flex flex-col gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100 animate-in fade-in slide-in-from-bottom-5">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => {
                                    setTheme(t.id);
                                    setIsThemeMenuOpen(false);
                                }}
                                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${settings.themeVariant === t.id ? 'border-gray-800 scale-110' : 'border-transparent'
                                    }`}
                                style={{ backgroundColor: t.color }}
                                title={t.label}
                                aria-label={`Select ${t.label} theme`}
                            />
                        ))}
                    </div>
                )}
                <button
                    onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                    className="w-12 h-12 bg-white/90 backdrop-blur-md text-gray-700 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Toggle Theme Menu"
                >
                    <Palette size={20} />
                </button>
            </div>

            {/* Audio Toggle */}
            <button
                onClick={toggleAudio}
                className="w-12 h-12 bg-white/90 backdrop-blur-md text-gray-700 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label={settings.webPageAudio ? 'Mute Audio' : 'Play Audio'}
            >
                {settings.webPageAudio ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            {/* Audio Element */}
            {settings.webPageAudio && (
                <audio src="/assets/downloads/song1.mp3" autoPlay loop hidden />
            )}
        </div>
    );
};
