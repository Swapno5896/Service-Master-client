import React from "react";
import "./Benefit.scss";
const Benefits = (props) => {
  const { img, title, description } = props.dt;
  return (
    <div className="benefits-container">
      <img
        className="benefit-gb-img"
        src="https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h2-parallax-1.jpg"
        alt=""
      />
      <div className="row ">
        <div className="col-md-4">
          <div style={{ display: "flex" }}>
            <div>
              <p>img</p>
            </div>
            <div>
              <h3> {title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
