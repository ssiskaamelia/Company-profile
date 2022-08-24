import React from "react";
import Careerykbut from "./components/CareerAtYkbut";
import CareerInfo from "./components/CareerInfo";
import QuestionsComponent from "./components/QuestionsComponent";


const CareerPage = () => {
  return (
    <div className="container">
      <CareerInfo />
      <Careerykbut />
      <QuestionsComponent />
    </div>
  );
};

export default CareerPage;
