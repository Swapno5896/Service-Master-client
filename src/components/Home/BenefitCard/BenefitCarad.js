import React from "react";

const BenefitCarad = (props) => {
  const { title, description } = props.dt;
  return (
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
  );
};

export default BenefitCarad;
