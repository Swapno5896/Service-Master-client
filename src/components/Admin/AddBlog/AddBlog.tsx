import React, { useState } from 'react';

const AddBlog = () => {
    const [blog, setBlog] = useState({ title: '', Content: '', imgFile: Image });
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {

        setBlog({
            ...blog, [event.target.name]: event.target.value
        })
    }
    const handlSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log(blog);

    }

    return (
        <div>
            <h3>Add blog</h3>
            <input type="text" onBlur={handleBlur} placeholder='Add Title ' name="title" id="" />
            <input type="text" onBlur={handleBlur} placeholder='Add Blog Content ' name="Content" id="" />
            <input type="file" onBlur={handleBlur} name="imgFile" id="" />
            <input onClick={handlSubmit} type="submit" name="" id="" />
        </div>
    );
};

export default AddBlog;