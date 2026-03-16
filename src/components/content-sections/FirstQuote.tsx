import { motion } from "motion/react";

export default function FirstQuote() {
  return (
    <section className="not-inverse relative z-20 space-y-4 p-5 pt-0 text-3xl parisienne-text">
      <div className="flex justify-end">
        <motion.div
          initial={{ rotate: "-60deg", scale: 0.6, translateX: "80%" }}
          animate={{ rotate: 0, scale: 1, translateX: 0 }}
          whileInView={{ rotate: "-40deg", scale: 1, translateX: "20%" }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 2 }}
        >
          <img
            className="w-28 animate-wind"
            src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677592/flower3_j5susz.png"
            alt="flower"
          />
        </motion.div>
      </div>
      <motion.div
        className="text-right text overflow-visible break-words [&_a]:underline [&_ol]:inline-block [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:text-start [&_ul]:inline-block [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-start"
        initial={{ opacity: 0, translateY: 30 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 }, translateY: 0 }}
      >
        Todos los días pueden ser el comienzo de algo nuevo
      </motion.div>
    </section>
  );
}
