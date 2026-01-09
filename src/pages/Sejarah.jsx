import useFetch from "../customHook/useFetch";

const Sejarah = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=sejarah_desa";
  const { result, hidden } = useFetch(url);
  return (
    <section className="min-h-dvh bg-(--green) px-20">
      <div className="translate-y-30 p-30 bg-black/15 backdrop-blur-xl rounded-4xl animate-fade-up">
        <div className="bg-(--white) p-12 rounded-4xl mb-8">
          <div className={hidden ? "hidden" : "block"}>
            <div className="skeletons">
              <div className="sk-title"></div>
              <div className="sk-line"></div>
              <div className="sk-line"></div>
              <div className="sk-line"></div>
              <div className="sk-line"></div>
            </div>
          </div>
          {result && result.map((item) => (
            <div key={item.id}>
              <h1 className="text-4xl text-(--green) mb-4 font-bold">
                {item.judul}
              </h1>
              <p className="p-4 text-(--black) text-md" style={{
                whiteSpace : "pre-line"
              }}>{item.sejarah}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
