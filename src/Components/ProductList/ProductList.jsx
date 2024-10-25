import React, { useEffect, useState } from 'react';
import './ProductList.css';
import ProductModal from './ProductModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleViewDetails(product)} className="view-details-btn">
              View Details
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProductList;
