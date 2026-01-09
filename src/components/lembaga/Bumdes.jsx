import useFetch from "../../customHook/useFetch";

const Bumdes = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=bumdes";
  const { result, hidden } = useFetch(url);

  return (
    <div className="bg-(--white) p-12 rounded-4xl mb-8">
      <h1 className="text-4xl text-(--green) mb-4 font-bold">Bumdes</h1>
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
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border-1 border-black">No</th>
              <th className="px-4 py-2 border-1 border-black">Jabatan</th>
              <th className="px-4 py-2 border-1 border-black">Nama</th>
            </tr>
          </thead>
          <tbody>
            {result && result.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border-1 border-black">{item.id}</td>
                <td className="px-4 py-2 border-1 border-black">
                  {item.jabatan}
                </td>
                <td className="px-4 py-2 border-1 border-black">{item.nama}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bumdes;
