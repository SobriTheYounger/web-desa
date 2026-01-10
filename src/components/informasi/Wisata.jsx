const Wisata = ({result, hidden}) => {
  return (
    <section id="wisata" className="md:p-4">
      <h1 className="text-4xl text-center text-(--white) font-bold mb-6 md:text-start">
        Budaya Dan Wisata Desa
      </h1>
      <div className={hidden ? "hidden" : "block"}>
        <div className="skeletons">
          <div className="skeletons">
            <div className="sk-title"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
          </div>
        </div>
      </div>

      {result &&
        result.map((item) => (
          <div
            key={item.id}
            className="mb-8 min-h-[40dvh] bg-center bg-cover bg-no-repeat rounded-md text-center p-6"
            style={{ backgroundImage: `url(${item?.foto})` }}
          >
            <h1 className="text-xl text-(--green) font-bold mb-2 md:text-4xl">
              {item.wisata_dan_budaya}
            </h1>
            <p className="text-sm text-(--black) md:max-w-[70%] mx-auto mb-4 md:text-base">
              {item.deskripsi}
            </p>
            <a
              href="#"
              className="inline-block text-(--white) py-2 px-4 bg-(--green) text-base font-bold rounded-sm"
            >
              Kunjungi Sekarang
            </a>
          </div>
        ))}
    </section>
  );
};

export default Wisata;
