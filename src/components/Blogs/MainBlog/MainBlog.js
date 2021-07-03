import React, { useEffect } from "react";
import BlogCarrd from "../BlogCarrd/BlogCarrd";
// import BlogComments from './../BlogComments/BlogComments';
// import SideBlogs from './../SideBlogs/SideBlogs';
// import DetailBlog from '../DetailBlog/DetailBlog'
import img1 from "../../../Images/service-1.png";
import { useState } from "react";
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
  // const fakeBlog = [
  //     { img: 'https://i.ibb.co/9wHK9kb/Getty-Images-974683580.jpg', title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
  //     { img: 'https://i.ibb.co/9wHK9kb/Getty-Images-974683580.jpg', title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
  //     { img: 'https://i.ibb.co/9wHK9kb/Getty-Images-974683580.jpg', title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
  //     { img: 'https://i.ibb.co/9wHK9kb/Getty-Images-974683580.jpg', title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
  //     { img: 'https://i.ibb.co/9wHK9kb/Getty-Images-974683580.jpg', title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
  //     { img: 'https://i.ibb.co/9wHK9kb/Getty-Images-974683580.jpg', title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
  // ]
  // const fakeSideBlog = [
  //     { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
  //     { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
  //     { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
  //     { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },

  // ]
  if (props.isloading?.isLoading == true) {
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
