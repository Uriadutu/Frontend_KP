import React, { useState } from "react";
import axios from "axios";

const AddDokumenLamaModal = ({ setIsOpenModalAdd, getDokumenLama, seksi }) => {
  const [file, setFile] = useState(null); // Gunakan 'file' sesuai dengan backend
  const [tanggal, setTanggal] = useState("")

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Harap pilih file untuk diunggah");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Sesuaikan dengan field 'file' di backend
    formData.append("seksi", seksi);
    formData.append("tanggal", tanggal);

    try {
      await axios.post(`http://localhost:5000/dokumen-lama`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setIsOpenModalAdd(false);
      getDokumenLama(seksi);
    } catch (error) {
      console.error("Gagal mengunggah file:", error);
      alert("Terjadi kesalahan saat menyimpan data. Silakan coba lagi.");
    }
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 flex items-center justify-center bg-gray-500 z-top bg-opacity-30"
    >
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              Tambah Dokumen Lama
            </h3>
            <button
              onClick={() => setIsOpenModalAdd(false)}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div className="mb-6">
              <label htmlFor="file" className="label-input">
                Dokumen
              </label>
              <input
                onChange={handleFileChange}
                type="file"
                id="file"
                className="w-full input"
              />
            
            </div>
            <div className="mb-6">
              <label htmlFor="file" className="label-input">
                Tanggal
              </label>
              <input
                onChange={(e)=> setTanggal(e.target.value)}
                type="date"
                id="file"
                className="w-full input"
              />
            
            </div>
          </div>
          <div className="flex items-center justify-end p-4 space-x-3 border-t border-gray-200 rounded-b">
            <button type="submit" className="btn btn-simpan">
              Simpan
            </button>
            <button
              onClick={() => setIsOpenModalAdd(false)}
              type="button"
              className="btn-batal"
            >
              Batal
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDokumenLamaModal;
