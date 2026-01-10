import useFetch from "../customHook/useFetch";

const Sejarah = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=sejarah_desa";
  const { result, hidden } = useFetch(url);
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
          {result && result.map((item) => (
            <div key={item.id}>
              <h1 className="text-xl text-(--green) mb-4 font-bold md:text-4xl">
                {item.judul}
              </h1>
              <p className="md:p-4 p-1 text-(--black) text-xs md:text-base" style={{
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
