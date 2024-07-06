import React, { useState } from 'react';

const SearchBar = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery === '') {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Products" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
