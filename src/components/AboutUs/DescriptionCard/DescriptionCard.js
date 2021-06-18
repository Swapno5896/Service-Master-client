import React from "react";

const DescriptionCard = (props) => {
  const { TopImg, SubImg, Title, Description } = props.dt;
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card" style={{ width: "19rem" }}>
        <img src={TopImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{Description}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
