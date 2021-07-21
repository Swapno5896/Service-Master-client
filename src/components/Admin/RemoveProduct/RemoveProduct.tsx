import React from 'react';
import Modal from 'react-modal';
import { IModalPropd, customStyles } from '../../../Pages/MainAdmin/MainAdmin'

const RemoveProduct: React.FC<IModalPropd> = ({ openModal, modalIsOpen, closeModal }) => {
 return (
  <div>

   <Modal
    isOpen={modalIsOpen}

    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
   >



    <h3>Remove product</h3>
   </Modal>
  </div>
 );
};

export default RemoveProduct;