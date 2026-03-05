import images from "@/assets/images";
import ENV from "@/constants/env";

function CoupleNames() {
  return (
    <div className="relative my-8">
      <img src={images.goldRing} alt="outer-ring" className="mx-auto w-72 animate-pulse" />
      <div className="title-font text-[#80a594] title absolute bottom-0 left-0 right-0 top-0 z-20 flex w-full flex-col items-center justify-center text-6xl">
        <h2 className="mt-2 w-full overflow-visible">{ENV.COUPLE_FRST_NAME}</h2>
        <span className="w-full scale-75 overflow-visible leading-[0.7] parisienne-text">
          &amp;
        </span>
        <h2 className="w-full overflow-visible">{ENV.COUPLE_SCND_NAME}</h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto h-full w-72">
        <div className="absolute -left-0.5 top-1">
          <img
            src={images.flower1}
            alt="flower"
            className="w-24"
            style={{
              transformOrigin: "left bottom",
              animation: "flower-sway 4s ease-in-out infinite",
            }}
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            src={images.flower2}
            alt="flower"
            className="w-40"
            style={{
              transformOrigin: "right top",
              animation: "flower-sway 4s ease-in-out 2s infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function WeddingDate() {
  const weddingDate = `${ENV.WEDDING_DATE_DAY} · ${ENV.WEDDING_DATE_MONTH} · ${ENV.WEDDING_DATE_YEAR}`;

  const renderDate = () => {
    return weddingDate.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block whitespace-pre [transform-style:preserve-3d]"
        style={{
          animation: `date-wave 7s ease-in-out ${index * 0.12}s infinite`,
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="quattrocento-text not-inverse text-[#212121] text px-4 py-4 flex flex-col items-center justify-center">
      <div className="text text-2xl">¡NOS CASAMOS!</div>
      <div className="text text-xl tracking-widest">
        —{" "}
        <p
          className="relative inline-block perspective-normal [--base-color:#a1a1aa] [--base-gradient-color:#000] dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] ![--base-color:#393939] ![--base-gradient-color:#393939]"
          style={{ color: "var(--base-color)" }}
        >
          {renderDate()}
        </p>{" "}
        —
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <>
      <CoupleNames />
      <WeddingDate />
    </>
  );
}
