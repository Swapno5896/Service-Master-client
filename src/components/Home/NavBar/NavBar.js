import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <span className="upper-nav-text">01709112230</span>
              <span className="upper-nav-text">
                Mon - Fri 08:00 - 20:00 / Closed on Weekends
              </span>
            </div>
            <div class="col-md-4 offset-md-4">
              <span className="upper-nav-text">
                © 2021 Qode Interactive, All Rights Reserved
              </span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10 ">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <Link to="/"> ServiceMaster</Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <li class="nav-item">
                  <Link to="/">HOME</Link>
                </li>
                <li class="nav-item">
                  <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li class="nav-item">
                  <Link to="/blog">BLOG</Link>
                </li>
                <li class="nav-item">
                  <Link to="/shop">SHOP</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li class="nav-item">
                  <Link to="/admin">ADMIN</Link>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
