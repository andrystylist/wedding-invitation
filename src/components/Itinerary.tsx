interface TimelineItem {
    time: string;
    title: string;
    iconSrc: string;
}

const schedule: TimelineItem[] = [
    { time: '18:00 h', title: 'Ceremonia', iconSrc: '/assets/downloads/love-letter.png' },
    { time: '19:30 h', title: 'Cocktail', iconSrc: '/assets/downloads/cocktail.png' },
    { time: '20:30 h', title: 'Banquete', iconSrc: '/assets/downloads/food.png' },
    { time: '23:00 h', title: 'Fiesta', iconSrc: '/assets/downloads/party.png' },
];

export const Itinerary = () => {
    return (
        <section className="py-24 bg-[#fcf8f2] relative" id="itinerario">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-serif text-center text-gray-800 mb-16 uppercase tracking-widest" data-aos="fade-up">
                    Itinerario
                </h2>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[50%] transform -translate-x-1/2 w-px h-full bg-primary/30 top-0 bottom-0 z-0"></div>

                    <div className="flex flex-col gap-12 sm:gap-16">
                        {schedule.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center w-full ${isLeft ? 'justify-start md:text-right' : 'justify-end md:text-left'} group z-10`}
                                    data-aos={isLeft ? 'fade-right' : 'fade-left'}
                                >

                                    <div className={`w-[45%] md:w-[40%] text-gray-700 ${!isLeft && 'order-1'} transition-transform group-hover:scale-105`}>
                                        <p className="font-serif text-3xl mb-1 text-primary">{item.time}</p>
                                        <p className="text-xl uppercase tracking-wider">{item.title}</p>
                                    </div>

                                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg border-4 border-[#fcf8f2] flex items-center justify-center z-20 group-hover:border-primary transition-colors`}>
                                        <img src={item.iconSrc} alt={item.title} className="w-8 h-8 opacity-80" />
                                    </div>

                                    {/* Invisible spacer for flex balancing */}
                                    <div className="w-[45%] md:w-[40%]"></div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
