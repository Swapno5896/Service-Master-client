import React from 'react';
import Modal from 'react-modal';
import { IModalPropd, customStyles } from '../MainAdmin/MainAdmin'
Modal.setAppElement('#root');
const AddProduct: React.FC<IModalPropd> = ({ openModal, modalIsOpen, closeModal }) => {
 return (
  <div>
   <Modal
    isOpen={modalIsOpen}

    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
   >



    <h3>add prodcut</h3>
   </Modal>

  </div>
 );
};

export default AddProduct;