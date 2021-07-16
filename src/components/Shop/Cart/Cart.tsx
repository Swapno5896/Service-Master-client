import React from "react";
import { connect } from "react-redux";
import CartDetail from "../CartDetail/CartDetail";
const mapStateToProps = (state: any) => {
  return {
    cart: state.cart.cart
  };
};
const Cart = (props: any) => {
  const fakedata = [
    {
      title: 'dflksdlfks', price: 20, quantity: 2, img: 'https://servicemaster.qodeinteractive.com/wp-content/uploads/2016/08/product-1.jpg'
    },
    {
      title: 'dflksdlfks', price: 20, quantity: 2, img: 'https://servicemaster.qodeinteractive.com/wp-content/uploads/2016/08/product-1.jpg'
    },
    {
      title: 'dflksdlfks', price: 20, quantity: 2, img: 'https://servicemaster.qodeinteractive.com/wp-content/uploads/2016/08/product-1.jpg'
    },
  ]
  const dt = props.cart
  return (
    <div className="card h-20 mt-2">
      <div className="card-body">

        {/* <h5 className="card-title text-center">{Title}</h5>
        <p className="card-text">{Description}</p> */}
      </div>
      <div className="card-footer">
        {
          fakedata.map(pd => <CartDetail dt={pd} />)
        }

      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Cart);
