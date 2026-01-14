const Aparatur = ({ result, hidden }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  console.log(isAdmin);

  return (
    <div className="bg-(--white) lg:p-12 p-6 rounded-xl mb-8">
      <h1 className="text-xl text-(--green) mb-4 font-bold lg:text-4xl">
        Aparatur Desa
      </h1>
      <div className={hidden ? "hidden" : "block"}>
        <div className="skeletons">
          <div className="sk-title"></div>
          <div className="sk-line"></div>
          <div className="sk-line"></div>
          <div className="sk-line"></div>
          <div className="sk-line"></div>
        </div>
      </div>
      <div className={hidden ? "block" : "hidden"}>
        <table className="w-full text-xs md:text-sm lg:text-base">
          <thead>
            <tr>
              <th className="p-1 md:px-4 md:py-2 border-1 border-black">No</th>
              <th className="p-1 md:px-4 md:py-2 border-1 border-black">
                Jabatan
              </th>
              <th className="p-1 md:px-4 md:py-2 border-1 border-black">
                Nama
              </th>

              {isAdmin && (
                <th className="p-1 md:px-4 md:py-2 border-1 border-black">
                  Aksi
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {result &&
              result.map((item) => (
                <tr key={item.id}>
                  <td className="p-1 md:px-4 md:py-2 border-1 border-black">
                    {item.id}
                  </td>
                  <td className="p-1 md:px-4 md:py-2 border-1 border-black">
                    {item.jabatan}
                  </td>
                  <td className="p-1 md:px-4 md:py-2 border-1 border-black">
                    {item.nama}
                  </td>
                  {isAdmin && (
                    <td className="p-1 md:px-4 md:py-2 border-1 border-black mr-2">
                      <button className="p-1 md:px-2 md:py-1 border-1 border-black rounded">
                        Edit
                      </button>
                      <button className="p-1 md:px-2 md:py-1 border-1 border-black ml-2 rounded">
                        Tambah
                      </button>
                      <button className="p-1 md:px-2 md:py-1 border-1 border-black ml-2 rounded">
                        Hapus
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aparatur;
