import React from "react";
import "./Image.css";
import { LightgalleryItem, ItemTitle, LinesEllipsis } from "react-lightgallery";
import { ykbut, ykbut2, ykbut3, ykbut4 } from "../../../assets/images";

const Imagelist = () => {
  const data = [
    {
      image: ykbut2,
      title: "Gedung YKBUT",
    },
    {
      image: ykbut,
      title: "Studio YLC",
    },
    {
      image: ykbut3,
      title: "Title 3",
    },
    {
      image: ykbut4,
      title: "Title 5",
    },
    {
      image: ykbut2,
      title: "Title 4",
    },
  ];
  return (
    <div className="gallery">
      {data.map((item, index) => {
        return (
          <div className="pics">
            <LightgalleryItem key={index} group="any" src={item.image}>
              <img className="d-flex align-items-center" src={item.image} />
              <p>{item.title}</p>
            </LightgalleryItem>
          </div>
        );
      })}
    </div>
  );
};

export default Imagelist;
