import React from "react";
import "./AboutPage.scss";
import AboutUsComponent from "./components/AboutUsComponent";
import VisiMisiComponent from "./components/VisiMisiComponent";
import TeamsComponent from "./components/TeamsComponent";
import { tree6, userOne } from "../../assets/images";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="about">
        <h1 className="title">About YKBUT</h1>
        <div className="row mt-4">
          <div className="col">
            <img className="rounded-4" src={tree6} alt="About Images" />
          </div>
          <div className="col-7 mx-4">
            <p className="fs-6 mb-2">
              Yayasan Karya Bakti United Tractors (YKBUT) didirikan oleh PT
              United Tractors Tbk (UT) pada 27 Februari 2008. Sejalan dengan
              visi dan misi Tanggung Jawab Sosial Perusahaan, membangun
              pendidikan Indonesia, YKBUT mendirikan UT School di tahun yang
              sama untuk mendidik calon Mekanik dan Operator Alat Berat.
            </p>
            <p className="fs-6">
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
            <h1 className="title">Visi</h1>
            <p className="mt-4">
              Yayasan Karya Bakti United Tractors (YKBUT) didirikan oleh PT
              United Tractors Tbk (UT) pada 27 Februari 2008. Sejalan dengan
              visi dan misi Tanggung Jawab Sosial Perusahaan, membangun
              pendidikan Indonesia, YKBUT mendirikan UT School di tahun yang
              sama untuk mendidik calon Mekanik dan Operator Alat Berat.
            </p>
          </div>
          <div className="col mx-5">
            <h1 className="title">Misi</h1>
            <p className="mt-4">
              Yayasan Karya Bakti United Tractors (YKBUT) didirikan oleh PT
              United Tractors Tbk (UT) pada 27 Februari 2008. Sejalan dengan
              visi dan misi Tanggung Jawab Sosial Perusahaan, membangun
              pendidikan Indonesia, YKBUT mendirikan UT School di tahun yang
              sama untuk mendidik calon Mekanik dan Operator Alat Berat.
            </p>
          </div>
        </div>
      </div>
      <div className="teams my-3">
        <h1 className="title">Our Teams</h1>
        <div className="row mt-4">
          <div className="col text-center">
            <img className="rounded-circle mx-auto" src={userOne} alt="user" />
            <p className="name mt-3">User Name</p>
          </div>
          <div className="col text-center">
            <img className="rounded-circle mx-auto" src={userOne} alt="user" />
            <p className="name mt-3">User Name</p>
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
    </div>
  );
};

export default AboutPage;
