// =============================================
// STATIC DATA - Pengganti API Backend
// =============================================
// Semua data dummy untuk portfolio front-end
// Gambar menggunakan picsum.photos sebagai placeholder

// ========== DATA JURUSAN ==========
export const jurusanData = [
  {
    jurusan_id: 1,
    jurusan_nama: "AK",
    jurusan_deskripsi:
      "Program keahlian Akuntansi dan Keuangan Lembaga mempersiapkan peserta didik untuk menjadi tenaga kerja yang kompeten di bidang akuntansi. Siswa dibekali pengetahuan dan keterampilan dalam pencatatan transaksi keuangan, penyusunan laporan keuangan, perpajakan, dan penggunaan aplikasi akuntansi komputer.",
    jurusan_logo: "https://picsum.photos/seed/logo-ak/200/200",
  },
  {
    jurusan_id: 2,
    jurusan_nama: "RPL",
    jurusan_deskripsi:
      "Program keahlian Rekayasa Perangkat Lunak mempersiapkan peserta didik untuk menjadi tenaga kerja yang kompeten di bidang pengembangan perangkat lunak. Siswa dibekali kemampuan pemrograman web, mobile, dan desktop serta database management.",
    jurusan_logo: "https://picsum.photos/seed/logo-rpl/200/200",
  },
  {
    jurusan_id: 3,
    jurusan_nama: "TKJ",
    jurusan_deskripsi:
      "Program keahlian Teknik Komputer dan Jaringan mempersiapkan peserta didik untuk menjadi tenaga kerja yang kompeten di bidang instalasi jaringan komputer. Siswa dibekali keterampilan konfigurasi router, switch, server, dan troubleshooting jaringan.",
    jurusan_logo: "https://picsum.photos/seed/logo-tkj/200/200",
  },
  {
    jurusan_id: 4,
    jurusan_nama: "TEI",
    jurusan_deskripsi:
      "Program keahlian Teknik Elektronika Industri mempersiapkan peserta didik untuk menjadi tenaga kerja yang kompeten di bidang elektronika industri. Siswa dibekali keterampilan merancang, merakit, dan memperbaiki rangkaian elektronika.",
    jurusan_logo: "https://picsum.photos/seed/logo-tei/200/200",
  },
  {
    jurusan_id: 5,
    jurusan_nama: "TBSM",
    jurusan_deskripsi:
      "Program keahlian Teknik dan Bisnis Sepeda Motor mempersiapkan peserta didik untuk menjadi tenaga kerja yang kompeten di bidang perawatan dan perbaikan sepeda motor. Siswa dibekali keterampilan mekanik dan manajemen bengkel.",
    jurusan_logo: "https://picsum.photos/seed/logo-tbsm/200/200",
  },
  {
    jurusan_id: 6,
    jurusan_nama: "TET",
    jurusan_deskripsi:
      "Program keahlian Teknik Energi Terbarukan mempersiapkan peserta didik untuk menjadi tenaga kerja yang kompeten di bidang energi terbarukan seperti panel surya, turbin angin, dan sumber energi alternatif lainnya.",
    jurusan_logo: "https://picsum.photos/seed/logo-tet/200/200",
  },
];

// ========== DATA GURU ==========
export const guruData = [
  { guru_id: 1, guru_nama: "Andi Susandi, S.Kom.", guru_jabatan: "Kepala Program RPL", guru_gambar: "https://picsum.photos/seed/guru1/300/400" },
  { guru_id: 2, guru_nama: "Budi Santoso, S.Pd.", guru_jabatan: "Guru Matematika", guru_gambar: "https://picsum.photos/seed/guru2/300/400" },
  { guru_id: 3, guru_nama: "Citra Dewi, M.Pd.", guru_jabatan: "Guru Bahasa Inggris", guru_gambar: "https://picsum.photos/seed/guru3/300/400" },
  { guru_id: 4, guru_nama: "Dani Kurnawan, S.Kom.", guru_jabatan: "Kepala Program TKJ", guru_gambar: "https://picsum.photos/seed/guru4/300/400" },
  { guru_id: 5, guru_nama: "Dewi Marlina, S.Pd.", guru_jabatan: "Kepala Program TEI", guru_gambar: "https://picsum.photos/seed/guru5/300/400" },
  { guru_id: 6, guru_nama: "Eko Prasetyo, S.T.", guru_jabatan: "Guru Produktif TKJ", guru_gambar: "https://picsum.photos/seed/guru6/300/400" },
  { guru_id: 7, guru_nama: "Fitri Handayani, S.Pd.", guru_jabatan: "Guru Bahasa Indonesia", guru_gambar: "https://picsum.photos/seed/guru7/300/400" },
  { guru_id: 8, guru_nama: "Imam Nursyahied, S.Pd.", guru_jabatan: "Kepala Program TET", guru_gambar: "https://picsum.photos/seed/guru8/300/400" },
  { guru_id: 9, guru_nama: "Joko Widodo, S.Pd.", guru_jabatan: "Guru PKN", guru_gambar: "https://picsum.photos/seed/guru9/300/400" },
  { guru_id: 10, guru_nama: "Kartini Sari, M.Pd.", guru_jabatan: "Guru Agama Islam", guru_gambar: "https://picsum.photos/seed/guru10/300/400" },
  { guru_id: 11, guru_nama: "Rohadi Yusuf, S.Pd.", guru_jabatan: "Kepala Program TBSM", guru_gambar: "https://picsum.photos/seed/guru11/300/400" },
  { guru_id: 12, guru_nama: "Sri Supriatiningsih, S.Pd.", guru_jabatan: "Kepala Program AK", guru_gambar: "https://picsum.photos/seed/guru12/300/400" },
];

// ========== DATA KELAS ==========
export const kelasData = [
  // AK (jurusan_id: 1)
  { kelas_id: 1, jurusan_id: 1, kelas_nama: "XII AK 1", kelas_gambar: "https://picsum.photos/seed/kelas-ak1/600/300" },
  { kelas_id: 2, jurusan_id: 1, kelas_nama: "XII AK 2", kelas_gambar: "https://picsum.photos/seed/kelas-ak2/600/300" },
  { kelas_id: 3, jurusan_id: 1, kelas_nama: "XII AK 3", kelas_gambar: "https://picsum.photos/seed/kelas-ak3/600/300" },
  // RPL (jurusan_id: 2)
  { kelas_id: 4, jurusan_id: 2, kelas_nama: "XII RPL 1", kelas_gambar: "https://picsum.photos/seed/kelas-rpl1/600/300" },
  { kelas_id: 5, jurusan_id: 2, kelas_nama: "XII RPL 2", kelas_gambar: "https://picsum.photos/seed/kelas-rpl2/600/300" },
  { kelas_id: 6, jurusan_id: 2, kelas_nama: "XII RPL 3", kelas_gambar: "https://picsum.photos/seed/kelas-rpl3/600/300" },
  // TKJ (jurusan_id: 3)
  { kelas_id: 7, jurusan_id: 3, kelas_nama: "XII TKJ 1", kelas_gambar: "https://picsum.photos/seed/kelas-tkj1/600/300" },
  { kelas_id: 8, jurusan_id: 3, kelas_nama: "XII TKJ 2", kelas_gambar: "https://picsum.photos/seed/kelas-tkj2/600/300" },
  { kelas_id: 9, jurusan_id: 3, kelas_nama: "XII TKJ 3", kelas_gambar: "https://picsum.photos/seed/kelas-tkj3/600/300" },
  // TEI (jurusan_id: 4)
  { kelas_id: 10, jurusan_id: 4, kelas_nama: "XII TEI 1", kelas_gambar: "https://picsum.photos/seed/kelas-tei1/600/300" },
  { kelas_id: 11, jurusan_id: 4, kelas_nama: "XII TEI 2", kelas_gambar: "https://picsum.photos/seed/kelas-tei2/600/300" },
  { kelas_id: 12, jurusan_id: 4, kelas_nama: "XII TEI 3", kelas_gambar: "https://picsum.photos/seed/kelas-tei3/600/300" },
  // TBSM (jurusan_id: 5)
  { kelas_id: 13, jurusan_id: 5, kelas_nama: "XII TBSM 1", kelas_gambar: "https://picsum.photos/seed/kelas-tbsm1/600/300" },
  { kelas_id: 14, jurusan_id: 5, kelas_nama: "XII TBSM 2", kelas_gambar: "https://picsum.photos/seed/kelas-tbsm2/600/300" },
  { kelas_id: 15, jurusan_id: 5, kelas_nama: "XII TBSM 3", kelas_gambar: "https://picsum.photos/seed/kelas-tbsm3/600/300" },
  // TET (jurusan_id: 6)
  { kelas_id: 16, jurusan_id: 6, kelas_nama: "XII TET 1", kelas_gambar: "https://picsum.photos/seed/kelas-tet1/600/300" },
  { kelas_id: 17, jurusan_id: 6, kelas_nama: "XII TET 2", kelas_gambar: "https://picsum.photos/seed/kelas-tet2/600/300" },
  { kelas_id: 18, jurusan_id: 6, kelas_nama: "XII TET 3", kelas_gambar: "https://picsum.photos/seed/kelas-tet3/600/300" },
];

// ========== DATA SISWA ==========
const generateSiswa = () => {
  const namaDepan = ["Ahmad", "Bima", "Cahya", "Dimas", "Elsa", "Fajar", "Gita", "Hana"];
  const namaBelakang = ["Pratama", "Saputra", "Wibowo", "Nugraha", "Putri", "Ramadhani", "Salsabila", "Permata"];
  const quotes = [
    "Belajar tanpa henti, berkarya tanpa batas.",
    "Sukses adalah hasil kerja keras dan doa.",
    "Jadilah versi terbaik dari dirimu sendiri.",
    "Masa depan milik mereka yang mempersiapkannya.",
    "Ilmu adalah harta yang tak ternilai.",
    "Keberhasilan dimulai dari keberanian mencoba.",
    "Terus melangkah meski jalan penuh tantangan.",
    "Mimpi besar dimulai dari langkah kecil.",
  ];

  const siswa = [];
  let siswaId = 1;

  for (let kelasId = 1; kelasId <= 18; kelasId++) {
    for (let i = 0; i < 8; i++) {
      siswa.push({
        siswa_id: siswaId,
        kelas_id: kelasId,
        siswa_nama: `${namaDepan[i]} ${namaBelakang[(i + kelasId) % namaBelakang.length]}`,
        siswa_quote: quotes[i],
        siswa_gambar: `https://picsum.photos/seed/siswa${siswaId}/300/400`,
      });
      siswaId++;
    }
  }
  return siswa;
};

export const siswaData = generateSiswa();

// ========== DATA WISUDA ==========
export const wisudaData = [
  { wisuda_id: 1, wisuda_gambar: "https://picsum.photos/seed/wisuda1/600/400", wisuda_nama: "Prosesi Wisuda 1" },
  { wisuda_id: 2, wisuda_gambar: "https://picsum.photos/seed/wisuda2/600/400", wisuda_nama: "Prosesi Wisuda 2" },
  { wisuda_id: 3, wisuda_gambar: "https://picsum.photos/seed/wisuda3/600/400", wisuda_nama: "Prosesi Wisuda 3" },
  { wisuda_id: 4, wisuda_gambar: "https://picsum.photos/seed/wisuda4/600/400", wisuda_nama: "Prosesi Wisuda 4" },
  { wisuda_id: 5, wisuda_gambar: "https://picsum.photos/seed/wisuda5/600/400", wisuda_nama: "Prosesi Wisuda 5" },
  { wisuda_id: 6, wisuda_gambar: "https://picsum.photos/seed/wisuda6/600/400", wisuda_nama: "Prosesi Wisuda 6" },
  { wisuda_id: 7, wisuda_gambar: "https://picsum.photos/seed/wisuda7/600/400", wisuda_nama: "Prosesi Wisuda 7" },
  { wisuda_id: 8, wisuda_gambar: "https://picsum.photos/seed/wisuda8/600/400", wisuda_nama: "Prosesi Wisuda 8" },
];

// ========== DATA GAMBAR KELAS (untuk carousel) ==========
const generateGambarKelas = () => {
  const gambar = [];
  let gambarId = 1;

  for (let kelasId = 1; kelasId <= 18; kelasId++) {
    // 3 gambar wajib per kelas (untuk carousel)
    for (let i = 1; i <= 3; i++) {
      gambar.push({
        gambar_id: gambarId,
        kelas_id: kelasId,
        gambar_nama: `https://picsum.photos/seed/gk${gambarId}/1200/500`,
        gambar_jenis: "wajib",
      });
      gambarId++;
    }
    // 2 gambar tambahan per kelas
    for (let i = 1; i <= 2; i++) {
      gambar.push({
        gambar_id: gambarId,
        kelas_id: kelasId,
        gambar_nama: `https://picsum.photos/seed/gk${gambarId}/1200/500`,
        gambar_jenis: "tambahan",
      });
      gambarId++;
    }
  }
  return gambar;
};

export const gambarKelasData = generateGambarKelas();

// ========== HELPER FUNCTIONS ==========
// Meniru response dari API

export const getGuruAll = () => guruData;

export const getGuruById = (guruId) =>
  guruData.filter((g) => g.guru_id === Number(guruId));

export const getJurusanAll = () => jurusanData;

export const getJurusanById = (jurusanId) =>
  jurusanData.filter((j) => j.jurusan_id === Number(jurusanId));

export const getKelasByJurusan = (jurusanId) =>
  kelasData.filter((k) => k.jurusan_id === Number(jurusanId));

export const getKelasById = (kelasId) =>
  kelasData.find((k) => k.kelas_id === Number(kelasId));

export const getSiswaByKelas = (kelasId) =>
  siswaData.filter((s) => s.kelas_id === Number(kelasId));

export const getGambarByKelas = (kelasId) =>
  gambarKelasData.filter((g) => g.kelas_id === Number(kelasId));

export const getWisudaAll = () => wisudaData;

// Counts untuk dashboard admin
export const getCounts = () => ({
  siswa: siswaData.length,
  guru: guruData.length,
  jurusan: jurusanData.length,
  foto: gambarKelasData.length,
});
