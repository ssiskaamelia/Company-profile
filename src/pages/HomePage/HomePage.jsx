import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="containerHeader">
      <video src="/video.mp4" loop autoPlay muted className="video"></video>
      <div className="content">
        <h1>YAYASAN KARYA BAKTI</h1>
        <h2>UNITED TRACTORS</h2>
        {/* <h3>SYNERGY | COMPETENT | SPEED | PRODUCTIVE</h3> */}
        <div className="row">
          <a href="about">
            <button className="btn" style={{ cursor: "pointer" }}>
              Get started
            </button>
          </a>
          {/* <a href="contact">
              <button className="btn" style={{ cursor: "pointer" }}>
              Contact Us
              </button>
            </a> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
