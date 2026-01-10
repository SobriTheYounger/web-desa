import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="flex flex-col mt-[20dvh] py-12 px-4 gap-4 shadow-sm shadow-black text-center lg:flex-row lg:px-20 lg:text-start">
      <div className="flex-1 self-center">
        <img className="w-16 md:w-24" src={logo} alt="" loading="lazy" />
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold">pemerintahan Desa Manggari</h1>
        <p className="text-md font-md">
          Kecamatan Lebakwangi <br />
          Kabupaten Kuningan <br />
          Jawa Barat
        </p>
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold">Alamat Kantor</h1>
        <p className="text-md font-md">
          Desa Manggari. Jalan Raya Buahgama No. 85 Dusun manggari-Desa manggari
          kode pos : 45574
        </p>
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold">Hubungi Kami</h1>
        <p className="text-md font-md">
          No. telp : 082188888888 <br />
          Email : Pemdes.manggari@gmail.com
        </p>
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold">Situs Terkait</h1>
        <a href="" className="block">
          Website kemendagri
        </a>
        <a href="" className="block">
          website Kabupaten Kuningan
        </a>
        <a href="" className="block">
          Website kominfo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
