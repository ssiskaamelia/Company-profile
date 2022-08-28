import React, { useState } from "react";

const CareerInfo = () => {
  const [dataCareer, setDataCareer] = useState([
    {
      id: 1,
      name: "Mekanik",
      assignment: "PT GLOBAL SERVIE INDONESIA",
      personNeeded: 5,
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        "Lulusan niminal SMA / sederajat",
        "Berpengalaman minimal 2 tahun",
        "Memiliki paspor",
      ],
    },
    {
      id: 2,
      name: "Mekanik",
      assignment: "PT GLOBAL SERVIE INDONESIA",
      personNeeded: 5,
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        "Lulusan niminal SMA / sederajat",
        "Berpengalaman minimal 2 tahun",
        "Memiliki paspor",
      ],
    },
    {
      id: 3,
      name: "Mekanik",
      assignment: "PT GLOBAL SERVIE INDONESIA",
      personNeeded: 5,
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        "Lulusan niminal SMA / sederajat",
        "Berpengalaman minimal 2 tahun",
        "Memiliki paspor",
      ],
    },
    {
      id: 4,
      name: "Mekanik",
      assignment: "PT GLOBAL SERVIE INDONESIA",
      personNeeded: 5,
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        "Lulusan niminal SMA / sederajat",
        "Berpengalaman minimal 2 tahun",
        "Memiliki paspor",
      ],
    },
    {
      id: 5,
      name: "Mekanik",
      assignment: "PT GLOBAL SERVIE INDONESIA",
      personNeeded: 5,
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        "Lulusan niminal SMA / sederajat",
        "Berpengalaman minimal 2 tahun",
        "Memiliki paspor",
      ],
    },
  ]);

  const renderCareer = (data) => {
    return (
      <div className="col col-5 card my-3 mx-3" >
        <div className="row g-0">
          <div className="col-md-4 p-4">
            <p>LOGO</p>
            <button className="btn btn-primary" >Apply Now</button>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p>{data.name}</p>
              <p className="card-text">{data.assignment}</p>
              <hr />
              <p>{data.personNeeded}</p>
              <hr />
              <p>{data.requirements}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container container-sm mb-5 mt-3">
      <h2 className="title mb-3">INFO KARIR</h2>
      <div className="row gy-5 mt-2 d-flex justify-content-center">
        {dataCareer.map((data) => renderCareer(data))}
      </div>
    </div>
  );
};

export default CareerInfo;