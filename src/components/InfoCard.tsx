interface InfoCardProps {
    title: string;
    imageSrc: string;
    locationName: string;
    addressLines: string[];
    time: string;
    mapUrl: string;
}

export const InfoCard = ({
    title,
    imageSrc,
    locationName,
    addressLines,
    time,
    mapUrl
}: InfoCardProps) => {
    return (
        <div className="flex flex-col items-center max-w-md mx-auto my-16 px-4" data-aos="fade-up">
            <h2 className="text-4xl text-gray-800 font-serif mb-8 text-center uppercase tracking-widest">{title}</h2>

            <div className="relative w-full rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-xl mb-6 group">
                <img
                    src={imageSrc}
                    alt={locationName}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-gray-700 font-medium">
                    {time}
                </div>
            </div>

            <h3 className="text-2xl font-serif text-primary text-center mb-4">{locationName}</h3>

            <div className="text-gray-600 text-center mb-6 leading-relaxed">
                {addressLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>

            <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-gray-300 hover:border-primary text-gray-700 px-6 py-3 rounded-full transition-all hover:shadow-md group"
            >
                <img src="/assets/downloads/map-locator.png" alt="map" className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span className="uppercase text-sm tracking-wider font-medium">(Pulsa para ver en Maps)</span>
            </a>
        </div>
    );
};
