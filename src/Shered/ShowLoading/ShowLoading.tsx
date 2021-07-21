import React from "react";
const ShowLoading = () => {
 return (
  <div
   style={{ height: "700px" }}
   className="d-flex justify-content-center align-items-center "
  >
   <div
    style={{ width: "3rem", height: "3rem" }}
    className="spinner-border"
    role="status"
   >
   </div>
  </div>
 );
}
export default ShowLoading;
