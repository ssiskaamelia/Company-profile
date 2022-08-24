import React from "react";
import "./Image.css";
import { LightgalleryItem, ItemTitle, LinesEllipsis } from "react-lightgallery";
import {
  agency1,
  agency2,
  agency3,
  agency4,
  tree5,
} from "../../../assets/images";

const Imagelist = () => {
  const data = [
    {
      image: agency1,
      title: "Title 1",
    },
    {
      image: agency2,
      title: "Title 2",
    },
    {
      image: agency3,
      title: "Title 3",
    },
    {
      image: tree5,
      title: "Title 5",
    },
    {
      image: agency4,
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
