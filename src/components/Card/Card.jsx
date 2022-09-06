import { MBUT } from "../../assets/images";

const Card = ({ name, desc, kolom, url, linkIg, linkYt, logo }) => {
  return (
    <div
      className={
        kolom === 2
          ? "col col-6 d-flex justify-content-center"
          : "col col-4 d-flex justify-content-center"
      }
    >
      <div
        className="card border bg-light mb-5"
        style={kolom === 2 ? { width: "360px" } : { width: "320px" }}
      >
        <div className="col">
          <div className="d-flex justify-content-end row p-3">
            <a onClick={() => window.open(linkIg)}>
              <i
                className="fa fa-instagram mb-2"
                aria-hidden="true"
                style={{ cursor: "pointer", color: "black", fontSize: "20px" }}
              ></i>
            </a>
            <a onClick={() => {}}>
              <i
                className="fa fa-twitter mb-2"
                aria-hidden="true"
                style={{ cursor: "pointer", color: "black", fontSize: "20px" }}
              ></i>
            </a>
            <a onClick={() => window.open(linkYt)}>
              <i
                className="fa fa-youtube mb-2"
                aria-hidden="true"
                style={{ cursor: "pointer", color: "black", fontSize: "20px" }}
              ></i>
            </a>
          </div>
          <div className="card p-3 bg-secondary">
            <div className="row d-flex justify-content-center">
              <div className="d-flex rounded-circle bg-white position-absolute align-item-center" style={{ height: "100px", width: "100px", top: "-80px" }}>
                <img
                  src={logo}
                  alt={name}
                  className="imageCard"
                  style={{ maxWidth: "100px", objectFit: "covrer" }}
                />
              </div>
              <p className="text-center mt-2 fw-bold text-white mb-2">{name}</p>
              <p className="text-center text-white" style={{ height: "120px" }}>
                {desc}
              </p>
              <button
                type="button"
                className="btn w-50 shadow-sm fw-bolder text-white"
                style={{ backgroundColor: "#15c386" }}
                onClick={() => window.open(url)}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
