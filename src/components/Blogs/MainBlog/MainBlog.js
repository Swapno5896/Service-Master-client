import React, { useEffect } from "react";
import BlogCarrd from "../BlogCarrd/BlogCarrd";
// import BlogComments from './../BlogComments/BlogComments';
// import SideBlogs from './../SideBlogs/SideBlogs';
// import DetailBlog from '../DetailBlog/DetailBlog'
import img1 from "../../../Images/service-1.png";
// import { useState } from "react";
import { connect } from "react-redux";

import { loadBlogAsync } from "../../../redux/action/action";
// export interface blogCardDataType {

//     title: string;
//     date: string;
//     discription: string;
//     _id: string;
//     img: string;

// }

// export interface SideBlogDataType {

//     authorName: string;
//     authorImg: string;
//     title: string;
//     description: string;
//     date: string;

// }

// interface Iprops {
//     Blog: blogCardDataType[];
//     idLoading: boolean
// }
const mapStateToProps = (state) => {
  return {
    Blog: state.blog.blog,
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = {
  loadBlogAsync,
};
const MainBlog = (props) => {
  console.log("loading info", props.isLoading.isLoading);

  // const [blogs, setBlogs] = useState([])
  useEffect(() => {
    props.loadBlogAsync();
  }, []);

  const uploadBlog = () => {
    fetch('http://localhost:9000/addBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fakeBlog),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const fakeBlog = [
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post15.jpg
      `, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-12.jpg
      `, title: 'Customer Connections', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-17-800x600.jpg
      `, title: 'One Call Does It All', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-7-800x600.jpg
      `, title: 'Make Moving Easy', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-8.jpg
      `, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-6.jpg
      `, title: 'Outdoor Space', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
    },
  ]

  // const fakeSideBlog = [
  //     { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
  //     { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
  //     { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
  //     { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },

  // ]
  if (props.isloading?.isLoading === true) {
    return (
      <div
        style={{ height: "700px" }}
        class="d-flex justify-content-center align-items-center"
      >
        <div
          style={{ width: "3rem", height: "3rem" }}
          class="spinner-border"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <button onClick={uploadBlog}>upload blog</button>

        <div className="row w-75">
          {props.Blog?.map((dt) => (
            <BlogCarrd dt={dt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBlog);
