import React from "react";
import img1 from "../../../Images/service-1.png";
import FastCurrierCard from "../FastCurrierCard/FastCurrierCard";
const Ques = () => {
  const fastQues = [
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
    <div className="row">
      {fastQues.map((dt) => (
        <FastCurrierCard dt={dt}></FastCurrierCard>
      ))}
    </div>
  );
};

export default Ques;
