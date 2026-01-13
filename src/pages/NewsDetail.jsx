import useFetch from "../customHook/useFetch";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams()
    const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=berita";

  const { result, hidden } = useFetch(url);
  console.log(result);
      
  const news = result?.find(item => item.id === Number(id))
  console.log(news);
  



  return (
      <section className="min-h-dvh bg-(--green) lg:px-20 p-6">
      <div className="translate-y-30 md:p-12 lg:p-30 p-4 bg-black/15 backdrop-blur-xl rounded-xl animate-fade-up md:rounded-4xl">
        <div className="bg-(--white) p-6 rounded-xl mb-8 md:p-12">
          <div className={hidden ? "hidden" : "block"}>
            <div className="skeletons">
              <div className="sk-title"></div>
              <div className="sk-line"></div>
              <div className="sk-line"></div>
              <div className="sk-line"></div>
              <div className="sk-line"></div>
            </div>
          </div>
          {result && (
            <div
              key={news.id}
            >
              <div>
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={news.foto_berita}
                  alt="Contoh"
                />
              </div>
              <div className="p-6">
                <h2 className="title text-xl text-(--green) font-bold mb-2">
                  {news.judul_berita}
                </h2>
                <p className="description md:text-justify text-sm text-(--black) mb-2">
                  {news.isi_berita}...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
