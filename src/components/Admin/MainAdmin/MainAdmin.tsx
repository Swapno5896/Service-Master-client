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
    return (
        <div className='row'>

            <Router>

                <AdminSidebar />

                <switch>
                    <Route path='/addBlog'>
                        <AddBlog />
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