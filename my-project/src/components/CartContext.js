import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Action types for the reducer
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

// Reducer function to handle state changes
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};


const CartContext = createContext();

// Custom hook to use the CartContext
export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cartItems: [] });

  useEffect(() => {
    // Additional logic can be added here if needed
  }, []); // Add dependencies if necessary

  const addToCart = (product) => {
    cartDispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    cartDispatch({ type: REMOVE_FROM_CART, payload: productId });
  };

  const clearCart = () => {
    cartDispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
