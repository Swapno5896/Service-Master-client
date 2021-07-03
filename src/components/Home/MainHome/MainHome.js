import React from "react";

import TopBanner from "../TopBanner/TopBanner";
import Benefits from "../Benefits/Benefits";
import CurierService from "../CurierService/CurierService";
import FastCurrier from "../FastCurrier/FastCurrier";
import Footer from "../Footer/Footer";
import WorkingStyle from "../WorkingStyle/WorkingStyle";
import Ques from "../Ques/Ques";
import img1 from "../../../Images/service-1.png";
const MainHome = () => {
  // const benefitData = [
  //   {
  //     img: img1,
  //     title: "Pack&Unpack",
  //     description:
  //       " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
  //   },
  //   {
  //     img: img1,
  //     title: "Auto Transport",
  //     description:
  //       " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
  //   },
  //   {
  //     img: img1,
  //     title: "Special Offers",
  //     description:
  //       " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
  //   },
  //   {
  //     img: img1,
  //     title: "Moving Protection",
  //     description:
  //       " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
  //   },
  //   {
  //     img: img1,
  //     title: "Cleaning Service",
  //     description:
  //       " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
  //   },
  //   {
  //     img: img1,
  //     title: "Storage Offers",
  //     description:
  //       " An duo lorem altera gloriatur. No imperdiet adver sarium pro. Nosit sumo lorem. Mei ea eius elitr consequ untur. In mel aeterno.",
  //   },
  // ];
  return (
    <div>
      <TopBanner></TopBanner>
      <Ques></Ques>

      <Benefits />

      {/* <CurierService></CurierService> */}
      <FastCurrier></FastCurrier>
      <WorkingStyle></WorkingStyle>
      <Footer></Footer>
    </div>
  );
};

export default MainHome;
