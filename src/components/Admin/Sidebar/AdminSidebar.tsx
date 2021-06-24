import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
const AdminSidebar = () => {
    return (
        <div >
            <Link to="/addBlog">Add Blog</Link>
            <Link to="/deletBlog">Delet Blog</Link>
        </div>
    );
};

export default AdminSidebar;