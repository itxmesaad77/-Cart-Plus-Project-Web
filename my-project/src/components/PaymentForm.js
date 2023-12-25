import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

// Action types for the reducer
const SET_FIELD = 'SET_FIELD';

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case SET_FIELD:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const initialState = {
  cardType: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
};

const PaymentForm = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: SET_FIELD, field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!state.cardType || !state.cardNumber || !state.expiryDate || !state.cvv) {
      alert('Please fill in all fields.');
      return;
    }

    // Additional validation logic can be added here

    // Submit the payment information
    alert('You have successfully placed the order');
    navigate('/'); // Redirect to home page after successful submission
  };

  return (
    <form onSubmit={handleSubmit} className='mt-5 container-fluid' style={{ marginTop: '50px' }}>
      <h2>Payment Form:</h2>
      <label>
        Card Type:
        <select name="cardType" value={state.cardType} onChange={handleChange}>
          <option value="">Select Card Type</option>
          {['Visa', 'MasterCard', 'American Express', 'Discover'].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Card Number:
        <input type="text" name="cardNumber" value={state.cardNumber} onChange={handleChange} />
      </label>
      <br />
      <label>
        Expiry Date:
        <input type="text" name="expiryDate" value={state.expiryDate} onChange={handleChange} placeholder="MM/YYYY" />
      </label>
      <br />
      <label>
        CVV:
        <input type="text" name="cvv" value={state.cvv} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
