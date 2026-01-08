import { useEffect, useState } from "react";

const News = () => {
  const [result, setResult] = useState([]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      const url =
        "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=berita";

      const response = await fetch(url);
      const json = await response.json();
      const data = await json.data;
      setResult(data);
      setHidden(true);
    };
    getNews();
  }, []);

  return (
    <section className="mt-[40dvh] py-12 px-20">
      <h1 className="text-4xl text-(--green) font-bold mb-6">Berita Desa</h1>
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
        {result.map((item) => (
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
              <p className="description text-md text-(--black) mb-2">
                {item.isi_berita}...
              </p>
              <a
                href=""
                className="inline-block text-(--green) text-md font-md"
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
