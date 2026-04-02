import { motion } from "motion/react";
import images from "@/assets/images";
import Carousel from "@/components/composed/Carousel";
import GoItem from "@/components/composed/TransportSlideItems/GoItem";
import ComebackItem from "@/components/composed/TransportSlideItems/ComebackItem";

const carouselItems = [<GoItem />, <ComebackItem />];

export default function Transport() {
  return (
    <>
      <img className="relative -bottom-0.5" src={images.divisorToDark} loading="eager" />
      <div className="inverse relative z-20 space-y-4 py-5 bg-[#b7c8bc]">
        <motion.h2
          className="text-white title title-font text-7xl mb-4 font-normal"
          initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
          whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ amount: 0.8, once: true }}
        >
          Transporte
        </motion.h2>
        <motion.div
          className="text-[#212121] text quattrocento-text text-base tracking-wider mb-2 mt-4"
          initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
          whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ amount: 0.8, once: true }}
        >
          <div className="text px-4 text-base">
            Si decides no quedarte a dormir en el Hotel Palmarito Beach, para facilitar el traslado
            pondremos a vuestra disposición el siguiente servicio de lancha:
          </div>
        </motion.div>
        <motion.div
          className="text-[#212121] text quattrocento-text text-base tracking-wider mb-2 mt-4"
          initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
          whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ amount: 0.8, once: true }}
        >
          <Carousel slides={carouselItems} options={{ loop: true }} />
        </motion.div>
      </div>
      <div className="relative overflow-visible -top-0.5">
        <img
          src={images.divisorToDark}
          loading="eager"
          alt="divisor-top"
          className="-scale-y-100"
        />
        <motion.div
          className="absolute -bottom-[12px] left-[8px] w-[87px]"
          initial={{
            opacity: 0,
            rotate: "-118deg",
            scale: 0.5,
            translateX: -15,
          }}
          whileInView={{
            opacity: 1,
            rotate: "-135deg",
            scale: 1.2,
            translateX: 0,
          }}
          transition={{ delay: 1.5, duration: 2 }}
          viewport={{ amount: 0.8, once: true }}
        >
          <img className="animate-wind" src={images.flower2} alt="flower" />
        </motion.div>
        <motion.div
          className="absolute -bottom-[10px] -left-[20px] z-20 w-[75px]"
          initial={{
            rotate: "8deg",
            scale: 0.2,
            translateX: -25,
          }}
          whileInView={{
            rotate: "18deg",
            scale: 1.2,
            translateX: 0,
          }}
          transition={{ delay: 0.25, duration: 2 }}
          viewport={{ amount: "some", once: true }}
        >
          <img className="animate-wind" src={images.flower1} alt="flower" />
        </motion.div>
      </div>
    </>
  );
}
