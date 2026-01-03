const getProfile = async () => {
  const namaDesa = document.getElementById("namaDesa");
  const logoSkeleton = document.querySelector(".logo-skeleton");
  const skeletons = document.querySelectorAll(".skeletons");
  const welcomeTitle = document.getElementById("welcomeTitle");
  const welcomeText = document.getElementById("welcomeText");
  const fotoKades = document.getElementById('foto-kades')
  const visi = document.getElementById("visi");
  const misi = document.getElementById("misi");
  const dataDesa = document.getElementById('dataDesa')
  const petaDesa = document.getElementById('peta-desa')
  
  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec";
  const response = await fetch(url);
  const json = await response.json();
  if (!json.status) {
    console.log("error to fetch");
  }
  const datas = await json.data;
  datas.forEach((data) => {
    logoSkeleton.setAttribute("class", "hidden");

    skeletons.forEach((skeleton) => {
      skeleton.setAttribute("class", "hidden");
      console.log(skeleton);
    });

    namaDesa.textContent = data.nama_desa;
    welcomeTitle.textContent = data.welcome_title;
    welcomeText.textContent = data.welcome_text;
    fotoKades.setAttribute('src', data.foto_kades)
    fotoKades.classList.remove('hidden')
    visi.textContent = data.visi;
    misi.innerHTML = data.misi.replace(/(\d+\.)/g, "<br>$1");
    dataDesa.innerHTML += `
    <p class="text-md text-(--black)">Luas Wilayah: ${data.luas_wilayah}</p>
    <p class="text-md text-(--black)">Jumlah Penduduk: ${data.jumlah_penduduk}</p>
    <p class="text-md text-(--black)">Jumlah RT/RW: ${data.jumlah_rt_rw}</p>
    <p class="text-md text-(--black)">Kecamatan: ${data.kecamatan}</p>
    <p class="text-md text-(--black)">Kabupaten: ${data.kabupaten}</p>
    <p class="text-md text-(--black)">Kode Pos: ${data.kode_pos}</p>
    <p class="text-md text-(--black)">Potensi Utama: ${data.potensi}</p>
    `
    petaDesa.setAttribute('src', data.peta_desa)
    petaDesa.classList.remove('hidden')
});
};

const getNews = async () => {
  const articles = document.getElementById("articles");

  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=berita";
  const response = await fetch(url);
  const json = await response.json();
  if (!json.status) {
    console.log("err to fetch");
  }

  const datas = json.data;
  datas.forEach((data) => {
    const isiBerita = data.isi_berita.slice(0, 50);

    const article = `
    <div class="bg-(--white) shadow-sm shadow-black rounded-md max-w-[300px] flex-shrink-0">
        <div>
            <img class="w-full h-50 object-cover rounded-md" src=${data.foto_berita} alt="Contoh" />
        </div>
        <article class="p-6">
            <h2 class="title text-xl text-(--green) font-bold mb-2">${data.judul_berita}</h2>
            <p class="description text-md text-(--black) mb-2">${isiBerita}...
            </p>
            <a href="" class="inline-block text-(--green) text-md font-md">Baca Selengkapnya </a>
        </article>
    </div>
     
                   `;
    articles.innerHTML += article;
  });
};

const getWisata = async () => {
  const wisata = document.getElementById("wisata");

  const url =
    "https://script.google.com/macros/s/AKfycbxva_ISH32JfLLyCO2o3p1h1ILtzplx_V5INqWKLjw7vKagV6mEVN3-7x6SaMX-3WMICA/exec?sheet=wisata_dan_budaya";
  const response = await fetch(url);
  const json = await response.json();
  if (!json) {
    console.log("err to fetch");
  }
  const datas = json.data;
  datas.forEach((data) => {
    wisata.innerHTML += `
    <div
        class="mb-8 bg-[url(${data.foto})] min-h-[40dvh] bg-center bg-cover bg-no-repeat rounded-md text-center p-20"
    >
        <h1 class="text-4xl text-(--green) font-bold mb-2">
          ${data.wisata_dan_budaya}
        </h1>
        <p class="text-md text-(--white) max-w-[70%] mx-auto">
          ${data.deskripsi}
        </p>
        <a
          href="#"
          class="inline-block text-(--white) py-2 px-4 bg-(--green) text-md font-bold rounded-sm"
          >Kunjungi Sekarang</a
        >
    </div>
        `;
  });
};

getProfile();
getNews();
getWisata();
