import React, { useEffect } from "react";
import { connect } from "react-redux";
import img1 from "../../../Images/service-1.png";
import SideBar from "../Cart/Cart";
import { loadProductAsync } from "../../../redux/action/action";
import ShowLoading from '../../ShowLoading/ShowLoading'
import ShopCard from '../ShopCard/ShopCard'
import Cart from "../Cart/Cart";
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
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
        <div className='col-md-11 row'>
          {props.product?.map((dt) => (
            <ShopCard dt={dt} />
          ))}

        </div>
        <div style={{ position: 'relative', paddingLeft: '80%', position: 'fixed' }} className='col-md-1'>
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faCartArrowDown} /></button>

        </div>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Added Products</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Cart />
          </div>
        </div>


      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainShop);
