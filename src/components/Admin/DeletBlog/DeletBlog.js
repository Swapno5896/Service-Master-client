import React, { useEffect, useState } from "react";

const DeletBlog = () => {
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://cryptic-chamber-61162.herokuapp.com/getBlog`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  const handleRemove = (id) => {
    fetch(`https://cryptic-chamber-61162.herokuapp.com/deletBlog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      {blog.map((dt) => (
        <div>
          <p>{dt.title}</p>
          <button onClick={() => handleRemove(dt._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DeletBlog;
