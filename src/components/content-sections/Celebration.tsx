import { useState } from "react";
import { motion } from "motion/react";
import MapModal from "@/components/composed/MapModal/MapModal";
import AnimatedIcon from "@/components/unit/AnimatedIcon";
import images from "@/assets/images";

const LOCATION = { lat: 10.37139, lng: -75.56648 };

export default function Celebration() {
  const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
      <img className="relative -bottom-0.5" src={images.divisorToDark} loading="eager" />
      <div className="inverse relative z-20 space-y-4 bg-[#b7c8bc]">
        <motion.h2
          className="text-white title title-font text-7xl mb-4 font-normal"
          initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
          whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ amount: 0.8, once: true }}
        >
          Celebración
        </motion.h2>
        <motion.h3
          className="text-[#212121] text quattrocento-text text-base font-bold tracking-wider mb-2 mt-4 px-4"
          initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
          whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ amount: 0.8, once: true }}
        >
          <span>HOTEL PALMARITO BEACH</span>
        </motion.h3>
        <motion.img
          className="h-auto w-full rounded-3xl object-cover p-4"
          src={images.celebrationPlace}
          alt="Hotel Palmarito Beach"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text mt-2 px-4 tracking-wider"
          initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
          whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ amount: 0.8, once: true }}
        >
          Isla de Tierra Bomba
        </motion.p>
        <motion.p
          className="text px-4 tracking-wider"
          initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
          whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ amount: 0.8, once: true }}
        >
          Playa Dorada, Cartagena de Indias
        </motion.p>
        <motion.p
          className="mt-2 px-4 text-[#212121] text font-bold tracking-wider"
          initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
          whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ amount: 0.8, once: true }}
        >
          21:30 h
        </motion.p>
        <motion.button
          className={`mx-auto flex flex-col items-center justify-center gap-3 cursor-pointer`}
          onClick={() => setMapOpen(true)}
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          <AnimatedIcon
            src={images.mapIcon}
            animation="lightbounce"
            helperText="(Pulsa para ver en Maps)"
          />
        </motion.button>
        <MapModal
          isOpen={mapOpen}
          onClose={() => setMapOpen(false)}
          title="Celebración Hotel Palmarito Beach"
          location={LOCATION}
          placeName="Hotel Palmarito Beach"
          description="Isla de Tierra Bomba, Playa Dorada, Cartagena de Indias, Colombia"
        />
      </div>
    </>
  );
}
