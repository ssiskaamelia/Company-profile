// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import { contactConfig } from "../ContactUsPage/components/content_options";

// export default function ContactUs() {
//   return (
//     <Container>
//       <Row className="col text-center mb-5 mt-5">
//         <Col lg="8">
//           <h2 className="title">HUBUNGI KAMI</h2>
//           <hr className="t_border my-4 ml-0 text-left" />
//         </Col>
//       </Row>
//       <Row className="sec_sp">
//         <Col lg="5" className="mb-5">
//           <h3 className="color_sec py-4">Get In Touch</h3>
//           <address>
//             <strong>Email:</strong>{" "}
//             <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//               {contactConfig.YOUR_EMAIL}
//             </a>
//             <br />
//             <br />
//             {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//               <p>
//                 <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//               </p>
//             ) : (
//               ""
//             )}
//           </address>
//           <p>{contactConfig.description}</p>
//         </Col>
//         <Col lg="7" className="d-flex align-items-center">
//           <form className="contact__form w-100">
//             <Row>
//               <Col lg="6" className="form-group">
//                 <input
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   placeholder="Name"
//                   type="text"
//                   required
//                 />
//               </Col>
//               <Col lg="6" className="form-group">
//                 <input
//                   className="form-control rounded-0"
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   type="email"
//                   required
//                 />
//               </Col>
//             </Row>
//             <textarea
//               className="form-control rounded-0"
//               id="message"
//               name="message"
//               placeholder="Message"
//               rows="5"
//               required
//             ></textarea>
//             <br />
//             <Row>
//               <Col lg="12" className="form-group">
//                 <button className="btn ac_btn" type="submit">
//                   Send
//                 </button>
//               </Col>
//             </Row>
//           </form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

import React from "react";

const ContactUs = () => {
  return (
    <div className="container">
      <h2 className="title mb-4">HUBUNGI KAMI</h2>
      {/* <!-- Bootstrap 5 starter form --> */}
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        {/* <!-- Name input --> */}
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Name"
            data-sb-validations="required"
          />
          <div className="invalid-feedback" data-sb-feedback="name:required">
            Name is required.
          </div>
        </div>

        {/* <!-- Email address input --> */}
        <div className="mb-3">
          <label className="form-label" htmlFor="emailAddress">
            Email Address
          </label>
          <input
            className="form-control"
            id="emailAddress"
            type="email"
            placeholder="Email Address"
            data-sb-validations="required, email"
          />
          <div
            className="invalid-feedback"
            data-sb-feedback="emailAddress:required"
          >
            Email Address is required.
          </div>
          <div
            className="invalid-feedback"
            data-sb-feedback="emailAddress:email"
          >
            Email Address Email is not valid.
          </div>
        </div>

        {/* <!-- Message input --> */}
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            type="text"
            placeholder="Message"
            style={{ height: "10rem" }}
            data-sb-validations="required"
          ></textarea>
          <div className="invalid-feedback" data-sb-feedback="message:required">
            Message is required.
          </div>
        </div>

        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center mb-3">Form submission successful!</div>
        </div>

        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">
            Error sending message!
          </div>
        </div>

        <div className="d-grid">
          <button
            className="btn btn-primary btn-lg disabled"
            id="submitButton"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
