import React from 'react';

const ShopCard = (props) => {
 const { Img, CurrentPrice, Description, PrivuousPrice, Rating, Title, _id } = props.dt;
 const handleClick = (id) => {
  console.log(id)
 }
 return (
  <div className='col-md-4 pt-3'>


   <div class="card ">
    <img class="card-img-top" src={Img} alt="Card image cap" />
    <div class="card-body">
     <h5 class="card-title">{Title}</h5>
     <p class="card-text">{Description}</p>
     <p>Privious prise <del>{PrivuousPrice}</del> . For now <span>{CurrentPrice}</span> Only</p>
     <button onClick={() => handleClick(_id)}>Buy Now</button>
    </div>
   </div>
  </div>
 );
};

export default ShopCard;