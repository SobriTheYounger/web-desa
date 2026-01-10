const Home = ({result, hidden}) => {

  return (
    <section className="min-h-dvh bg-(--green) lg:px-20 p-4">
      <div className="translate-y-30 md:p-12 lg:p-30 p-4 bg-black/15 backdrop-blur-xl rounded-xl animate-fade-up md:rounded-4xl">
        <div className={hidden ? "hidden" : "block"}>
          <div className="skeletons">
            <div className="sk-title"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
          </div>
        </div>
        <div className={hidden ? "hidden" : "block"}>
          <div className="skeletons">
            <div className="sk-title"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
            <div className="sk-line"></div>
          </div>
        </div>
        {result &&
          result.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col-reverse lg:flex-row p-4 gap-10 mb-8">
                <div className="flex-2">
                  <div className={hidden ? "hidden" : "block"}>
                    <div className="sk-title"></div>
                    <div className="sk-line"></div>
                    <div className="sk-line"></div>
                    <div className="sk-line"></div>
                    <div className="sk-line"></div>
                    <div className="sk-line"></div>
                    <div className="sk-line"></div>
                    <div className="sk-line"></div>
                  </div>
                  <h1
                    className="text-xl text-white font-bold mb-2 md:text-4xl"
                  >
                    {item.welcome_title}
                  </h1>
                  <p className="text-xs text-white font-md md:text-base">
                    {item.welcome_text}
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src={null}
                    className="rounded-md aspect-square object-cover"
                    alt="ketua desa"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-(--white) p-6 rounded-xl text-center mb-8 md:p-12 md:rounded-4xl">
                <h2 className="text-(--green) text-xl font-bold mb-2">Visi</h2>
                <p className="text-(--black) text-xs md:text-base">
                  {item.visi}
                </p>
              </div>
              <div className="bg-(--white) p-6 rounded-xl text-center mb-8 md:p-12 md:rounded-4xl">
                <h2 className="text-(--green) text-xl font-bold mb-2">Misi</h2>
                <p className="text-(--black) text-xs text-start md:text-base" style={{
                  whiteSpace : "pre-line"
                }}>
                  {item.misi}
                </p>
              </div>
              <div className="flex flex-col bg-(--white) p-6 rounded-xl lg:flex-row md:p-12 md:rounded-4xl">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-(--green) mb-2">
                    Data Umum Desa
                  </h2>
                  <p className="text-xs text-(--black) md:text-base">
                    Luas Wilayah: {item.luas_wilayah}
                  </p>
                  <p className="text-xs text-(--black) md:text-base">
                    Jumlah Penduduk: {item.jumlah_penduduk}
                  </p>
                  <p className="text-xs text-(--black) md:text-base">
                    Jumlah RT/RW: {item.jumlah_rt_rw}
                  </p>
                  <p className="text-xs text-(--black) md:text-base">
                    Kecamatan: {item.kecamatan}
                  </p>
                  <p className="text-xs text-(--black) md:text-base">
                    Kabupaten: {item.kabupaten}
                  </p>
                  <p className="text-xs text-(--black) md:text-base">
                    Kode Pos: {item.kode_pos}
                  </p>
                  <p className="text-xs text-(--black) md:text-base">
                    Potensi Utama: {item.potensi}
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-(--green) mb-2">
                    Peta Desa
                  </h2>
                  <img
                    id="peta-desa"
                    className=""
                    src={null}
                    alt="map_desa"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Home;
