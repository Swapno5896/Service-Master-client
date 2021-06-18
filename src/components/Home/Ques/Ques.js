import React from "react";
import "./Ques.scss";
import FastCurrierCard from "../FastCurrierCard/FastCurrierCard";
const Ques = () => {
  const fastQues = [
    {
      img: "https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h2-img-1.jpg",
      title: "Moving Your Family?",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam? Enim suscipit aperiam nam doloremque, commodi qui veritatis fuga nihil, cum deleniti molestias praesentium nostrum esse obcaecati doloribus omnis rem.    ",
    },
    {
      img: "https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h2-img-2.jpg",
      title: "Moving Interstate?",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam? Enim suscipit aperiam nam doloremque, commodi qui veritatis fuga nihil, cum deleniti molestias praesentium nostrum esse obcaecati doloribus omnis rem.    ",
    },
    {
      img: "https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h2-img-3.jpg",
      title: "Need Storage Space?",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam? Enim suscipit aperiam nam doloremque, commodi qui veritatis fuga nihil, cum deleniti molestias praesentium nostrum esse obcaecati doloribus omnis rem.    ",
    },
  ];
  return (
    <div class="d-flex justify-content-center">
      <div className="row w-90">
        {fastQues.map((dt) => (
          <FastCurrierCard dt={dt}></FastCurrierCard>
        ))}
      </div>
    </div>
  );
};

export default Ques;
