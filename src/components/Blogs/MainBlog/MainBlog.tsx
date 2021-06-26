import React from 'react';
import BlogCarrd from './../BlogCarrd/BlogCarrd';
// import BlogComments from './../BlogComments/BlogComments';
// import SideBlogs from './../SideBlogs/SideBlogs';
// import DetailBlog from '../DetailBlog/DetailBlog'
import img1 from '../../../Images/service-1.png'

export interface blogCardDataType {

    title: string;
    date: string;
    discription: string;
    id: number

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
        { id: 1, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { id: 2, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { id: 3, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { id: 4, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { id: 5, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
        { id: 6, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,' },
    ]
    const fakeSideBlog = [
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img1, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },

    ]

    return (
        <>

            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    {
                        fakeBlog.map(dt => <BlogCarrd dt={dt} />)
                    }
                </div>
            </div>

        </>
    );
};

export default MainBlog;