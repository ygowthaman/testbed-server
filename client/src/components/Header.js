import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <div className="d-flex justify-content-start align-items-center">
        <button type="button" className="btn">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
        <h2>Ravenswood</h2>
      </div>
      <div className="d-flex justify-content-end">
        <div>
          <button type="button" className="btn">
            <i className="bi bi-house-fill"></i>
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-light">
            Genres
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
