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
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="pt-5 pb-3">
        <div className="row">
          <div className="col-4">
            <h5>Important Link</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Business
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Services
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Media
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Career
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h5>Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  ykbut@gmail.com
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Yayasan Karya Bakti UT
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
            <h5>Social Media</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between py-2 mt-4 border-top">
          <p>&copy; 2022 Yayasan Karya Bhakti UT.</p>
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
// <footer>
//   <Button variant="primary">Primary</Button>
//   <div className="h-70 bg-black mt-10 border">
//     <div className="row">
//       <div className="side1">
//         <div className="row">
//           <div className="col-md-3">
//             <h1 className="logo">LOGO YKBUT</h1>
//             <p className="footer-text">
//               Lorem ipsum Here are thriteen health benefits of apples Lorem
//             </p>
//           </div>
//           <div className="col-md-3">
//             <p className="footer-title">Important Link</p>
//             <ul>
//               <li>
//                 <Link
//                   spy={true}
//                   smooth={true}
//                   duration={1000}
//                   to="headerbg"
//                 >
//                   {" "}
//                   Home{" "}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="services"
//                   spy={true}
//                   smooth={true}
//                   duration={1000}
//                 >
//                   {" "}
//                   Services{" "}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="about-scroll"
//                   spy={true}
//                   smooth={true}
//                   duration={1000}
//                 >
//                   About Us{" "}
//                 </Link>
//               </li>
//               <li>
//                 <Link to="contact" spy={true} smooth={true} duration={1000}>
//                   {" "}
//                   Contact{" "}
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="side2">
//         <div className="row">
//           <div className="col-md-3">
//             <p className="footer-title">Contact</p>
//             <ul>
//               <li>
//                 <Link to="#">ykbut@gmail.com</Link>
//               </li>
//               <li>
//                 <Link to="#"> Yayasan Karya Bakti UT</Link>
//               </li>
//               <li>
//                 <Link to="#">0212 444 44 44</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-3">
//             <p className="footer-title">Social Media</p>
//             <ul>
//               <li>
//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://instagram.com/"
//                 >
//                   {" "}
//                   Instagram
//                 </a>
//               </li>
//               <li>
//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://twitter.com/"
//                 >
//                   {" "}
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://www.linkedin.com/"
//                 >
//                   {" "}
//                   Linkedin
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
//     <i className="fas fa-level-up-alt"></i>
//   </button>
// </footer>
