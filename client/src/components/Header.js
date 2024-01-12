import React from "react";
// import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h2 class="navbar-brand">Reads</h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button type="button" class="btn">
                  <i className="bi bi-house-fill"></i>
                </button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-light">
                  Genres
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
