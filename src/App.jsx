import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Lembaga from "./pages/Lembaga";
import Sejarah from "./pages/Sejarah";
import Informasi from "./pages/Informasi";
import NewsDetail from "./pages/NewsDetail"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/lembaga" element={<Lembaga/>}/>
        <Route path="/informasi" element={<Informasi/>} />
        <Route path="/sejarah" element={<Sejarah/>} />
        <Route path="/informasi/berita/:id" element={ <NewsDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
