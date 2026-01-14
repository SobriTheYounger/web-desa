import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const isAdmin = localStorage.getItem("isAdmin") === "true";

const News = ({ result, hidden }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (news.length === 0 && result?.length) {
      setNews(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const handleAdd = () => {
    const judul = prompt("Judul Berita:");
    const isi = prompt("Isi Berita:");
    const foto = prompt("URL Foto (opsional):");

    if (!judul || !isi) return;

    const newNews = {
      id: Date.now(),
      judul_berita: judul,
      isi_berita: isi,
      foto_berita: foto || "https://via.placeholder.com/1000",
    };

    setNews([newNews, ...news]);
  };

  const handleEdit = (item) => {
    const judul = prompt("Edit Judul:", item.judul_berita);
    const isi = prompt("Edit Isi:", item.isi_berita);

    if (!judul || !isi) return;

    const updated = news.map((berita) =>
      berita.id === item.id
        ? { ...berita, judul_berita: judul, isi_berita: isi }
        : berita
    );

    setNews(updated);
  };

  const handleDelete = (id) => {
    if (!confirm("Yakin ingin menghapus berita ini?")) return;

    const filtered = news.filter((item) => item.id !== id);
    setNews(filtered);
  };

  return (
    <section className="md:p-4 mb-12">
      <h1 className="text-4xl text-center text-(--white) font-bold mb-6 md:text-start">
        Berita Desa
      </h1>

      {isAdmin && (
        <button
          onClick={handleAdd}
          className="py-2 px-4 bg-(--white) text-(--green) rounded-sm mb-4"
        >
          Tambah
        </button>
      )}

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
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-(--white) shadow-sm shadow-black rounded-md max-w-[300px] flex-shrink-0"
          >
            <img
              className="w-full h-50 object-cover rounded-md"
              src={item.foto_berita}
              alt={item.judul_berita}
            />

            <div className="p-6">
              <h2 className="text-xl text-(--green) font-bold mb-2">
                {item.judul_berita}
              </h2>

              <p className="text-sm text-(--black) mb-2">
                {item.isi_berita.slice(0, 100)}...
              </p>

              <Link
                to={`/informasi/berita/${item.id}`}
                className="text-(--green)"
              >
                Baca Selengkapnya...
              </Link>

              {isAdmin && (
                <div className="flex gap-2 mt-3 text-white">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="py-1 px-4 bg-red-700 rounded-sm"
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => handleEdit(item)}
                    className="py-1 px-4 bg-blue-700 rounded-sm"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
