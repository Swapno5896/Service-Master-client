import React, { useEffect } from "react";
const ShowLoading = (props) => {
 return (
  <div
   style={{ height: "100%" }}
   class="d-flex justify-content-center align-items-center "
  >
   <div
    style={{ width: "3rem", height: "3rem" }}
    class="spinner-border"
    role="status"
   >
   </div>
  </div>
 );
}
export default ShowLoading;
