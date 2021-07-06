import React from "react";
import './SendMessage.css'
const SendMessage = () => {
  return (
    <div  className="d-flex align-items-center justify-content-center message-continer">
      <div className='d-flex align-items-center justify-content-around message-section'>
        <p> Send us a message  if you have an issue with your order.</p>
        <button>Chat Now</button>
      </div>
    </div>
  );
};

export default SendMessage;
