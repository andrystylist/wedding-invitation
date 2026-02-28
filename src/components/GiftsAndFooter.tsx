import { Copy } from 'lucide-react';
import { useState } from 'react';

export const GiftsSection = () => {
    const [copied, setCopied] = useState(false);
    const iban = "ESXX XXXX XXXX XXXX XXXX";

    const handleCopy = () => {
        navigator.clipboard.writeText(iban);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 bg-[#f4f1ea] px-4 text-center">
            <div className="max-w-2xl mx-auto" data-aos="fade-up">

                <img
                    src="/assets/downloads/gift.png"
                    alt="Gift"
                    className="w-20 h-20 mx-auto mb-8 opacity-80"
                />

                <h2 className="text-4xl font-serif text-gray-800 mb-8 uppercase tracking-widest">
                    Regalo
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
                    El mejor regalo es vuestra presencia, pero si queréis tener un detalle con nosotros:
                </p>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 relative group max-w-sm mx-auto">
                    <h3 className="text-xl font-serif text-primary mb-4">Nuria Rodríguez</h3>

                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 font-mono text-gray-700 tracking-wider">
                        <span className="truncate mr-4">{iban}</span>
                        <button
                            onClick={handleCopy}
                            className="text-gray-400 hover:text-primary transition-colors flex-shrink-0"
                            aria-label="Copiar IBAN"
                        >
                            {copied ? <span className="text-xs text-primary font-sans font-medium uppercase tracking-widest absolute -top-8 right-6 bg-white px-3 py-1 rounded shadow animate-bounce">¡Copiado!</span> : <Copy size={20} />}
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <img src="/assets/downloads/1.jpg" alt="" className="w-full h-full object-cover blur-sm" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4" data-aos="zoom-in">
                <h2 className="text-4xl font-serif text-white/90 mb-4 tracking-widest">Nos vemos en</h2>

                {/* Countdown placeholder styling */}
                <div className="flex justify-center gap-4 md:gap-8 my-12 text-white/80 font-serif">
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-light mb-2">120</span>
                        <span className="uppercase text-xs tracking-widest">Días</span>
                    </div>
                    <span className="text-4xl font-light opacity-50">:</span>
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-light mb-2">14</span>
                        <span className="uppercase text-xs tracking-widest">Horas</span>
                    </div>
                    <span className="text-4xl font-light opacity-50">:</span>
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-light mb-2">35</span>
                        <span className="uppercase text-xs tracking-widest">Min</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 text-3xl font-serif mt-16 text-primary">
                    <span>N</span>
                    <span className="text-4xl opacity-50 italic">&</span>
                    <span>J</span>
                </div>
            </div>
        </footer>
    );
};
