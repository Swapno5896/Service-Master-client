import React from "react";
import MainHome from "../src/components/Home/MainHome/MainHome";
import MainAbout from "./components/AboutUs/MainAbout/MainAbout";
import MainShop from "./components/Shop/MainShop/MainShop";
import MainPortFolio from "./components/PortFolio/MainPortFolio/MainPortFolio";
const App = () => {
  return (
    <div>
      <MainHome></MainHome>
      <MainAbout />
      <MainShop />
      <MainPortFolio />
    </div>
  );
};

export default App;
