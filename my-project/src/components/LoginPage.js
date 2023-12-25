import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import './loginpage.css';

// Action types for the reducer
const UPDATE_FIELD = 'UPDATE_FIELD';
const SET_ERROR = 'SET_ERROR';

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, [action.payload.field]: action.payload.value };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const LoginPage = () => {
  const navigate = useNavigate();

  // Initial state for the login form
  const initialState = {
    username: '',
    password: '',
    error: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation (you might want to use a more robust solution)
    if (!state.username || !state.password) {
      dispatch({ type: SET_ERROR, payload: 'Please enter both username and password.' });
      return;
    }

    // Simulate authentication (replace with your actual authentication logic)
    if (state.username === 'itxme@gmail.com' && state.password === '12345678') {
      // Successful login, redirect or set authentication state
       // Replace with your actual login logic

      // Clear the username and password fields
      dispatch({ type: UPDATE_FIELD, payload: { field: 'username', value: '' } });
      dispatch({ type: UPDATE_FIELD, payload: { field: 'password', value: '' } });

      // Navigate to the home page
      navigate('/');
    } else {
      dispatch({ type: SET_ERROR, payload: 'Invalid username or password.' });
    }
  };

  return (
    <div className='container-fluid mt-5 login'>
      <h2>Login</h2>
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={state.username}
          onChange={(e) =>
            dispatch({ type: UPDATE_FIELD, payload: { field: 'username', value: e.target.value } })
          }
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: UPDATE_FIELD, payload: { field: 'password', value: e.target.value } })
          }
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
