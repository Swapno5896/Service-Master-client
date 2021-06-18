import React from 'react';

const BlogComments = () => {
    return (
        <div>

            <div className="row">
                <h2>Leave A Comment</h2>
                <div className="col-md-4"> <input type="text" placeholder='Name' /></div>
                <div className="col-md-4"> <input type="text" placeholder='Email' /></div>
                <div className="col-md-4"> <input type="text" placeholder='Website' /></div>
                <div className="col-md-12">
                    <textarea placeholder='Comment' name="" id=""></textarea>
                </div>

            </div>
            <button>Submit Comment</button>
        </div>
    );
};

export default BlogComments;