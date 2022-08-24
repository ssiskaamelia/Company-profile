import React from "react";
import { Container } from "@mui/material";
import Imagelist from "./components/Imagelist";
import { LightgalleryProvider } from "react-lightgallery";

const MediaPage = () => {
  return (
    <div className="container container-sm">
      <LightgalleryProvider
        lightgallerySettings={
          {
            // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
          }
        }
        galleryClassName="my_custom_classname"
      >
        <Container
          maxWidth="lg"
          sx={{ textAlign: "center", mt: "5rem", color: "#15c386" }}
        >
          <h1 className="container">RUANG MEDIA</h1>
          <Imagelist />
        </Container>
      </LightgalleryProvider>
    </div>
  );
};

export default MediaPage;
