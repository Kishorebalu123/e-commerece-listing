import React from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../mockData';

import './index.css'

const ThankYouPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === Number(id));

  return (
    <div className="thank-you-page">
      <h1>Thank You for your interest in {product.name}!</h1>
      <p>We appreciate your interest. Please explore more products on our site!</p>
    </div>
  );
};

export default ThankYouPage;
