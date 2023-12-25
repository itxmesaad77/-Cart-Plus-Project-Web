import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

// Action types for the reducer
const UPDATE_ADDRESS_FIELD = 'UPDATE_ADDRESS_FIELD';

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_FIELD:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};

const AddressForm = () => {
  const navigate = useNavigate();

  // Initial state for the address form
  const initialState = {
    street: '',
    city: '',
    state: '',
    zipCode: '',
  };

  const [address, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: UPDATE_ADDRESS_FIELD,
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any validation logic here before submitting
    alert('Your Address is submitted');
    navigate('/PaymentForm');
  };

  return (
    <form onSubmit={handleSubmit} className='mt-5 container-fluid' style={{ marginTop: '50px' }}>
      <h2>Address Form:</h2>
      <label>
        Street:
        <input type="text" name="street" value={address.street} onChange={handleChange} required />
      </label>
      <br />
      <label>
        City:
        <input type="text" name="city" value={address.city} onChange={handleChange} required />
      </label>
      <br />
      <label>
        State:
        <input type="text" name="state" value={address.state} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Zip Code:
        <input type="text" name="zipCode" value={address.zipCode} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit Address</button>
    </form>
  );
};

export default AddressForm;
