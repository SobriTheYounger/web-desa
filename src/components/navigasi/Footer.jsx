import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="flex mt-[20dvh] py-12 px-20 gap-4 shadow-sm shadow-black">
      <div className="flex-1">
        <img className="w-[144px]" src={logo} alt="" loading="lazy" />
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
        <a href="" className="inline-block">
          Website kemendagri{" "}
        </a>
        <a href="" className="inline-block">
          {" "}
          website Kabupaten Kuningan{" "}
        </a>
        <a href="" className="inline-block">
          {" "}
          Website kominfo{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
