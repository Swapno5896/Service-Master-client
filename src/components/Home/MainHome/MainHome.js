import React from "react";
import NavBar from "../NavBar/NavBar";

import TopBanner from "../TopBanner/TopBanner";
import Benefits from "../Benefits/Benefits";
import CurierService from "../CurierService/CurierService";
import FastCurrier from "../FastCurrier/FastCurrier";
import Footer from "../Footer/Footer";
import WorkingStyle from "../WorkingStyle/WorkingStyle";
import Ques from "../Ques/Ques";
const MainHome = () => {
  return (
    <div>
      <NavBar></NavBar>
      <TopBanner></TopBanner>
      <Ques></Ques>
      <Benefits></Benefits>
      {/* <CurierService></CurierService> */}
      <FastCurrier></FastCurrier>
      <WorkingStyle></WorkingStyle>
      <Footer></Footer>
    </div>
  );
};

export default MainHome;
