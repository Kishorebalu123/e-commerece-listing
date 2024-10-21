import React from 'react';
import Modal from 'react-modal';

import './index.css'

const AddToCartModal = ({ product, isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add to Cart">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => onConfirm(product)}>Confirm Add to Cart</button>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default AddToCartModal;
