import React, { useState } from 'react';
import Modal from 'react-modal';
import { IModalPropd, customStyles } from '../../../Pages/MainAdmin/MainAdmin'
import './AddBlog.css'

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const AddBlog: React.FC<IModalPropd> = ({ openModal, modalIsOpen, closeModal }) => {


    const [blog, setBlog] = useState({
        title: '',
        date: '',
        img: '',
        discription: '',
    });
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {

        setBlog({
            ...blog, [event.target.name]: event.target.value
        })
    }

    const handlSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log(blog)
        // console.log(blog);
        // fetch(`http://localhost:9000/addBlog`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(blog),
        // });


    }

    return (
        <>


            {/* modal */}

            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >




                <form className='row addBlogForm'>
                    <div className="form-group col-md-6 ">
                        <label className='addblog-lable'>Title : </label>
                        <input className='blog-input' type="text" onBlur={handleBlur} placeholder='Add Title ' name="title" id="" />
                    </div>
                    <div className="form-group col-md-5">
                        <label className='addblog-lable'>Content : </label>
                        <input className='blog-input' type="text" onBlur={handleBlur} placeholder='Add Blog Content ' name="discription" id="" />
                    </div>
                    <div className="form-group col-md-5">
                        <label className='addblog-lable'>Image Url : </label>
                        <input className='blog-input' type="text" onBlur={handleBlur} placeholder='Image Url ' name="img" id="" />
                    </div>


                </form>

                <input className='ms-auto' onClick={handlSubmit} type="submit" name="" id="" />

            </Modal>
        </>
    );
};

export default AddBlog;