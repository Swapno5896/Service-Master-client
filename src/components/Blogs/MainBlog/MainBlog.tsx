import React from 'react';
import BlogCarrd from './../BlogCarrd/BlogCarrd';
import BlogComments from './../BlogComments/BlogComments';
import SideBlogs from './../SideBlogs/SideBlogs';
import DetailBlog from '../DetailBlog/DetailBlog'
import img1 from '../../../Images/service-1.png'

export interface blogCardDataType {

    title: string;
    date: string;
    discription: string;

}

export interface SideBlogDataType {

    authorName: string;
    authorImg: string;
    title: string;
    description: string;
    date: string;

}
const MainBlog = () => {
    const fakeBlog = [
        { title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
    ]
    const fakeSideBlog = [
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },

    ]

    return (
        <div>
            <h2>this is main blog</h2>
            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    {
                        fakeBlog.map(dt => <BlogCarrd dt={dt} />)
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    <div className="col-md-8">
                        <DetailBlog />
                        <BlogComments></BlogComments>
                    </div>
                    <div className="col-md-4">
                        {
                            fakeSideBlog.map(dt => <SideBlogs dt={dt} />)
                        }

                    </div>
                </div>   </div>
        </div>
    );
};

export default MainBlog;