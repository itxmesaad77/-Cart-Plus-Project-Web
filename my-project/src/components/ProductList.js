// MaleProducts.js
import React, { useState, useEffect } from 'react';
import taskData from './Taskdata'; // Adjust the path accordingly
import './ProductGrid.css';

export default function MaleProducts() {
  const [priceFilter, setPriceFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    // Extract unique categories from taskData
    const uniqueCategories = [...new Set(taskData.map(product => product.category))];
    setCategoryOptions(['All', ...uniqueCategories]);
  }, []);

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const applyFilters = () => {
    let filteredProducts = [...taskData];

    // Apply category filter
    if (categoryFilter !== 'All') {
      filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }

    // Apply price filter
    if (priceFilter === 'HighToLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (priceFilter === 'LowToHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  return (
    <div className='container-fluid mt-5'>
      <h2>Filter</h2>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange} value={categoryFilter}>
          {categoryOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <select id="price" onChange={handlePriceChange} value={priceFilter}>
          <option value="All">All</option>
          <option value="HighToLow">Highest to Lowest</option>
          <option value="LowToHigh">Lowest to Highest</option>
        </select>
      </div>
      <div className='container-fluid'>
        <h2 className='text-center m-5'>Male Products</h2>
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>{product.description}</p>
              <img src={product.imgSrc} alt={`Product ${product.id}`} style={{ maxWidth: '100%' }} />
              <button>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
