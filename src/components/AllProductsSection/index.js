import React, { useState } from 'react';
import './index.css';
import Header from '../Header';
import ProductCard from '../ProductCard';
import Pagination from '../Pagination';
import AddToCartModal from '../AddToCartModal';
import { mockProducts } from '../mockData';

const AllProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState(''); // New state for search input

  const productsPerPage = 6;

  // Filter products based on the search input (case-insensitive search)
  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const confirmAddToCart = () => {
    // Handle adding product to cart here
    closeModal();
  };

  const handleSearch = (value) => {
    setSearchText(value); // Update the search text based on user input
    setCurrentPage(1);    // Reset to first page on search
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="product-list">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No products found.</p>  // Show a message if no products match the search
        )}
      </div>
      {filteredProducts.length > productsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmAddToCart}
        />
      )}
    </div>
  );
};

export default AllProductsSection;
