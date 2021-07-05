import React from "react";

import TopBanner from "../TopBanner/TopBanner";
import Benefits from "../Benefits/Benefits";
import FastCurrier from "../FastCurrier/FastCurrier";
import WorkingStyle from "../WorkingStyle/WorkingStyle";
import Ques from "../Ques/Ques";
const MainHome = () => {

  return (
    <div>
      <TopBanner></TopBanner>
      <Ques></Ques>
      <Benefits />
      <FastCurrier></FastCurrier>
      <WorkingStyle></WorkingStyle>
    </div>
  );
};

export default MainHome;
