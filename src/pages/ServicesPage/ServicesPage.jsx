import React, { useState } from "react";
import "./ServicesPage.scss";
import Card from "./Card";

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
  ]);
  return (
    <div className="container container-sm">
      <h1 className="title">LAYANAN</h1>
      {data.map((item) => (
        <Card name={item.nama} desc={item.desc} />
      ))}
    </div>
  );
};

export default ServicesPage;
