import React from "react";
import MainAbout from '../MainAbout/MainAbout'
import TopBanner from "../../components/Home/TopBanner/TopBanner";
import Benefits from "../../components/Home/Benefits/Benefits";
import FastCurrier from "../../components/Home/FastCurrier/FastCurrier";
import WorkingStyle from "../../components/Home/WorkingStyle/WorkingStyle";
import Ques from "../../components/Home/Ques/Ques";
const MainHome = () => {

  return (
    <div>
      <TopBanner></TopBanner>
      <Ques></Ques>
      <Benefits />
      <FastCurrier></FastCurrier>
      <MainAbout />
      <WorkingStyle></WorkingStyle>
    </div>
  );
};

export default MainHome;
