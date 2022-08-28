import React, { useState } from "react";
import "./ServicesPage.scss";
import Card from "../../components/Card/Card";

const ServicesPage = () => {
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
      nama: "PT GLOBAL SERVICE INDONESIA",
      desc: "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group",
    },
    {
      nama: "PT GLOBAL SERVICE INDONESIA",
      desc: "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group",
    },
  ]);
  return (
    <div className="container container-sm">
      <h2 className="title">LAYANAN</h2>
      <div className="row justify-content-center container mt-5 w-75">
        {data.map((item, index) => (
          <Card key={index} name={item.nama} desc={item.desc} kolom={2} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
