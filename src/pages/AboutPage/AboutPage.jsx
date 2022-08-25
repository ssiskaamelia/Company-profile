import React from "react";
import "./AboutPage.scss";
// import AboutUsComponent from "./components/AboutUsComponent";
// import VisiMisiComponent from "./components/VisiMisiComponent";
// import TeamsComponent from "./components/TeamsComponent";
import Testimonials from "./components/ReviewComponent";
import { tree6, userOne } from "../../assets/images";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="about">
        <h1 className="title mb-5">TENTANG YKBUT</h1>
        <div className="row mt-4">
          <div className="col">
            <img className="rounded-4" src={tree6} alt="About Images" />
          </div>
          <div className="col-7 mx-4">
            <p className="fs-5 mb-2">
              Yayasan Karya Bakti United Tractors (YKBUT) didirikan oleh PT
              United Tractors Tbk (UT) pada 27 Februari 2008. Sejalan dengan
              visi dan misi Tanggung Jawab Sosial Perusahaan, membangun
              pendidikan Indonesia, YKBUT mendirikan UT School di tahun yang
              sama untuk mendidik calon Mekanik dan Operator Alat Berat.
            </p>
            <p className="fs-5">
              Pada 25 Juni 2018, YKBUT mendirikan Day Care UT Group. Day Care UT
              Group (UT D’CARE) adalah fasilitas penitipan dan pengasuhan anak
              bagi karyawan UT Group yang membutuhkan tempat terpercaya untuk
              mengoptimalkan tumbuh kembang anak dalam pendidikan, perawatan dan
              perlindungan dengan menggantikan sementara peran stimulasi orang
              tua selama bekerja.
            </p>
          </div>
        </div>
      </div>
      <div className="visimisi my-3 ">
        <div className="row">
          <div className="col mx-5">
            <h1 className="title">VISI</h1>
            <p className="fs-5 mt-4">
              Menjadi Yayasan yang Terbaik di Tingkat Nasional dalam Memberikan
              Nilai Tambah dan Layanan bagi seluruh Stakeholder-nya.
            </p>
          </div>
          <div className="col mx-5">
            <h1 className="title">MISI</h1>
            <p className="fs-5 mt-4">
              Menciptakan Sumber Daya Manusia yang Berkualitas, Berdaya Saing
              Tinggi, Profesional, dan Berkarakter Mandiri. Menciptakan Jaringan
              yang Luas dengan Industri Didalam dan Diluar Negeri. Mengelola
              Yayasan secara Bersih, Bertanggung Jawab dan Menomorsatukan
              Integritas. Menyediakan Layanan Kesehatan yang Berkualitas dan
              Terjangkau.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-5">
      <div className="teams my-3">
        <h1 className="title">PENGURUS</h1>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <img className="rounded-circle mx-auto" src={userOne} alt="user" />
            <p className="name mt-3">Endang Tri Handajani</p>
          </div>
          <div className="col text-center">
            <img className="rounded-circle mx-auto" src={userOne} alt="user" />
            <p className="name mt-3">Nursidik</p>
          </div>
          <div className="col text-center">
            <img className="rounded-circle mx-auto" src={userOne} alt="user" />
            <p className="name mt-3">User Name</p>
          </div>
          <div className="col text-center">
            <img className="rounded-circle mx-auto" src={userOne} alt="user" />
            <p className="name mt-3">User Name</p>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default AboutPage;
