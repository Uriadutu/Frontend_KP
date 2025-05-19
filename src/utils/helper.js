export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
  return formattedDate;
};

export function formatRupiah(rupiah) {
  return `Rp${rupiah.toLocaleString("id-ID")}`;
}

export const tanggalPDF = (tanggal) => {
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  
  const hari = tanggal.getDate();
  const bulanIndex = tanggal.getMonth();
  const tahun = tanggal.getFullYear();

  return `${hari} ${bulan[bulanIndex]} ${tahun}`;
};


export const formatTanggalLahir = (tanggal) => {
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  // Mengubah string tanggal menjadi objek Date
  const tanggalObj = new Date(
    tanggal.substring(0, 4), // Tahun
    tanggal.substring(4, 6) - 1, // Bulan (0-indexed)
    tanggal.substring(6, 8) // Hari
  );

  const hari = tanggalObj.getDate();
  const bulanIndex = tanggalObj.getMonth();
  const tahun = tanggalObj.getFullYear();

  return `${hari} ${bulan[bulanIndex]} ${tahun}`;
};

export const formatTanggalTMT = (tanggal) => {
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const tahun = tanggal.substring(0, 4);
  const bulanIndex = tanggal.substring(4, 6) - 1;

  return `${bulan[bulanIndex]} ${tahun}`;
};


export function capitalizeWords(text) {
  return text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
