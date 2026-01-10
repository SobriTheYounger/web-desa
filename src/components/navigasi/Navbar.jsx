import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }


  return (
    <header className="z-100 bg-(--green) px-4 py-4 lg:px-20 fixed top-0 left-0 right-0 flex justify-between items-center shadow-sm shadow-(--black)">
      <div className="flex items-center">
        <img src={logo} className="w-10" alt="logo_desa" loading="lazy" />
        <p className="text-xl text-white font-bold" id="namaDesa">
          Desa Manggari
        </p>
      </div>

      {/* DESKTOP */}
      <nav
        className="max-md:hidden flex gap-8 text-(--black) text-white text-md font-md"
      >
        <Link to="/">
          Profil
        </Link>
        <Link
          to="/lembaga"
         
        >
          Lembaga
        </Link>
        <Link
          to="/informasi"
          
        >
          Informasi
        </Link>
        <Link to="/sejarah" >
          Sejarah
        </Link>
      </nav>

      {/* MOBILE */}
      <nav
        className={` ${open ? "block" : "hidden" } md:hidden absolute top-0 h-dvh w-full right-0  p-8 bg-white md:gap-10 text-(--black) md:text-white text-md font-md`}
      >
        <Link to="/" onClick={() => setOpen(false)} className="block mb-2">
          Profil
        </Link>
        <Link
          to="/lembaga"
          onClick={() => setOpen(false)}
          className="block mb-2"
        >
          Lembaga
        </Link>
        <Link
          to="/informasi"
          onClick={() => setOpen(false)}
          className="block mb-2"
        >
          Informasi
        </Link>
        <Link to="/sejarah" onClick={() => setOpen(false)} className="block">
          Sejarah
        </Link>
      </nav>
      <div className="md:hidden">
        <button
          onClick={handleOpen}
        >
          <i className="text-(--white) fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
