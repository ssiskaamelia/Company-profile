import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="containerHeader">
      <video src="/video.mp4" loop autoPlay muted className="video"></video>
      <div className="content">
        <h1>Yayasan Karya Bakti United Tractors</h1>
        <div className="row">
          <a href="about">
            <button className="btn" style={{ cursor: "pointer" }}>
              Get started
            </button>
          </a>
          {/* <h2 style={{align}}>SYNERGY | COMPETENT | SPEED | PRODUCTIVE</h2> */}
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
