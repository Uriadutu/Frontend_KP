import React from "react";
import { useLocation } from "react-router-dom";

const toTitleCase = (str) => {
  return str
    .replace(/%20/g, " ") // Ganti %20 dengan spasi
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const isNumeric = (str) => {
  return /^\d+$/.test(str);
};

// Fungsi untuk mengganti nama path tertentu
const formatPath = (path) => {
  const customNames = {
    dashboard: "Dasbor",
    lapasi : "Kepegawaian",
    "pantai-disa" : "Pendidikan Islam",
    akesahu : "PHU",
    Saria : "Bimas Islam",
    paludi : "Bimas Kristen",
    sahu : "Zakat & Wakaf",
    sidika : "Kepengawasan"
  };
  return customNames[path] || toTitleCase(path.replace(/-/g, " "));
};

const Jejak = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && !isNumeric(x));

  return (
    <div className="p-1">
      {pathnames.length > 0 ? (
        <nav>
          {pathnames.map((value, index) => (
            <span key={index} className="text-gray-800 border-b-2">
              {index > 0 && " >> "}
              {formatPath(value)}
            </span>
          ))}
        </nav>
      ) : (
        <span className="text-gray-600">Home</span>
      )}
    </div>
  );
};

export default Jejak;