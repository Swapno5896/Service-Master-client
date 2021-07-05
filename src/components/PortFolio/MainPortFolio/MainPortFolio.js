import React, { useEffect } from "react";
import PortFolioCard from "../PortFolioCard/PortFolioCard";
import Img from "../../../Images/service-1.png";
import { loadPortfolioAsync } from "../../../redux/action/action";
import { connect } from "react-redux";
const mapDispatchToProps = {
  loadPortfolioAsync,
};

const mapStateToProps = (state) => {
  return {
    portfoilo: state.portfoilo.portfoilo,
    isloading: state.isLoading,
  };
};
const MainPortFolio = (props) => {
  console.log("from portfolio", props);
  useEffect(() => {
    props.loadPortfolioAsync();
  }, []);

  if (props.isloading == true) {
    return (
      <div
        style={{ height: "700px" }}
        class="d-flex justify-content-center align-items-center "
      >
        <div
          style={{ width: "3rem", height: "3rem" }}
          class="spinner-border"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const proftfolio = [
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      Img,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
  ];

  return (
    <div class="d-flex justify-content-center pb-5 mp-5">
      <div className="row" style={{ padding: "0px 70px" }}>
        {proftfolio.map((dt) => (
          <PortFolioCard dt={dt} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPortFolio);
