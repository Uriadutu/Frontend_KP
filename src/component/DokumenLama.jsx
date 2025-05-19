import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddDokumenLamaModal from "./Modal/AddDokumenLamaModal";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";



const DokumenLama = () => {
  const { seksi } = useParams();
  const [dock, setDock] = useState([])
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const navigate = useNavigate()
  const getDokumenLama = async(namaseksi) =>{
    try {
        const response = await axios.get(`http://localhost:5000/dokumen-lama/${namaseksi}`)
        setDock(response.data)
    } catch (error) {
        console.log(error);   
    }
  }

  const hapusData = async(id) => {
    try {
        await axios.delete(`http://localhost:5000/dokumen-lama/${id}`)
        getDokumenLama(seksi)
    } catch (error) {
        console.log(error);
        
    }
  }
  useEffect(()=> {
    getDokumenLama(seksi)
  },[seksi])
  
  return (
    <div className="contain">
        {openModalAdd && (
            <AddDokumenLamaModal setIsOpenModalAdd={setOpenModalAdd} getDokumenLama={getDokumenLama} seksi={seksi}/>
        )}
      <h1 className="judul">Dokumen Lama</h1>
      <button onClick={() => setOpenModalAdd(true)} className="btn-add">
        Tambah Dokumen
      </button>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Nama Dokumen</th>
              <th className="py-3 px-6 text-left">Tanggal</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {dock.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">
                  {item && item.namaFile}
                </td>
                <td className="py-3 px-6 text-left">
                  {item && item.tanggal}
                </td>
                
                <td className="py-3 px-6 text-center flex justify-around whitespace-nowrap">
                  <button className="detail" title="Edit" 
                  onClick={()=> navigate(item?.urlFile)}
                  >
                    <IoEyeSharp color="white" />
                  </button>
                  <button
                    className="delete"
                    onClick={() => hapusData(item && item.id)}
                    title="Hapus"
                  >
                    <MdDelete color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DokumenLama;
