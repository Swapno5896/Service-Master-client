import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogComments from '../Comments/BlogComments';
import SideBlogs from './../SideBlogs/SideBlogs';

// import img from '../../../Images/service-1.png'

const DetailBlog = () => {
    const { id } = useParams<any>();
    // console.log('from detail blog, our id is ', id);
    const [detailBlog, SetSingleBlog] = useState([{
        img: '',
        title: '',
        discription: '',
        date: ''
    }])
    useEffect(() => {
        fetch(`https://murmuring-fjord-79691.herokuapp.com/getBlog/${id}`)
            .then((res) => res.json())
            .then((result) => SetSingleBlog(result));
    }, [id])

    // console.log(detailBlog[0]);

    const { img, date, discription, title } = detailBlog[0]
    // console.log(img)


    const fakeSideBlog = [
        { authorName: 'Olivia Rose', authorImg: img, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },
        { authorName: 'Olivia Rose', authorImg: img, title: 'Service At Home', description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolorum quod saepe ipsam voluptatibus', date: 'March 22, 2017' },

    ]
    return (


        <div className='d-flex justify-content-center'>
            <div className="row w-75">
                <div className="col-md-8">
                    <h2>detail blog</h2>
                    <div>
                        <img src={img} className="img-fluid" alt="..."></img>
                        <h2>{title}</h2>
                        <p>{discription}</p>                    </div>
                    <BlogComments></BlogComments>
                </div>
                <div className="col-md-4" style={{ height: '680px', overflow: 'scroll' }}>
                    {
                        fakeSideBlog.map(dt => <SideBlogs dt={dt} />)
                    }

                </div>
            </div>   </div>

    );
};

export default DetailBlog;