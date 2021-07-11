import React, { useEffect } from "react";
import PortFolioCard from "../PortFolioCard/PortFolioCard";
import { loadPortfolioAsync } from "../../../redux/action/action";
import { connect } from "react-redux";
import ShowLoading from "../../ShowLoading/ShowLoading";


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
  useEffect(() => {
    props.loadPortfolioAsync();
  }, []);


  return (
    <div class="d-flex justify-content-center pb-5 mp-5">

      <div className="row" style={{ padding: "0px 70px" }}>
        {props.portfoilo?.map((dt) => (
          <PortFolioCard dt={dt} key={dt._id} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPortFolio);
