import React, { useState } from 'react';


const AddProductForm = ({ products, setProducts }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleAddProduct = () => {
    if (!productName) {
      setError('Product name is required');
      return;
    }

    if (!price || isNaN(price) || Number(price) <= 0) {
      setError('Valid price is required');
      return;
    }

    const isDuplicate = products.some(product => product.name === productName);

    if (isDuplicate) {
      setError('Product already exists');
      return;
    }

    setProducts([...products, { name: productName, price }]);
    setProductName('');
    setPrice('');
    setError('');
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      {error && <p className="error">{error}</p>}
      <input 
        type="text" 
        placeholder="Product Name" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProductForm;
