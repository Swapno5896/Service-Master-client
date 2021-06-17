import React from "react";
import img1 from "../../../Images/service-1.png";
import service from "../../../Images/service-1.png";
import FastCurrierCard from "../FastCurrierCard/FastCurrierCard";
const FastCurrier = () => {
  const fastData = [
    {
      img: img1,
      title: "Company Movings",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam? Enim suscipit aperiam nam doloremque, commodi qui veritatis fuga nihil, cum deleniti molestias praesentium nostrum esse obcaecati doloribus omnis rem.    ",
    },
    {
      img: img1,
      title: "Postal Distribution",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam? Enim suscipit aperiam nam doloremque, commodi qui veritatis fuga nihil, cum deleniti molestias praesentium nostrum esse obcaecati doloribus omnis rem.    ",
    },
    {
      img: img1,
      title: "Warehouse Logestics",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam? Enim suscipit aperiam nam doloremque, commodi qui veritatis fuga nihil, cum deleniti molestias praesentium nostrum esse obcaecati doloribus omnis rem.    ",
    },
  ];
  return (
    <div>
      <div className="container">
        <h2 className="text-center">Moving Services</h2>
        <div className="row">
          {fastData.map((dt) => (
            <FastCurrierCard dt={dt}></FastCurrierCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FastCurrier;
