import React, { useState } from "react";
import "./BusinessPage.scss";
import Card from "../../components/Card/Card"

const BusinessPage = () => {
  const [data, setData] = useState([
    {
      nama: "PT MITRA BAKTI UT",
      desc: "Perusahaan building management yang diakui keberadaannya di Indonesia, peduli akan lingkungan, serta dapat dipercaya.",
    },
    {
      nama: "PT GLOBAL SERVICE INDONESIA",
      desc: "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group",
    },
    {
      nama: "PT KAMAJU",
      desc: "Penyedia Jasa Mekanik dan Operator Alat-Alat Berat bagi perusahaan-perusahaan di Astra Group ",
    },
    {
      nama: "PT DIAN PANDU PRATAMA",
      desc: "ini adalah deskripsi",
    },
    {
      nama: "LSP ABI",
      desc: "Lembaga pendukung Badan Nasional Sertifikasi Profesi (BNSP) sebagai lembaga sertifikasi profesi dibidang alat berat kelas dunia.",
    },
    {
      nama: "LSP ABI",
      desc: "ini adalah deskripsi",
    },
  ]);

  return (
    <div className="container container-lg">
      <h2 className="title">UNIT BISNIS</h2>
      <div className="row justify-content-center container mt-5">
        {data.map((item, index) => (
          <Card key={index} name={item.nama} desc={item.desc} kolom={4} />
          // <div key={index} className="col col-4">
          //   <div
          //     className="card border bg-light mb-5"
          //     style={{ width: "320px" }}
          //   >
          //     <div className="col">
          //       <div className="d-flex justify-content-end row p-3">
          //         <i className="fa fa-instagram mb-2" aria-hidden="true"></i>
          //         <i
          //           className="fa fa-facebook-square mb-2"
          //           aria-hidden="true"
          //         ></i>
          //         <i
          //           className="fa fa-youtube"
          //           style={{ marginBottom: "30px" }}
          //           aria-hidden="true"
          //         ></i>
          //       </div>
          //       <div className="card p-3 bg-secondary">
          //         <div className="row d-flex justify-content-center">
          //           <div
          //             className="bg-white p-5 rounded-circle position-absolute text-center"
          //             style={{ height: "50px", width: "50px", top: "-80px" }}
          //           ></div>
          //           <p className="text-center mt-2 fw-bold text-white mb-2">
          //             {item.nama}
          //           </p>
          //           <p
          //             className="text-center text-white"
          //             style={{ height: "120px" }}
          //           >
          //             {item.desc}
          //           </p>
          //           <button
          //             type="button"
          //             className="btn w-50 shadow-sm fw-bolder text-white"
          //             style={{ backgroundColor: "#15c386" }}
          //           >
          //             Secondary
          //           </button>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPage;
