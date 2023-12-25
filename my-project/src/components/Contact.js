import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './cont.css';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const ContactUs = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add logic for form submission (e.g., sending data to a server)
    dispatch({ type: 'RESET_FORM' });
    // Use a more user-friendly notification system
    alert('Thanks for contacting us!');
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  return (
    <div className="mt-5 container-fluid">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? We'd love to hear from you!</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Wick"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="xyz@gmail.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your text"
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
