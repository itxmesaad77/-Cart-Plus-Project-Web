import React, {  useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

// Action types for the reducer
const SET_LOCAL_CART_ITEMS = 'SET_LOCAL_CART_ITEMS';
const SET_TOTAL_AMOUNT = 'SET_TOTAL_AMOUNT';
const ADJUST_QUANTITY = 'ADJUST_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOCAL_CART_ITEMS:
      return { ...state, localCartItems: action.payload };
    case SET_TOTAL_AMOUNT:
      return { ...state, totalAmount: action.payload };
    case ADJUST_QUANTITY:
      return { ...state, localCartItems: action.payload };
    case REMOVE_FROM_CART:
      return { ...state, localCartItems: action.payload };
    default:
      return state;
  }
};

const ShoppingCart = ({ cartItems, onClose }) => {
  const [state, dispatch] = useReducer(reducer, {
    localCartItems: [],
    totalAmount: 0,
  });
  const navigate = useNavigate();

  const checkout = () => {
    if (state.totalAmount > 0) {
      navigate('/AddressForm');
    } else {
      alert('Your Cart is empty');
    }
  };

  useEffect(() => {
    // Initialize the localCartItems state with unique products and total quantity
    const uniqueProducts = [];
    const totalQuantityMap = new Map();

    cartItems.forEach((item) => {
      const existingItem = uniqueProducts.find((uniqueItem) => uniqueItem.id === item.id);

      if (existingItem) {
        // If the product already exists in uniqueProducts, update the total quantity
        totalQuantityMap.set(item.id, totalQuantityMap.get(item.id) + 1);
      } else {
        // If the product is not in uniqueProducts, add it and set the total quantity to 1
        uniqueProducts.push({ ...item, quantity: 1 });
        totalQuantityMap.set(item.id, 1);
      }
    });

    // Update the quantity in the localCartItems state
    const updatedCart = uniqueProducts.map((item) => ({
      ...item,
      quantity: totalQuantityMap.get(item.id) || 1,
    }));

    dispatch({ type: SET_LOCAL_CART_ITEMS, payload: updatedCart });
  }, [cartItems]);

  useEffect(() => {
    // Calculate the total amount whenever localCartItems change
    const calculatedTotal = state.localCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    dispatch({ type: SET_TOTAL_AMOUNT, payload: calculatedTotal });
  }, [state.localCartItems]);

  const handleAdjustQuantity = (productId, newQuantity) => {
    // Implement your logic to adjust the quantity
    console.log(`Adjusting quantity for product ${productId} to ${newQuantity}`);
  };

  const adjustQuantity = (productId, newQuantity) => {
    // Ensure that the quantity is not less than 0
    newQuantity = Math.max(0, newQuantity);

    // Update the quantity in the localCartItems state
    const updatedCart = state.localCartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    // Call the adjustQuantity function passed from the parent component
    handleAdjustQuantity(productId, newQuantity);

    // Update the localCartItems state
    dispatch({ type: ADJUST_QUANTITY, payload: updatedCart });
  };

  const removeFromCart = (productId) => {
    // Remove the item from localCartItems
    const updatedCart = state.localCartItems.filter((item) => item.id !== productId);
    dispatch({ type: REMOVE_FROM_CART, payload: updatedCart });
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul className='product-grid'>
        {state.localCartItems.map((item) => (
          <div className=' border-white product-card' key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {Math.max(0, item.quantity)}</p>
            <div>
              <button onClick={() => adjustQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{Math.max(0, item.quantity)}</span>
              <button onClick={() => adjustQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)} className='p-2 px-2 '>X</button>
            </div>
          </div>
        ))}
      </ul>
      <p>Total Amount: ${state.totalAmount.toFixed(2)}</p>
      <button onClick={onClose}>Close Cart</button>
      <button onClick={checkout}>Check Out</button>
    </div>
  );
};

export default ShoppingCart;
