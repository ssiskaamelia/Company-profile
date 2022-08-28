// import { Link, animateScroll as scroll } from 'react-scroll'

// function Footer() {
//   return (
//     <footer>
//       <div className="container">
//         <div className="row">
//           <div className="side1">
//             <div className="row">
//               <div className="col-md-3">
//                 <h1 className="logo">LOGO YKBUT</h1>
//                 <p className="footer-text">
//                   Lorem ipsum Here are thriteen health benefits of apples Lorem
//                 </p>
//               </div>
//               <div className="col-md-3">
//                 <p className="footer-title">Important Link</p>
//                 <ul>
//                   <li>
//                     <Link
//                       spy={true}
//                       smooth={true}
//                       duration={1000}
//                       to="headerbg"
//                     > Home </Link>
//                   </li>
//                   <li>
//                     <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
//                   </li>
//                   <li>
//                     <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
//                   </li>
//                   <li>
//                     <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="side2">
//             <div className="row">
//               <div className="col-md-3">
//                 <p className="footer-title">Contact</p>
//                 <ul>
//                   <li>
//                     <Link to="#" >ykbut@gmail.com</Link>
//                   </li>
//                   <li>
//                     <Link to="#" > Yayasan Karya Bakti UT</Link>
//                   </li>
//                   <li>
//                     <Link to="#" >0212 444 44 44</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-md-3">
//                 <p className="footer-title">Social Media</p>
//                 <ul>
//                   <li>
//                     <a target="_blank" rel="noreferrer" href="https://instagram.com/" > Instagram</a>
//                   </li>
//                   <li>
//                     <a target="_blank" rel="noreferrer" href="https://twitter.com/" > Twitter</a>
//                   </li>
//                   <li>
//                     <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"> Linkedin</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>
//     </footer>
//   );
// }
// export default Footer;

import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link, animateScroll as scroll } from "react-scroll";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <footer className="pt-5 pb-3">
        <div className="row">
          <div className="col-4">
            <h5>TAUTAN LANGSUNG</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/about" className="nav-link p-0 text-muted link-hoover">
                  Tentang Kami
                </a>
                <div
                  className="underline"
                  style={{
                    height: "0.25rem",
                    width: "5rem",
                    marginLeft: "0px",
                  }}
                ></div>
              </li>
              <li className="nav-item mb-2">
                <a href="/business" className="nav-link p-0 text-muted">
                  Bisnis
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/services" className="nav-link p-0 text-muted">
                  Layanan
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/media" className="nav-link p-0 text-muted">
                  Karir
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="media" className="nav-link p-0 text-muted">
                  Galeri
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/contact" className="nav-link p-0 text-muted">
                  Hubungi
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h5>YAYASAN KARYA BAKTI UT</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  example@ykbut.co.id
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Yayasan Karya Bakti United Tractors
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  0212 444 44 44
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h5>MEDIA SOSIAL</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/"
                  className="nav-link p-0 text-muted"
                >
                  <i className="fa fa-instagram" aria-hidden="true">
                    {" "}
                    Instagram
                  </i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/"
                  className="nav-link p-0 text-muted"
                >
                  <i className="fa fa-twitter" aria-hidden="true">
                    {" "}
                    Twitter
                  </i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/"
                  className="nav-link p-0 text-muted"
                >
                  <i className="fa fa-linkedin" aria-hidden="true">
                    {" "}
                    Linkedin
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between py-2 mt-4 border-top">
          <p>
            Copyright &copy; 2022 Yayasan Karya Bhakti UT, All rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
