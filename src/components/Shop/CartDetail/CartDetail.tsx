import React from 'react';

const CartDetail = (props: any) => {
 return (
  <div className="card mb-3" style={{ maxWidth: '540px' }}>
   <div className="row g-0">
    <div className="col-md-4">
     <img src={props.dt.img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
     <div className="card-body">
      <p className="card-text">Card title</p>

     </div>
     <div className="CartDetail-header">
      <p>cost : 30.33</p>
      <p> pices : 3</p>
     </div>
     <div className="detail-item">
      <button className="detail-btn">Detail</button>
      <button className="detail-btn">Detail</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default CartDetail;