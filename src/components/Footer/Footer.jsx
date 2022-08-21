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
import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div class="d-flex w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2021 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
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
