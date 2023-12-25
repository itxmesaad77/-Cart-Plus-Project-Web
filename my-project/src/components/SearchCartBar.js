// SearchCartBar.js
import React, { useReducer } from 'react';
import ShoppingCart from './ShoppingCart'; // Adjust the path accordingly

// Action types for the reducer
const TOGGLE_CART = 'TOGGLE_CART';

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};

const SearchCartBar = ({ cartItems, addToCart }) => {
  const [state, dispatch] = useReducer(reducer, { isCartOpen: false });

  const toggleCart = () => {
    dispatch({ type: TOGGLE_CART });
  };

  return (
    <div className="search-cart-bar mt-5">
      <button className="cart-icon" onClick={toggleCart}>
        🛒 {cartItems && cartItems.length > 0 && `(${cartItems.length})`}
      </button>
      {state.isCartOpen && <ShoppingCart cartItems={cartItems} onClose={toggleCart} />}
    </div>
  );
};

export default SearchCartBar;
