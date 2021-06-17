import React from "react";
import Description from "../Description/Description";
import CurierService from "../../Home/CurierService/CurierService";
import SendMessage from "../SendMessage/SendMessage";
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
