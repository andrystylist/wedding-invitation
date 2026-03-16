import { motion } from "motion/react";

export default function SecondQuote() {
  return (
    <>
      <img
        className="relative -bottom-0.5"
        src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677586/divisor_yhttzy.png"
        loading="eager"
      />
      <div className="inverse relative z-20 space-y-4 p-5  bg-[#b7c8bc] text-white text-alt parisienne-text text-3xl">
        <motion.div
          className="text-center text-alt overflow-visible wrap-break-word"
          initial={{ opacity: 0, translateY: 30 }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        >
          Queremos que sean testigos de nuestro amor acompañándonos en este día tan especial
        </motion.div>
      </div>
      <div className="relative overflow-visible relative -top-0.5">
        <img
          src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677586/divisor_yhttzy.png"
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
          animate={{
            filter: "none",
            opacity: 1,
            transform: "scale(1.2) rotate(-135deg)",
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            className="animate-wind"
            src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677591/flower2_kliool.webp"
            alt="flower"
          />
        </motion.div>
        <motion.div
          className="absolute -bottom-[10px] -left-[20px] z-20 w-[75px]"
          initial={{
            opacity: 0,
            rotate: "8deg",
            scale: 0.5,
            translateX: -25,
          }}
          animate={{
            filter: "none",
            opacity: 1,
            transform: "scale(1.2) rotate(18deg)",
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            className="animate-wind"
            src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677590/flower1_f9yguk.webp"
            alt="flower"
          />
        </motion.div>
      </div>
    </>
  );
}
