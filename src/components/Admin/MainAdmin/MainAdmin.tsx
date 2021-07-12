import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import AdminSidebar from '../Sidebar/AdminSidebar';
import AddBlog from '../AddBlog/AddBlog';
import DeletBlog from '../DeletBlog/DeletBlog';
import AddProduct from '../AddProduct/AddProduct';
import RemoveProduct from '../RemoveProduct/RemoveProduct';

// MODAL INTERFACE 
export interface IModalPropd {
    openModal: () => void,
    modalIsOpen: boolean,
    closeModal: () => void
}

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

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
        <div className='row' style={{ marginBottom: '400px' }}>

            <Router>
                <div className='col-md-3' style={{ backgroundColor: 'gray' }}>
                    <AdminSidebar openModal={openModal} />

                </div>

                <div className='col-md-9'>
                    <switch>
                        <Route path='/addBlog'>
                            <AddBlog openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} />
                        </Route>
                        <Route path='/deletBlog'>
                            <DeletBlog openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} />
                        </Route>
                        <Route path='/addProduct'>
                            <AddProduct openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} />
                        </Route>
                        <Route path='/deletProduct'>
                            <RemoveProduct openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} />
                        </Route>
                    </switch>
                </div>
            </Router>



        </div>
    );
};

export default MainAdmin;