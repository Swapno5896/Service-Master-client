import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import AdminSidebar from '../Sidebar/AdminSidebar';
import AddBlog from '../AddBlog/AddBlog';
import DeletBlog from '../DeletBlog/DeletBlog';

const MainAdmin = () => {

    // modal

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='row'>

            <Router>

                <AdminSidebar openModal={openModal} />

                <switch>
                    <Route path='/addBlog'>
                        <AddBlog openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} />
                    </Route>
                    <Route path='/deletBlog'>
                        <DeletBlog />
                    </Route>
                </switch>
            </Router>



        </div>
    );
};

export default MainAdmin;