import useFetch from "../../customHook/useFetch";

const Wisata = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=wisata_dan_budaya";
  const { result, hidden } = useFetch(url);

  return (
    <section id="wisata" className="p-4">
      <h1 className="text-4xl text-(--white) font-bold mb-6">
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
            className="mb-8 min-h-[40dvh] bg-center bg-cover bg-no-repeat rounded-md text-center p-20"
            style={{ backgroundImage: `url(${item?.foto})` }}
          >
            <h1 className="text-4xl text-(--green) font-bold mb-2">
              {item.wisata_dan_budaya}
            </h1>
            <p className="text-md text-(--white) max-w-[70%] mx-auto">
              {item.deskripsi}
            </p>
            <a
              href="#"
              className="inline-block text-(--white) py-2 px-4 bg-(--green) text-md font-bold rounded-sm"
            >
              Kunjungi Sekarang
            </a>
          </div>
        ))}
    </section>
  );
};

export default Wisata;
