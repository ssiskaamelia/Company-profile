import React, { useState } from "react";
import "./ServicesPage.scss";
import Card from "../../components/Card/Card";

const ServicesPage = () => {
  const [data, setData] = useState([
    {
      nama: "UT SCHOOL",
      desc: "Lembaga Pendidikan Keterampilan Mekanik, Operator Alat-alat Berat serta Konstruksi Terbaik di Dunia",
      url: "https://www.utschool.sch.id/",
      linkIg: "https://www.instagram.com/utschoolinsani/",
      linkYt: "https://www.youtube.com/c/UTSchoolinsani",
    },
    {
      nama: "UT D'CARE",
      desc: "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group",
      url: "https://dcareut.com/",
      linkIg: "https://www.instagram.com/dcare_ut/?hl=id",
      linkYt: "https://www.youtube.com/channel/UCDl_MyAsxJb2DIFLK8n1hng",
    },
    {
      nama: "POLIKLINIK",
      desc: "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group",
      url: "https://www.google.com/",
      linkIg: "https://www.instagram.com/",
      linkYt: "https://www.youtube.com",
    },
    {
      nama: "YKBUT LEARNING CENTER",
      desc: "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group",
      url: "https://ylcku.com/",
      linkIg: "https://www.instagram.com/explore/tags/mitrabaktiut/",
      linkYt: "https://www.youtube.com/channel/UC23eQZlbI_BavTiKZcgEcRg",
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
