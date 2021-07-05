import React from "react";
import "./WorkingStyle.scss";
import img1 from "../../../Images/service-1.png";
const WorkingStyle = () => {
  return (
    <div className="WorkingStyle-container p-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img className="WorkingStyle-img" src={img1} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 className="text-center pb-3">Short or long-term storage</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            eveniet autem debitis qui repellat dolore consequatur! Iste, fuga
            repellendus. Asperiores molestiae cupiditate nobis velit blanditiis
            adipisci quisquam sequi debitis beatae?
          </p>
          <div>
            <p>img</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              aperiam nemo, ullam repellat consequuntur corporis eaque obcaecati
              possimus. Temporibus incidunt ratione vitae ipsa, doloremque
              itaque veritatis explicabo reprehenderit fuga quae.
            </p>
          </div>
          <div>
            <p>img</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              aperiam nemo, ullam repellat consequuntur corporis eaque obcaecati
              possimus. Temporibus incidunt ratione vitae ipsa, doloremque
              itaque veritatis explicabo reprehenderit fuga quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStyle;
