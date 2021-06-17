import React from "react";
import service from "../../../Images/service-1.png";
const CurierService = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Our Storage Service Covers</h2>
            <p>Daily Delivery Specialists For Personal or Business Clients</p>
            <div className="row">
              <div className="col md-6">
                <p>No nec meis docendi</p>
                <p>Cum electram definitionem</p> <p>Rebum munere ex mea</p>{" "}
                <p>Lorem ipsum dolor sit amet</p>{" "}
                <p>Vide convenire abhorreant</p>
              </div>
              <div className="col md-6">
                <p>No nec meis docendi</p>
                <p>Cum electram definitionem</p> <p>Rebum munere ex mea</p>{" "}
                <p>Lorem ipsum dolor sit amet</p>{" "}
                <p>Vide convenire abhorreant</p>
              </div>
              <button>SEE ALL SERVICES</button>
            </div>
          </div>
          <div className="col-md-6">
            <img style={{ width: "100%" }} src={service} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurierService;
