import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css'

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/thank-you/${product.id}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleViewProduct}>View Product</button>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
