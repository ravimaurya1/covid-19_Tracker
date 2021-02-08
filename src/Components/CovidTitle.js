import React from "react";
import Logo from "../images/loc.png";

//CSS
import "../styles/CovidTitle.css";

const CovidTitle = () => {
  return (
    <div className="title">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="des">
        <h1>INDIA COVID-19 Tracker</h1>
        <p>
          Let's all pray to make our Earth Covid-19 free soon,Stay Safe and do
          TheLocate.
        </p>
      </div>
    </div>
  );
};

export default CovidTitle;
