import React from 'react';
import {

    Link,

} from "react-router-dom";
interface Iprops {
    openModal: () => void
}
const AdminSidebar: React.FC<Iprops> = ({ openModal }) => {
    return (
        <div >
            <button onClick={openModal}>
                <Link to="/addBlog">Add Blog</Link>
            </button> <br />
            <button onClick={openModal}>
                <Link to="/deletBlog">Delet Blog</Link>
            </button>
            <button onClick={openModal}>
                <Link to="/addProduct">Add Product</Link>
            </button>
            <button onClick={openModal}>
                <Link to="/deletProduct">Delet Product</Link>
            </button>
        </div>
    );
};

export default AdminSidebar;