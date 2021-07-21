import React from "react";
import Description from "../../components/AboutUs/Description/Description";
import CurierService from "../../components/Home/CurierService/CurierService";
import SendMessage from "../../components/AboutUs/SendMessage/SendMessage";
const MainAbout = () => {
  return (
    <div>
      <Description />
      <CurierService />
      <SendMessage />
    </div>
  );
};

export default MainAbout;
