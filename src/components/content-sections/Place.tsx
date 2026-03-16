export default function Place() {
  return (
    <div className="relative not-inverse">
      <h2
        className="text-[#80a594] title title-font text-7xl mb-4 font-normal"
        style={{ opacity: 1 }}
      >
        Ceremonia
      </h2>
      <h3
        className="text-[#212121] text quattrocento-text text-base font-bold tracking-wider mb-2 mt-4 px-4"
        style={{ opacity: 1 }}
      >
        <span>CATEDRAL DE PALMA</span>
      </h3>
      <img
        className="h-auto w-full rounded-3xl object-cover p-4"
        src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677603/place1_gmrlhr.jpg"
        alt="catedral de palma"
        style={{ opacity: 1, transform: "none" }}
      />
      <p className="text mt-2 px-4 tracking-wider" style={{ opacity: 1 }}>
        Plaça de la Seu, Centro
      </p>
      <p className="text px-4 tracking-wider" style={{ opacity: 1 }}>
        07001 Palma
      </p>
      <p className="mt-2 px-4 text-[#212121] text font-bold tracking-wider" style={{ opacity: 1 }}>
        18:00 h
      </p>
      <button
        className="mx-auto flex flex-col items-center justify-center gap-3"
        style={{ opacity: 1 }}
      >
        <img
          src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677598/map-locator_v0arr0.png"
          className="icon animate-lightbounce"
          alt="pin"
          width="80"
        />
        <p className="text relative -top-3">(Pulsa para ver en Maps)</p>
      </button>
    </div>
  );
}
