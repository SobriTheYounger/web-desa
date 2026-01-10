const News = ({ result, hidden }) => {
  return (
    <section className="md:p-4 mb-12">
      <h1 className="text-4xl text-center text-(--white) font-bold mb-6 md:text-start">Berita Desa</h1>
      <div className={hidden ? "hidden" : "block"}>
        <div className="skeletons">
          <div className="sk-title"></div>
          <div className="sk-line"></div>
          <div className="sk-line"></div>
          <div className="sk-line"></div>
          <div className="sk-line"></div>
        </div>
      </div>
      <div
        id="articles"
        className="flex gap-10 overflow-x-auto p-4 no-scrollbar"
      >
        {result &&
          result.map((item) => (
            <div
              key={item.id}
              className="bg-(--white) shadow-sm shadow-black rounded-md max-w-[300px] flex-shrink-0"
            >
              <div>
                <img
                  className="w-full h-50 object-cover rounded-md"
                  src={item.foto_berita}
                  alt="Contoh"
                />
              </div>
              <div className="p-6">
                <h2 className="title text-xl text-(--green) font-bold mb-2">
                  {item.judul_berita}
                </h2>
                <p className="description text-sm text-(--black) mb-2">
                  {item.isi_berita}...
                </p>
                <a
                  href=""
                  className="inline-block text-(--green) text-base font-md"
                >
                  Baca Selengkapnya...
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default News;
