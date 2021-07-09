import React from "react";

const ShopCard = (props) => {
  console.log('from shop card', props)
  const { Img, Title, Rating, PrivuousPrice, CurrentPrice, Description } =
    props.dt;
  return (
    <div className="col-md-4 mt-4">
      <div className="card h-100">
        <img src={Img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{Description}</p>
        </div>
        {/* <div className="card-footer">
        <small className="text-muted">{Rating,PrivuousPrice,CurrentPrice,}</small>
      </div> */}
      </div>
    </div>
  );
};

export default ShopCard;
