import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { IModalPropd, customStyles } from '../../../Pages/MainAdmin/MainAdmin'

interface Iblog {
  title: string;
  _id: number
}
const DeletBlog: React.FC<IModalPropd> = ({ openModal, modalIsOpen, closeModal }) => {
  const [blog, setBlogs] = useState<Iblog[]>([]);
  useEffect(() => {
    fetch(`https://murmuring-fjord-79691.herokuapp.com/getBlog`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  // modal 
  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //   },
  // };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
  const handleRemove = (id: number) => {
    fetch(`https://cryptic-chamber-61162.herokuapp.com/deletBlog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      {/*  */}
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >



        {blog.map((dt) => (
          <div>
            <p>{dt.title}</p>
            <button onClick={() => handleRemove(dt._id)}>Remove</button>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default DeletBlog;
