import React from "react";

const PortFolioCard = (props) => {
  const { img, Description, Titile } = props.dt;
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Titile}</h5>
          <p className="card-text">{Description}</p>
        </div>
        {/* <div className="card-footer">
            <small className="text-muted">{Rating,PrivuousPrice,CurrentPrice,}</small>
          </div> */}
      </div>{" "}
    </div>
  );
};

export default PortFolioCard;
