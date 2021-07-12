import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from '../../../redux/action/action'
const mapDispatchToProps = {
 addToCart
}
const ShopCard = (props) => {
 console.log('props from shop card', props)
 const { Img, CurrentPrice, Description, PrivuousPrice, Rating, Title, _id } = props.dt;
 let history = useHistory();
 const handleClick = (id) => {
  props.addToCart(id)

 }
 const shoDetail = (id) => {
  history.push(`/shop/${id}`);
 }
 return (
  <div className='col-md-4 pt-3'>


   <div class="card ">
    <div onClick={() => shoDetail(_id)}>
     <img class="card-img-top" src={Img} alt="Card image cap" />
     <div class="card-body">
      <h5 class="card-title">{Title}</h5>
      <p class="card-text">{Description}</p>
      <p>Privious prise <del>{PrivuousPrice}</del> . For now <span>{CurrentPrice}</span> Only</p>
     </div>
    </div>
    <button onClick={() => handleClick(_id)}>Add To Cart</button>
   </div>
  </div>
 );
};

export default connect(null, mapDispatchToProps)(ShopCard);