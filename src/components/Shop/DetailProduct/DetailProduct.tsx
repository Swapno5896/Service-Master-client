import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
const DetailProduct = () => {
  const { id } = useParams<any>();
  const [product, setProduct] = useState([{
    CurrentPrice: '',
    Description: '',
    Img: '',
    PrivuousPrice: '',
    Rating: '',
    Title: ''
  }])
  useEffect(() => {
    fetch(`https://murmuring-fjord-79691.herokuapp.com/getProduct/${id}`)
      .then((res) => res.json())
      .then((result) => setProduct(result));
  }, [id])

  const { CurrentPrice,
    Description,
    Img,
    PrivuousPrice,
    Rating,
    Title } = product[0]

  return (
    <div className='d-flex justify-content-center'>
      <div className="row w-75">
        <div className="col-md-8">
          <h2>detail product</h2>
          <div>
            <img src={Img} className="img-fluid" alt="..."></img>
            <h2>{Title}</h2>
            <p>{Description}</p>
          </div>
          <Review />
        </div>
        <div className="col-md-4" style={{ height: '680px', overflow: 'scroll' }}>
          <Cart />

        </div>
      </div>   </div>
  );
};

export default DetailProduct;