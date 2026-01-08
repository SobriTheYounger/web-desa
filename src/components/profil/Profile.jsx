import { useEffect, useState } from "react";
import foto from "../../assets/kades.jpg";
import foto_desa from "../../assets/peta-desa.png";

const Home = () => {
  const [result, setResult] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [fotoKades, setFotoKades] = useState(null);
  const [fotoDesa, setFotoDesa] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const url =
        "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec";
      try {
        const response = await fetch(url);
        const json = await response.json();
        const data = json.data;
        setResult(data);
        setHidden(true);
        setFotoKades(foto);
        setFotoDesa(foto_desa);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  return (
    <section className="min-h-dvh bg-(--green) px-20">
      <div className="translate-y-50 p-30 bg-black/15 backdrop-blur-xl rounded-4xl animate-fade-up">
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
        {result.map((item) => (
          <div key={item.id}>
            <div className="flex gap-10 mb-8">
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
                  id="welcomeTitle"
                  className="text-4xl text-white font-bold mb-2"
                >
                  {item.welcome_title}
                </h1>
                <p id="welcomeText" className="text-md text-white font-md">
                  {item.welcome_text}
                </p>
              </div>
              <div className="flex-1">
                <img
                  id="foto-kades"
                  src={fotoKades}
                  className="rounded-md aspect-square object-cover"
                  alt="ketua desa"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bg-(--white) p-12 rounded-4xl text-center mb-8">
              <h2 className="text-(--green) text-2xl font-bold mb-2">Visi</h2>
              <p className="text-(--black) text-md" id="visi">
                {item.visi}
              </p>
            </div>
            <div className="bg-(--white) p-12 rounded-4xl text-center mb-8">
              <h2 className="text-(--green) text-2xl font-bold mb-2">Misi</h2>
              <p className="text-(--black) text-md text-start">
                { item.misi.replace(/(\d+\.)/g, "")}
              </p>
            </div>
            <div className="flex bg-(--white) p-12 rounded-4xl">
              <div id="dataDesa" className="flex-1">
                <h2 className="text-2xl font-bold text-(--green) mb-2">
                  Data Umum Desa
                </h2>
                <p className="text-md text-(--black)">
                  Luas Wilayah: {item.luas_wilayah}
                </p>
                <p className="text-md text-(--black)">
                  Jumlah Penduduk: {item.jumlah_penduduk}
                </p>
                <p className="text-md text-(--black)">
                  Jumlah RT/RW: {item.jumlah_rt_rw}
                </p>
                <p className="text-md text-(--black)">
                  Kecamatan: {item.kecamatan}
                </p>
                <p className="text-md text-(--black)">
                  Kabupaten: {item.kabupaten}
                </p>
                <p className="text-md text-(--black)">
                  Kode Pos: {item.kode_pos}
                </p>
                <p className="text-md text-(--black)">
                  Potensi Utama: {item.potensi}
                </p>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-(--green) mb-2">
                  Peta Desa
                </h2>
                <img
                  id="peta-desa"
                  className=""
                  src={fotoDesa}
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
