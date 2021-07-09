import React, { useEffect } from "react";
import { connect } from "react-redux";
import img1 from "../../../Images/service-1.png";
import ShopCard from "../ShopCard/ShopCard";
import SideBar from "../SideBar/SideBar";
import { loadProductAsync } from "../../../redux/action/action";
import ShowLoading from '../../ShowLoading/ShowLoading'
const mapDispatchToProps = {
  loadProductAsync,
};

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    isloading: state.isLoading,
  };
};
const MainShop = (props) => {
  useEffect(() => {
    props.loadProductAsync();
  }, []);
  // console.log("props from shop", props?.product);


  if (props.isloading == true) {
    return (
      <ShowLoading />
    )
  }

  return (
    <div>

      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {props.produc?.map((dt) => (
              <ShopCard dt={dt} name='fdfds ' key={dt._id} />
            ))}
          </div>
        </div>
        <div
          className="col-md-4"
          style={{ height: "680px", overflow: "scroll" }}
        >
          {props.produc?.map((dt) => (
            <SideBar dt={dt} key={dt._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainShop);
