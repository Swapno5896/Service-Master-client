import React, { useState } from 'react';
import Modal from 'react-modal';
interface Iprops {
    openModal: () => void,
    modalIsOpen: boolean,
    closeModal: () => void
}
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const AddBlog: React.FC<Iprops> = ({ openModal, modalIsOpen, closeModal }) => {


    const [blog, setBlog] = useState({ title: '', Content: '', imgFile: Image });
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {

        setBlog({
            ...blog, [event.target.name]: event.target.value
        })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.value[0]
        console.log(newFile);

    }
    const handlSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log(blog);
        fetch(`http://localhost:9000/addBlog`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        });
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


                <form className='row'>
                    <div className="form-group col-md-6">
                        <label >Title</label>
                        <input type="text" onBlur={handleBlur} placeholder='Add Title ' name="title" id="" />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Content</label>
                        <input type="text" onBlur={handleBlur} placeholder='Add Blog Content ' name="Content" id="" />
                    </div>
                    <div className="form-group col-md-6">
                        <label >File</label>
                        <input type="file" onChange={handleChange} name="imgFile" id="" />
                    </div>
                    <input className='ms-auto' onClick={handlSubmit} type="submit" name="" id="" />

                </form>
            </Modal>
        </>
    );
};

export default AddBlog;