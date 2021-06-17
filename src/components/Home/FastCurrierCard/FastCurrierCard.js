import React from "react";

const FastCurrierCard = (props) => {
  const { img, title, description } = props.dt;
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FastCurrierCard;
