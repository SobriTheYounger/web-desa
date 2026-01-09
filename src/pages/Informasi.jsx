import News from "../components/informasi/News";
import Wisata from "../components/informasi/Wisata";
import useFetch from "../customHook/useFetch";

const GetBerita = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=berita";
  const { result, hidden } = useFetch(url);
  return <News result={result} hidden={hidden} />;
};

const GetWisata = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=wisata_dan_budaya";
  const { result, hidden } = useFetch(url);
  return <Wisata result={result} hidden={hidden} />;
};

const Informasi = () => {
  return (
    <section className="min-h-dvh bg-(--green) px-20">
      <div className="translate-y-30 p-30 bg-black/15 backdrop-blur-xl rounded-4xl animate-fade-up">
        {GetBerita()}
        {GetWisata()}
      </div>
    </section>
  );
};

export default Informasi;
