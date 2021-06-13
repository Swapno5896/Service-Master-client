import React from "react";
import NavBar from "../src/components/Home/NavBar/NavBar";
import TopBanner from "../src/components/Home/TopBanner/TopBanner";
import Benefits from "../src/components/Home/Benefits/Benefits";
import CurierService from "../src/components/Home/CurierService/CurierService";
import FastCurrier from "../src/components/Home/FastCurrier/FastCurrier";
import Footer from "../src/components/Home/Footer/Footer";
import WorkingStyle from "../src/components/Home/WorkingStyle/WorkingStyle";
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <TopBanner></TopBanner>
      <Benefits></Benefits>
      <CurierService></CurierService>
      <FastCurrier></FastCurrier>
      <WorkingStyle></WorkingStyle>
      <Footer></Footer>
    </div>
  );
};

export default App;
