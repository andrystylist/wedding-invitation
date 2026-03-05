import images from "@/assets/images";

export default function EnvelopeButton() {
  return (
    <button className="fixed top-0 z-50 mx-auto h-[100vh] w-full max-w-md overflow-hidden cursor-pointer">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-40 flex h-full w-full flex-col justify-center">
        <div className="absolute block h-[75vh] w-full will-change-transform bottom-0">
          <div className="invitation absolute block h-[70vh] w-[70vh] border top-[10%] left-1/2 -translate-x-full translate-y-[5%] rotate-45 bg-[#FAFAF8] border-[#d8d8d6]"></div>
          <div className="invitation absolute block h-[70vh] w-[70vh] border top-[10%] left-1/2 translate-x-0 translate-y-[5%] rotate-45 bg-[#FAFAF8] border-[#d8d8d6]"></div>
          <div className="invitation absolute block h-[70vh] w-[70vh] rounded-3xl border-2 bottom-[10%] left-1/2 -translate-x-1/2 translate-y-[55%] rotate-45 bg-[#FAFAF8] border-[#d8d8d6] z-[2]"></div>
          <div className="absolute bottom-0 left-0 right-0 flex h-1/2 w-full items-center justify-center z-[3]">
            <div className="__classNameName_e19656 text-base not-inverse opacity-100">
              <p className="text">Tenemos una noticia...</p>
              <p className="text animate-lightpulse">¡PULSA AQUÍ Y DESLIZA!</p>
            </div>
          </div>
        </div>
        <div className="invitation absolute flex h-[70vh] w-[70vh] items-end justify-end rounded-3xl border-2 will-change-transform top-[10%] left-1/2 bg-[#FAFAF8] border-[#d8d8d6] z-[3] shadow-[7px_3px_14px_1px_rgb(0_0_0_/_0.15),_0_2px_4px_-2px_rgb(0_0_0_/_0.15)] opacity-100 -translate-x-1/2 -translate-y-1/2 rotate-45">
          <div className="absolute bottom-0 left-0 right-0 top-0 text-[#80a594] title z-30 flex h-full w-full translate-x-1/4 translate-y-1/4 -rotate-45 flex-col items-center justify-start pt-16 opacity-100">
            <p className="title-font text-7xl">Neida</p>
            <p className="parisienne-text text-4xl">&amp;</p>
            <p className="title-font text-7xl">Víctor</p>
          </div>
          <div className="relative z-30 translate-x-1/4 translate-y-1/4 -rotate-45">
            <img alt="stamp" src={images.stamp} className="block w-28 object-cover opacity-100" />
          </div>
        </div>
      </div>
    </button>
  );
}
