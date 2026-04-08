import images from "@/assets/images";
import { motion } from "motion/react";

export default function Itinerary() {
  return (
    <>
      <div className="relative overflow-visible relative -top-0.5">
        <motion.img
          src={images.divisorToDark}
          loading="eager"
          alt="divisor-top"
          className="-scale-y-100"
        />
        <div
          className="absolute -bottom-[16px] right-[4px] w-[87px]"
          style={{ filter: "none", opacity: 1, transform: "scale(1.2) rotate(-135deg)" }}
        >
          <motion.img
            className="animate-wind"
            loading="eager"
            src={images.flower5}
            alt="flower"
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
            viewport={{ once: true }}
          />
        </div>
        <div
          className="absolute -bottom-[10px] -right-[25px] w-[70px]"
          style={{ filter: "none", transform: "scale(1.2) rotate(-138deg)" }}
        >
          <motion.img
            className="animate-windy"
            loading="eager"
            src={images.flower1}
            alt="flower"
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="py-1 relative not-inverse">
        <motion.h2
          className="text-[#80a594] title title-font text-7xl mb-4 font-normal"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          Itinerario
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          <div className="relative w-full pb-6">
            <img className="mx-auto" src={images.canopy} alt="ceremony" width="100" />
            <div className="mb-6 px-4 mt-3 tracking-wider">
              <p className="text-[#212121] text text-base font-bold tracking-wider">17:00 h</p>
              <p>Ceremonia</p>
            </div>
            <img className="mx-auto" src={images.cocktail} alt="cocktail" width="100" />
            <div className="mb-6 px-4 mt-3 tracking-wider">
              <p className="text-[#212121] text text-base font-bold tracking-wider">21:30 h</p>
              <p>Cocktail</p>
            </div>
            <img className="mx-auto" src={images.food} alt="food" width="100" />
            <div className="mb-6 px-4 mt-3 tracking-wider">
              <p className="text-[#212121] text text-base font-bold tracking-wider">22:30 h</p>
              <p>Banquete</p>
            </div>
            <img className="mx-auto" src={images.dance} alt="party" width="100" />
            <div className="mb-6 px-4 mt-3 tracking-wider">
              <p className="text-[#212121] text text-base font-bold tracking-wider">00:00 h</p>
              <p>Fiesta</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
