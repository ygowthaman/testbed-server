import React from "react";
import Genres from "./Genres";
import "./MainContent.css";

const MainContent = ()  => {
  return (
    <div className="main-content row">
      <div className="col-2">
        <Genres />
      </div>
    </div>
  );
}

export default MainContent;
