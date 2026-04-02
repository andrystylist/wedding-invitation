import images from "@/assets/images";
import { useState } from "react";
import MapModal from "../MapModal";

const LOCATION = { lat: 10.37139, lng: -75.56648 };

export default function RecommendedOptionItem() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <div key="recommended-option" className="embla-carousel__slide py-3 text group w-full">
        <p className="text-center text-base font-bold tracking-wider text-[#212121] text">
          HOTEL PALMARITO BEACH
        </p>
        <div className="pb-2 text-base font-bold tracking-wider text-[#212121] text pb-3">
          Recomendado por los novios
        </div>
        <button
          className="mx-auto flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
          onClick={() => setMapOpen(true)}
        >
          <img
            className="mx-auto mt-2 animate-lightbounce icon "
            src={images.lodging}
            alt="url"
            width="80"
            height="80"
          />
          <span className="text font-light">(Pulsa para detalles)</span>
        </button>
      </div>
      <MapModal
        isOpen={mapOpen}
        onClose={() => setMapOpen(false)}
        title="Vuelta desde el Hotel Palmarito Beach"
        location={LOCATION}
        placeName="Hotel Palmarito Beach"
        description="Isla de Tierra Bomba, Playa Dorada, Cartagena de Indias, Colombia"
      >
        <div className="quattrocento-text mb-3 rounded-xl border border-[#e8e0d8] bg-[#faf8f5] px-4 py-3 text-[#212121]">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {/* WhatsApp */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e8e7e]">
                WhatsApp
              </span>
              <a
                href="https://wa.me/573013947401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-bold text-[#3d7a4f] hover:underline"
              >
                <svg className="h-4 w-4 shrink-0 fill-[#3d7a4f]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.997 2C6.477 2 2 6.477 2 12c0 1.79.474 3.47 1.303 4.926L2 22l5.233-1.268A9.956 9.956 0 0011.997 22C17.523 22 22 17.523 22 12S17.523 2 11.997 2zm0 18.18a8.163 8.163 0 01-4.153-1.133l-.298-.177-3.107.752.784-2.981-.194-.307A8.138 8.138 0 013.82 12c0-4.51 3.668-8.18 8.177-8.18 4.51 0 8.18 3.67 8.18 8.18 0 4.51-3.67 8.18-8.18 8.18z"/>
                </svg>
                +57 (301) 394 74 01
              </a>
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e8e7e]">
                Contacto
              </span>
              <span className="text-sm font-semibold">Elizabeth Cáceres</span>
            </div>
          </div>

          {/* Mensaje sugerido */}
          <div className="mt-3 flex flex-col gap-0.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e8e7e]">
              Mensaje sugerido
            </span>
            <blockquote className="mt-1 border-l-2 border-[#c9b99a] pl-3 text-sm italic text-[#5a4e42]">
              ¡Hola! Soy invitado de la Boda de Victor &amp; Neida. ¡Quiero asegurar mi cuarto
              antes que me duerma en la playa!
            </blockquote>
          </div>
        </div>
      </MapModal>
    </>
  );
}
