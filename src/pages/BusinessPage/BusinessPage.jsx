import React, { useState } from "react";
import "./BusinessPage.scss";
import Card from "../../components/Card/Card";
import {GSI, MBUT} from "../../assets/images"

const BusinessPage = () => {
  const [data, setData] = useState([
    {
      nama: "PT MITRA BAKTI UT",
      desc: "Perusahaan building management yang diakui keberadaannya di Indonesia, peduli akan lingkungan, serta dapat dipercaya.",
      url: "https://www.mitrabaktiut.co.id/",
      linkIg: "https://www.instagram.com/explore/tags/mitrabaktiut/",
      linkYt: "https://www.youtube.com",
      logo: MBUT
    },
    {
      nama: "PT GLOBAL SERVICE INDONESIA",
      desc: "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group",
      url: "https://globalservice.co.id/",
      linkIg: "https://www.instagram.com/explore/tags/globalserviceindonesia/",
      linkYt: "https://www.youtube.com",
      logo: GSI
    },
    {
      nama: "PT KAMAJU",
      desc: "Penyedia Jasa Mekanik dan Operator Alat-Alat Berat bagi perusahaan-perusahaan di Astra Group ",
      url: "https://www.kamaju.co.id/",
      linkIg: "https://www.instagram.com/kamajuofficial/",
      linkYt: "https://www.youtube.com",
    },
    {
      nama: "PT DIAN PANDU PRATAMA",
      desc: "ini adalah deskripsi",
      url: "https://www.dpp.co.id/",
      linkIg: "https://www.instagram.com",
      linkYt: "https://www.youtube.com",
    },
    {
      nama: "LSP ABI",
      desc: "Lembaga pendukung Badan Nasional Sertifikasi Profesi (BNSP) sebagai lembaga sertifikasi profesi dibidang alat berat kelas dunia.",
      url: "https://www.lsp-abi.org/",
      linkIg: "https://www.instagram.com/lspabi/",
      linkYt: "https://www.youtube.com",
    },
<<<<<<< Updated upstream
    {
      nama: "LSP ABI",
      desc: "ini adalah deskripsi",
      url: "https://www.google.com",
      linkIg: "https://www.instagram.com",
      linkYt: "https://www.youtube.com",
    },
=======
    // {
    //   nama: "LSP ABI",
    //   desc: "ini adalah deskripsi",
    //   url: "https://www.google.com",
    //   linkIg: "https://www.instagram.com",
    //   linkYt: "https://www.youtube.com"
    // },
>>>>>>> Stashed changes
  ]);

  return (
    <div className="container container-lg">
      <h2 className="title">UNIT BISNIS</h2>
      <div className="row justify-content-center container mt-5">
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.nama}
            desc={item.desc}
            url={item.url}
            linkIg={item.linkIg}
            linkYt={item.linkYt}
            logo={item.logo}
            kolom={4}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessPage;
