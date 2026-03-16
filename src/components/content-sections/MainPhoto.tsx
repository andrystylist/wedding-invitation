import { motion, useInView } from "motion/react";
import { useRef } from "react";
import images from "@/assets/images";

export default function MainPhoto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <div ref={ref} className="relative overflow-hidden py-8">
      <div className="relative z-10 bg-gradient-to-br from-[#d7d7d7] to-[#d2d2d2] ">
        <img
          className="absolute  -top-[25px] z-20 rotate-3 scale-x-[1.1]"
          src={images.divisorLine}
          alt="img border"
        />
        <motion.div
          className="main-photo-cover relative overflow-hidden"
          animate={
            isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0.5, filter: "blur(2px)" }
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.img
            className="h-auto w-full object-cover"
            src={images.mainPhoto}
            alt="img-cover"
            loading="eager"
            animate={isInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
        </motion.div>
        <img
          className="absolute -bottom-[25px] z-20 rotate-3 -scale-y-100 scale-x-[1.1]"
          src={images.divisorLine}
          loading="eager"
          alt="img border"
        />
      </div>
    </div>
  );
}
