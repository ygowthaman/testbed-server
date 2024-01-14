import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import TanjorePainting from "./TanjorePainting";
import AbstractArt from "./AbstractArt";
import GlassPainting from "./GlassPainting";
import "./MainComponent.css";

const MainComponent = () => {
  return (
    <div className="main-content row">
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='about' element={<AboutMe />} />
        <Route path='tanjorepainting' element={<TanjorePainting />} />
        <Route path='abstract' element={<AbstractArt />} />
        <Route path='glasspainting' element={<GlassPainting />} /> 
        <Route path='*' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default MainComponent;