import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=Admin";

    const res = await fetch(url);
    const json = await res.json();

    const admin = json.data.find(
      (item) => item.username == username && item.password == password
    );

    if (admin) {
      // SIMPAN STATUS LOGIN
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("username", admin.username);

      alert("Login berhasil");

      // REDIRECT KE HALAMAN UTAMA
      navigate("/");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <section className="min-h-dvh bg-(--green) flex justify-center items-center p-4">
      <div className="max-w-80 bg-white py-12 px-10 rounded-md text-center">
        <form onSubmit={handleLogin}>
          <img src={logo} className="w-24 mx-auto" />
          <hr className="my-4" />
          <p className="font-semibold">Login Admin</p>
          <p>Desa Manggari</p>

          <input
            className="w-full p-2 my-2 border rounded-sm"
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            className="w-full p-2 my-2 border rounded-sm"
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex justify-between mt-8">
            <Link className="border px-6 py-2 rounded-sm" to="/">
              Kembali
            </Link>
            <button className="bg-(--green) px-6 py-2 text-white rounded-sm">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
