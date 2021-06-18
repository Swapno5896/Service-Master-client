import React from "react";

const SideBar = (props) => {
  const { Title, Description } = props.dt;
  return (
    <div className="card h-20">
      <div className="card-body">
        <h5 className="card-title text-center">{Title}</h5>
        <p className="card-text">{Description}</p>
      </div>
      {/* <div className="card-footer">
        <small className="text-muted">{Rating}</small>
      </div> */}
    </div>
  );
};

export default SideBar;
