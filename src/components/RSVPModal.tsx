import { useState } from 'react';
import { X } from 'lucide-react';

interface RSVPModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RSVPModal = ({ isOpen, onClose }: RSVPModalProps) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Dummy submission
        onClose();
        alert('¡Gracias por confirmar tu asistencia!');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#fffdf9] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative" data-aos="zoom-in" data-aos-duration="300">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-serif text-center text-primary mb-2">Confirmar</h2>
                    <h3 className="text-xl text-center text-gray-500 uppercase tracking-widest mb-8">Asistencia</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="Tus nombres y apellidos"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">¿Asistirás?</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                                    <option>Sí, allí estaré</option>
                                    <option>Lo siento, no podré</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Acompañantes</label>
                                <input
                                    type="number"
                                    min="0"
                                    defaultValue="0"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Alergias o dieta especial</label>
                            <textarea
                                rows={2}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                                placeholder="Ej: Vegano, celíaco..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#e6dfd3] hover:bg-[#d8ceba] text-gray-800 font-medium py-3 rounded-lg transition-colors border border-[#d8ceba]"
                        >
                            Enviar Confirmación
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export const ConfirmSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 bg-white text-center px-4" id="confirmar">
            <h2 className="text-4xl font-serif text-gray-800 mb-12 uppercase tracking-widest" data-aos="fade-up">
                Confirmar Asistencia
            </h2>

            <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center cursor-pointer mb-8"
                data-aos="zoom-in"
            >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
                <img
                    src="/assets/downloads/stamp.png"
                    alt="Confirm"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain hover:scale-110 hover:rotate-6 transition-all duration-500 relative z-10"
                />
            </button>

            <p className="text-xl text-gray-600 font-serif italic" data-aos="fade-up" data-aos-delay="100">
                ¿Nos acompañas?
            </p>

            <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};
