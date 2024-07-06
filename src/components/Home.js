import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth';
import AddProductForm from './AddProductForm';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const removeProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="home-container">
      <div className="header">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="content">
        <div className="sidebar">
          <AddProductForm products={products} setProducts={setProducts} />
        </div>
        <div className="main">
          <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
          <ProductList products={filteredProducts.length ? filteredProducts : products} removeProduct={removeProduct} />
        </div>
      </div>
    </div>
  );
};

export default Home;
