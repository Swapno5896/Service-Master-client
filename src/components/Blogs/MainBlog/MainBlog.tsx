import React from 'react';
import BlogCarrd from './../BlogCarrd/BlogCarrd';
import BlogComments from './../BlogComments/BlogComments';
import SideBlogs from './../SideBlogs/SideBlogs';
import DetailBlog from '../DetailBlog/DetailBlog'

const MainBlog = () => {
    const fakeBlog = [
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
    ]
    const fakeSideBlog = [
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
    ]
    return (
        <div>
            <h2>this is main blog</h2>
            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    {
                        fakeBlog.map(dt => <BlogCarrd />)
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
                            fakeSideBlog.map(dt => <SideBlogs></SideBlogs>)
                        }

                    </div>
                </div>   </div>
        </div>
    );
};

export default MainBlog;