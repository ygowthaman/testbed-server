import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import "./MainComponent.css";
import Country from "./Country";

const MainComponent = () => {
  return (
    <div className="main-content row">
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="country/:countryUuid" element={<Country />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default MainComponent;
