import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state: any) => {
  return {
    cart: state.cart.cart
  };
};
const Cart = (props: any) => {
  console.log('from cart', props.cart)
  return (
    <div className="card h-20 mt-2">
      <div className="card-body">
        <h2>You added {props.cart.length} product</h2>
        {/* <h5 className="card-title text-center">{Title}</h5>
        <p className="card-text">{Description}</p> */}
      </div>
      {/* <div className="card-footer">
        <small className="text-muted">{Rating}</small>
      </div> */}
    </div>
  );
};

export default connect(mapStateToProps)(Cart);
