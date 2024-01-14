import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-start align-items-center">
        <h2 className="main-header-title">
          <b>K's Gallery</b>
        </h2>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <div>
          <Link to="/">
            <button type="button" className="btn">
              <i className="bi bi-house-fill"></i>
            </button>
          </Link>
        </div>
        <div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/tanjorepainting" className="dropdown-item">
                    Tanjore Paintings
                </Link>
              </li>
              <li>
                <Link to="/glasspainting" className="dropdown-item">
                    Glass Paintings
                </Link>
              </li>
              <li>
                <Link to="/abstract" className="dropdown-item">
                    Abstract Art
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn">
          <Link to="/about">
            <button type="button" className="btn btn-link">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
