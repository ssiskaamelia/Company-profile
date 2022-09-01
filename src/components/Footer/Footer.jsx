import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Footer.scss";
import { Logo2, MapIndo } from "../../assets/images";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="pt-5 pb-3">
        <div className="row">
          <div className="col-4 d-flex flex-column align-item-center">
            <a href="/" className="footerLink">
              <img src={Logo2} style={{width: "180px", margin: "auto"}} alt="LOGO YKBUT" className="image" />
            </a>
            <div className="d-flex flex-row justify-content-center mt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ykbutofficial/"
                className="nav-link p-0 text-muted mx-2"
              >
                <i className="fa fa-lg fa-instagram text-dark" style={{transform: [{ scale: 2 }]}} aria-hidden="true"/>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/"
                className="nav-link p-0 text-muted mx-2"
              >
                <i className="fa fa-lg fa-linkedin text-dark" style={{transform: [{ scale: 2 }]}} aria-hidden="true"/>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCOsZmiEPqgyOwOPDRJYUJzg"
                className="nav-link p-0 text-muted mx-2"
              >
                <i className="fa fa-lg fa-youtube text-dark" style={{transform: [{ scale: 2 }]}} aria-hidden="true"/>
              </a>
            </div>
          </div>
          <div className="col-4">
            <h3 className="text-center mb-5" style={{color: "yellow"}}>Yayasan Karya Bakti UT</h3>
            <p className="text-center m-0 text-dark" style={{fontSize: "120%"}}>Jl. Raya Bekasi Km 22</p>
            <p className="text-center m-0 text-dark" style={{fontSize: "120%"}}>Cakkung, Jakarta Timur</p>
            <p className="text-center m-0 text-dark" style={{fontSize: "120%"}}>Indonesia, 13910</p>
            {/* <p className="text-center m-0 text-dark">Phone +62 21 2457 9999</p> */}
          </div>
          <div className="col-4 d-flex align-item-center">
            <img src={MapIndo} style={{width: "400px", margin: "auto"}} alt="INDONESIA" className="image" />
          </div>
        </div>

        <div className="py-2 mt-4">
          <p className="text-center text-dark">
            Copyright &copy; 2022 Yayasan Karya Bhakti UT, All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;