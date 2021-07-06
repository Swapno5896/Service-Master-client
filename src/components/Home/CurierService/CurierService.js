import React from "react";
import "./CurrierService.scss";
import service from "../../../Images/service-1.png";
const CurierService = () => {
  return (
    <div className='pb-3'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Our Storage Service Covers</h2>
            <p>Daily Delivery Specialists For Personal or Business Clients</p>
            <div className="row">
              <ul className="col md-6">
                <li>No nec meis docendi</li>
                <li>Cum electram definitionem</li> <li>Rebum munere ex mea</li>{" "}
                <li>Lorem ipsum dolor sit amet</li>{" "}
                <li>Vide convenire abhorreant</li>
              </ul>
              <ul className="col md-6">
                <li>No nec meis docendi</li>
                <li>Cum electram definitionem</li> <li>Rebum munere ex mea</li>{" "}
                <li>Lorem ipsum dolor sit amet</li>{" "}
                <li>Vide convenire abhorreant</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <img style={{ width: "100%" }} src={service} alt="" />
          </div>
        </div>
        {/* <button className="all-service-btn">SEE ALL SERVICES</button> */}
      </div>
    </div>
  );
};

export default CurierService;
