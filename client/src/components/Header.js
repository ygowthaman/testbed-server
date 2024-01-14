import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-start align-items-center">
        {/* <button type="button" className="btn">
          <i className="bi bi-three-dots-vertical"></i>
        </button> */}
        <h2 className="main-header-title"><b>K's Gallery</b></h2>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <div>
          <button type="button" className="btn">
            <i className="bi bi-house-fill"></i>
          </button>
        </div>
        <div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Tanjore Paintings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
