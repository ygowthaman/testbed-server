import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const countryFetch = await fetch("/api/country");
      const countryJson = await countryFetch.json();
      setCountries(countryJson.data);
    }
    fetchCountries();
  }, []);

  return (
    <header className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-start align-items-center">
        <h2 className="main-header-title">
          <b>Yal's Travel Gallery</b>
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
              Countries
            </button>
            <ul className="dropdown-menu">
              {countries.map((c) => {
                return (
                  <li>
                    <Link to="" className="dropdown-item">
                      {c.countryName}
                    </Link>
                  </li>
                );
              })}
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
