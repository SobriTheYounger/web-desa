import Profile from "../components/profil/Profile";
import useFetch from "../customHook/useFetch";

const Home = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=profil";

  const { result, hidden } = useFetch(url);
  return (
    <>
      <Profile result={result} hidden={hidden} />
    </>
  );
};

export default Home;
