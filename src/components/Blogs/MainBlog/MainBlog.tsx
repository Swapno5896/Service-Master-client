import React, { useEffect } from 'react';
import BlogCarrd from './../BlogCarrd/BlogCarrd';
// import BlogComments from './../BlogComments/BlogComments';
// import SideBlogs from './../SideBlogs/SideBlogs';
// import DetailBlog from '../DetailBlog/DetailBlog'
import img1 from '../../../Images/service-1.png'
import { useState } from 'react';

export interface blogCardDataType {

    title: string;
    date: string;
    discription: string;
    _id: number;


}

export interface SideBlogDataType {

    authorName: string;
    authorImg: string;
    title: string;
    description: string;
    date: string;

}
const MainBlog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`https://cryptic-chamber-61162.herokuapp.com/getBlog`)
            .then((res) => res.json())
            .then((data) => {

                setBlogs(data);
            });
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

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    {
                        blogs.map(dt => <BlogCarrd dt={dt} />)
                    }
                </div>
            </div>

        </>
    );
};

export default MainBlog;