import React from "react";
import {

  Link,
 
} from "react-router-dom";
import "./NavBar.css";
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
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10 ">
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="nav-link" to="/">
                  Service Master
                </Link>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item pe-4">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item pe-4">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li class="nav-item pe-4">
                    <Link className="nav-link" to="/portfolio">
                      Portfolio
                    </Link>
                  </li>{" "}
                  <li class="nav-item pe-4">
                    <Link className="nav-link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li class="nav-item pe-4">
                    <Link className="nav-link" to="/admin">
                      Admin
                    </Link>
                  </li>
                </ul>
                {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
