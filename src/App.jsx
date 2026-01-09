import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Lembaga from "./pages/Lembaga";
import Sejarah from "./pages/Sejarah";
import Informasi from "./pages/Informasi";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/lembaga" element={<Lembaga/>}/>
        <Route path="/informasi" element={<Informasi/>} />
        <Route path="/sejarah" element={<Sejarah/>} />
      </Route>
    </Routes>
  );
}

export default App;
