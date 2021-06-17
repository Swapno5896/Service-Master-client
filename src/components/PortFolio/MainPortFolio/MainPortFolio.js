import React from "react";
import PortFolioCard from "../PortFolioCard/PortFolioCard";
import Img from "../../../Images/service-1.png";
const MainPortFolio = () => {
  const proftfolio = [
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
  ];
  return (
    <div>
      <div className="row">
        {proftfolio.map((dt) => (
          <PortFolioCard dt={dt} />
        ))}
      </div>
    </div>
  );
};

export default MainPortFolio;
