import React from "react";
import {

  Link,

} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import curds from "../../../Images/cards.png";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'
const Footer = () => {
  return (
    <div

      className="row footer-container"
    >
      <div className="col-md-4 offset-md-2">
        <h2>Service Master</h2>
        <p> Level-4, 34, Awal Centre, Banani, Dhaka</p>
        <p> Official: web@programming-hero.com</p>
        <p> Helpline : 01322810867 , 01322810882</p>
        <small>(Available : 09:00am to 7:00pm)</small>
      </div>
      <div className="col-md-2 footer-link">
        <Link className="nav-link" to="/blog">
          Blog

        </Link>
        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <div className='footer-icons'>
          <span>
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </div>
      </div>
      <div className="col-md-4">
        <img src={curds} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default Footer;
