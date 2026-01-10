
const Aparatur = ({result, hidden}) => {
  return (
    <div className="bg-(--white) lg:p-12 p-6 rounded-xl mb-8">
      <h1 className="text-xl text-(--green) mb-4 font-bold lg:text-4xl">Aparatur Desa</h1>
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
              <th className="p-1 md:px-4 md:py-2 border-1 border-black">Jabatan</th>
              <th className="p-1 md:px-4 md:py-2 border-1 border-black">Nama</th>
            </tr>
          </thead>
          <tbody>
          {result && result.map((item) => (
              <tr key={item.id}>
                <td className="p-1 md:px-4 md:py-2 border-1 border-black">{item.id}</td>
                <td className="p-1 md:px-4 md:py-2 border-1 border-black">
                  {item.jabatan}
                </td>
                <td className="p-1 md:px-4 md:py-2 border-1 border-black">
                  {item.nama}
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aparatur;
