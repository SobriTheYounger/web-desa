import useFetch from "../customHook/useFetch";
import Aparatur from "../components/lembaga/Aparatur";
import Bpd from "../components/lembaga/Bpd";
import Bumdes from "../components/lembaga/Bumdes";

const GetAparatur = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=aparatur_desa";
  const { result, hidden } = useFetch(url);
  return <Aparatur result={result} hidden={hidden} />;
};

const GetBumdes = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=bumdes";
  const { result, hidden } = useFetch(url);
  return <Bumdes result={result} hidden={hidden} />;
};

const GetBpd = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=BPD";
  const { result, hidden } = useFetch(url);
  return <Bpd result={result} hidden={hidden} />;
};

const Lembaga = () => {
  return (
    <section className="min-h-dvh bg-(--green) px-20">
      <div className="translate-y-30 p-30 bg-black/15 backdrop-blur-xl rounded-4xl animate-fade-up">
        {GetAparatur()}
        {GetBumdes()}
        {GetBpd()}
      </div>
    </section>
  );
};

export default Lembaga;
