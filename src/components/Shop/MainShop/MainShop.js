import React, { useEffect } from "react";
import { connect } from "react-redux";
import img1 from "../../../Images/service-1.png";
import SideBar from "../Cart/Cart";
import { loadProductAsync } from "../../../redux/action/action";
import ShowLoading from '../../ShowLoading/ShowLoading'
import ShopCard from '../ShopCard/ShopCard'
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
  console.log("props from shop", props.product);



  return (

    <div className="d-flex justify-content-center mt-5">
      <div className="row w-75">

        {props.product?.map((dt) => (
          <ShopCard dt={dt} />
        ))}


      </div>   </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainShop);
