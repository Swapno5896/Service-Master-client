import React from "react";
import "./Benefit.scss";
import img1 from "../../../Images/service-3.webp";
import BenefitCard from "../BenefitCard/BenefitCarad";
const Benefits = () => {
  const benefitData = [
    {
      img: img1,
      title: "Pack&Unpack",
      description:
        " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
    },
    {
      img: img1,
      title: "Auto Transport",
      description:
        " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
    },
    {
      img: img1,
      title: "Special Offers",
      description:
        " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
    },
    {
      img: img1,
      title: "Moving Protection",
      description:
        " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
    },
    {
      img: img1,
      title: "Cleaning Service",
      description:
        " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
    },
    {
      img: img1,
      title: "Storage Offers",
      description:
        " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
    },
  ];
  return (
    <div className="benefits-container">
      <img
        className="benefit-gb-img"
        src="https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h2-parallax-1.jpg"
        alt=""
      />
      <div class="d-flex justify-content-center benefit-card-container">
        <div className="row w-75">
          {benefitData.map((dt) => (
            <BenefitCard dt={dt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
