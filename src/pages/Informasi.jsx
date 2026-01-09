import News from "../components/informasi/News";
import Wisata from "../components/informasi/Wisata";

const Informasi = () => {
  return (
    <section className="min-h-dvh bg-(--green) px-20">
      <div className="translate-y-30 p-30 bg-black/15 backdrop-blur-xl rounded-4xl animate-fade-up">
        <News />
        <Wisata />
      </div>
    </section>
  );
};

export default Informasi;
