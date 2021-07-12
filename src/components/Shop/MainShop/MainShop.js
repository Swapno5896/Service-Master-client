import React, { useEffect } from "react";
import { connect } from "react-redux";
import img1 from "../../../Images/service-1.png";
import SideBar from "../Cart/Cart";
import { loadProductAsync } from "../../../redux/action/action";
import ShowLoading from '../../ShowLoading/ShowLoading'
import ShopCard from '../ShopCard/ShopCard'
import Cart from "../Cart/Cart";
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
  // console.log("props from shop", props.product);



  return (

    <div className="d-flex justify-content-center mt-5">
      <div className="row w-75">
        <div className='col-md-10 row'>
          {props.product?.map((dt) => (
            <ShopCard dt={dt} />
          ))}

        </div>
        <div className='col-md-2' style={{ position: 'fixed', marginLeft: '65%' }}>
          <Cart />
        </div>


      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainShop);
