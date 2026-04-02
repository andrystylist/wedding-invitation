import { motion } from "motion/react";
import images from "@/assets/images";
import type { QRCodeProps } from "react-qr-code";
import _QRCodeMod from "react-qr-code";
// The CJS bundle exposes QRCode as a named export; cast handles Vite interop
const QRCode =
  (_QRCodeMod as unknown as { QRCode: React.ComponentType<QRCodeProps> }).QRCode ??
  (_QRCodeMod as unknown as React.ComponentType<QRCodeProps>);

const GOOGLE_PHOTOS_URL = import.meta.env.VITE_GOOGLE_PHOTOS_URL;

export default function PhotoShare() {
  return (
    <>
      <motion.div className="not-inverse relative py-1 pb-4 -mt-0.5 ">
        <motion.h2
          className="text-[#80a594] title title-font text-7xl mb-4 font-normal"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          Álbum de foto
        </motion.h2>
        <motion.div
          className="text px-4"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          <p className="text-base font-bold tracking-wider text-[#212121] text">
            ¡Ayúdanos a inmortalizar cada momento!
          </p>
          <img className="icon mx-auto " alt="camera" src={images.camera} width="80" height="80" />
          <div className="text px-4 pb-4 text-base">
            Escanea este QR o haz clic en él y comparte las fotos que tomes durante la boda. ¡Nos
            hará muchísima ilusión verlas!
          </div>
        </motion.div>
        <a target="_blank" rel="noreferrer" href={GOOGLE_PHOTOS_URL}>
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
            viewport={{ once: true }}
          >
            <QRCode size={250} className="mx-auto w-[150px]" value={GOOGLE_PHOTOS_URL} />
          </motion.div>
        </a>
        <motion.div
          className="text px-4"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          <p className="text-[#212121] text text-base font-bold tracking-wider px-4 pb-1 pt-3 text-base">
            Código del álbum
          </p>
          <button className="text mx-auto flex items-center justify-center">
            <img className="animate-lightpulse" width="24" src={images.copy} alt="copy" />
            <span id="qr-1" className="ml-2">
              BODA-N&amp;J25
            </span>
          </button>
        </motion.div>
      </motion.div>
      <img
        src={images.divisorToDark}
        alt="divisor-top"
        className="pointer-events-none relative -scale-x-100"
      />
      <div className="relative overflow-visible relative -top-0.5">
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
    </>
  );
}
