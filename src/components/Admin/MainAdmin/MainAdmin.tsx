import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import DeletBlog from '../DeletBlog/DeletBlog';

const MainAdmin = () => {
    return (
        <div>
            <h2>This is admin</h2>
            <AddBlog />
            <DeletBlog />
        </div>
    );
};

export default MainAdmin;