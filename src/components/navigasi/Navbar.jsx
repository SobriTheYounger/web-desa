import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="z-100 bg-(--green) py-4 px-20 fixed top-0 left-0 right-0 flex justify-between items-center shadow-sm shadow-(--black)">
      <div className="flex items-center">
        <img
          src={logo}
          className="w-10"
          alt="logo_desa"
          loading="lazy"
        />
        <p className="text-2xl text-white font-bold" id="namaDesa">Desa Manggari</p>
      </div>
      <nav className="flex gap-10 text-white text-md font-md">
        <Link to="/">Profil</Link>
        <Link to="/lembaga">Lembaga</Link>
        <Link to="/informasi">Informasi</Link>
        <Link to="/sejarah">Sejarah</Link>
      </nav>
    </header>
  );
};

export default Navbar;
