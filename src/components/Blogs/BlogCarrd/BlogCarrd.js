import React from "react";
import { useHistory } from "react-router-dom";
// import { blogCardDataType } from '../MainBlog/MainBlog'
// interface blogCardProps {
//     dt: blogCardDataType

// }
const BlogCarrd = ({ dt }) => {
  const { img, title, date, discription, _id } = dt;
  // console.log('_id from blog', _id);

  let history = useHistory();

  function handleClick() {
    history.push(`/blog/${_id}`);
  }

  return (
    <div className="col-md-4 mt-4 col-sm-6 mb-3">
      <div onClick={handleClick} className="card" style={{ width: "22rem" }}>
        <img style={{ height: '200px' }} src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
        </div>

        <div className="card-body d-flex">
          <p className="me-auto">{date}</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCarrd;
