import React from "react";
import "./FastCurrierCard.scss";
const FastCurrierCard = (props) => {
  const { img, title, description } = props.dt;
  return (
    <div className="col-md-4 ">
      <div className="card currierCard" style={{ width: "24rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FastCurrierCard;
