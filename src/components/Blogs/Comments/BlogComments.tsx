import React, { useState } from 'react';

const BlogComments = () => {
    const [comment, setComment] = useState({})
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {

        setComment({
            ...comment, [event.target.name]: event.target.value
        })
    }

    const handlSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(comment)
        // console.log(blog);
        // fetch(`http://localhost:9000/addBlog`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(blog),
        // });


    }
    return (
        <div>

            <div className="row">
                <h2>Leave A Comment</h2>
                <div className="col-md-4"> <input onBlur={handleBlur} type="text" placeholder='Name' name='name' /></div>
                <div className="col-md-4"> <input onBlur={handleBlur} type="text" placeholder='Email' name='email' /></div>
                <div className="col-md-4"> <input onBlur={handleBlur} type="text" placeholder='Website' name='website' /></div>
                <div className="col-md-12">
                    <textarea placeholder='Comment' name="" id=""></textarea>
                </div>

            </div>
            <button onClick={handlSubmit}>Submit Comment</button>
        </div>
    );
};

export default BlogComments;