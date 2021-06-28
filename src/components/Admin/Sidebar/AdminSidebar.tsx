import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
interface Iprops {
    openModal: () => void
}
const AdminSidebar: React.FC<Iprops> = ({ openModal }) => {
    return (
        <div >
            <button onClick={openModal}>
                <Link to="/addBlog">Add Blog</Link>
            </button>
            <button>
                <Link to="/deletBlog">Delet Blog</Link>
            </button>

        </div>
    );
};

export default AdminSidebar;