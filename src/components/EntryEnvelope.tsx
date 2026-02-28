import { useState } from 'react';
import { useGlobalSettings } from '../context/GlobalSettingsContext';

interface EntryEnvelopeProps {
    onOpen: () => void;
}

export const EntryEnvelope = ({ onOpen }: EntryEnvelopeProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleAudio, settings } = useGlobalSettings();

    const handleOpen = () => {
        setIsOpen(true);
        if (!settings.webPageAudio) toggleAudio(); // Start audio when sealing is broken

        setTimeout(() => {
            onOpen();
        }, 1000); // 1s animation duration
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#f4f1ea] transition-all duration-1000 ${isOpen ? 'opacity-0 pointer-events-none translate-y-[-10%]' : 'opacity-100'
                }`}
        >
            <div className="relative text-center cursor-pointer" onClick={handleOpen}>
                <div className="mb-4 text-xl tracking-widest text-[#8c7b65] font-serif uppercase animate-pulse">
                    ¡Pulsa aquí y desliza!
                </div>
                <div className="relative w-64 h-48 bg-[#ede8df] rounded shadow-xl mx-auto flex items-center justify-center mt-8 border border-[#e2dacb] overflow-hidden">
                    {/* Top flap */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[#e6dfd3] origin-top border-b border-[#d8ceba]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>

                    {/* Seal */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-amber-600 shadow-md flex items-center justify-center border-2 border-amber-700 hover:scale-110 transition-transform">
                        <span className="text-amber-100 font-serif text-2xl italic">NJ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
