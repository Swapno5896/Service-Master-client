import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../../Images/service-1.png'
import BlogComments from './../BlogComments/BlogComments';
import SideBlogs from './../SideBlogs/SideBlogs';


const DetailBlog = () => {
    const { id } = useParams<any>();
    console.log('from detail blog, our id is ', id);

    const fakeSideBlog = [
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },

    ]
    return (


        <div className='d-flex justify-content-center'>
            <div className="row w-75">
                <div className="col-md-8">
                    <div>
                        <img src={img1} className="img-fluid" alt="..."></img>
                        <h2>Title is detail blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit eum sint aliquid ex, voluptates similique eligendi esse expedita sed dicta praesentium reprehenderit deleniti atque nihil officia laboriosam, omnis quo, maxime laudantium? Sequi, eaque alias eveniet dolor, quos illum numquam quae perspiciatis ad possimus porro a doloribus placeat facilis id.</p>
                    </div>
                    <BlogComments></BlogComments>
                </div>
                <div className="col-md-4">
                    {
                        fakeSideBlog.map(dt => <SideBlogs dt={dt} />)
                    }

                </div>
            </div>   </div>

    );
};

export default DetailBlog;