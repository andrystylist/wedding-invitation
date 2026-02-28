interface HeroProps {
    names: string;
    date: string;
    location: string;
}

export const Hero = ({ names, date, location }: HeroProps) => {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-[110%] -top-[5%] filter blur-[2px] scale-105"
                style={{ backgroundImage: 'url("/assets/downloads/cover.jpg")' }}
            ></div>

            {/* Overlay gradient for readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/40 via-white/20 to-white/70"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">

                {/* Decorative top flower */}
                <img
                    src="/assets/downloads/flower1.png"
                    alt=""
                    className="w-48 md:w-64 mb-6 opacity-90 drop-shadow-sm animate-pulse-slow"
                />

                <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-white/50 w-full">
                    <h2 className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-600 mb-6 pb-4 border-b border-gray-400/30 w-1/2 mx-auto">
                        ¡Nos casamos!
                    </h2>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-800 mb-6 drop-shadow-sm leading-tight">
                        {names.split('&').map((name, i) => (
                            <span key={i} className="block lg:inline">
                                {name.trim()}
                                {i === 0 && <span className="text-4xl md:text-5xl lg:text-6xl mx-4 italic text-primary">&amp;</span>}
                            </span>
                        ))}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-700 font-light tracking-widest mt-8 mb-2">
                        {date}
                    </p>
                    <p className="text-sm md:text-base text-gray-600 tracking-wider uppercase">
                        {location}
                    </p>
                </div>

            </div>

            {/* Torn Paper Divider overlay at the bottom */}
            <div
                className="absolute bottom-[-2px] left-0 w-full h-16 z-30 bg-repeat-x"
                style={{
                    backgroundImage: 'url("/assets/downloads/divisor.png")',
                    backgroundSize: 'auto 100%'
                }}
            ></div>
        </section>
    );
};
