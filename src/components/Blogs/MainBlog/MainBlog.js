import React, { useEffect } from "react";
import BlogCarrd from "../BlogCarrd/BlogCarrd";
// import BlogComments from './../BlogComments/BlogComments';
// import SideBlogs from './../SideBlogs/SideBlogs';
// import DetailBlog from '../DetailBlog/DetailBlog'
import img1 from "../../../Images/service-1.png";
// import { useState } from "react";
import { connect } from "react-redux";
import ShowLoading from '../../ShowLoading/ShowLoading'
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
  console.log("from blog", props);


  useEffect(() => {
    props.loadBlogAsync();
  }, []);




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
