// Filter.js
import React from 'react';
import SearchCartBar from './SearchCartBar';
import { useCartContext } from './CartContext';
import taskData from './Taskdata';
import './ProductGrid.css';
import { getImageUrl } from './Utilities';

const SET_PRICE_FILTER = 'SET_PRICE_FILTER';
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
const SET_CATEGORY_OPTIONS = 'SET_CATEGORY_OPTIONS';
const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

const filterReducer = (state, action) => {
  switch (action.type) {
    case SET_PRICE_FILTER:
      return { ...state, priceFilter: action.payload };
    case SET_CATEGORY_FILTER:
      return { ...state, categoryFilter: action.payload };
    case SET_CATEGORY_OPTIONS:
      return { ...state, categoryOptions: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

const initialState = {
  priceFilter: 'All',
  categoryFilter: 'All',
  categoryOptions: [],
  searchTerm: '',
};

export default function Filter() {
  const { cartState, addToCart } = useCartContext();
  const [filterState, filterDispatch] = React.useReducer(filterReducer, initialState);

  React.useEffect(() => {
    const uniqueCategories = [...new Set(taskData.map(product => product.category))];
    filterDispatch({ type: SET_CATEGORY_OPTIONS, payload: ['All', ...uniqueCategories] });
  }, []);

  const handlePriceChange = (e) => {
    filterDispatch({ type: SET_PRICE_FILTER, payload: e.target.value });
  };

  const handleCategoryChange = (e) => {
    filterDispatch({ type: SET_CATEGORY_FILTER, payload: e.target.value });
  };

  const handleSearchChange = (e) => {
    filterDispatch({ type: SET_SEARCH_TERM, payload: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can add search submission logic here if needed
  };

  const applyFilters = () => {
    let filteredProducts = [...taskData];

    // Apply search filter
    if (filterState.searchTerm.trim() !== '') {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(filterState.searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (filterState.categoryFilter !== 'All') {
      filteredProducts = filteredProducts.filter(product => product.category === filterState.categoryFilter);
    }

    // Apply price filter
    if (filterState.priceFilter === 'HighToLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (filterState.priceFilter === 'LowToHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  return (
    <div className='container-fluid mt-5'>
      <SearchCartBar cartItems={cartState.cartItems} addToCart={addToCart} />

      <div className="search-bar-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search by name..."
            value={filterState.searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange} value={filterState.categoryFilter}>
          {filterState.categoryOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <select id="price" onChange={handlePriceChange} value={filterState.priceFilter}>
          <option value="All">All</option>
          <option value="HighToLow">Highest to Lowest</option>
          <option value="LowToHigh">Lowest to Highest</option>
        </select>
      </div>

      <h2 className='text-center m-5'> Products</h2>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <img src={getImageUrl(product)} alt={`Product ${product.id}`} style={{ maxWidth: '100%' }} />
            <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
