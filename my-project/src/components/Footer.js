// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './foot.css';
import img from './hv.png';

const Footer = () => {
  return (
    <div className='text-text-center '>
      <footer className='text-center me-5'>
        <img src={img} alt="" width="150px"/>
        <h2 className='me-5'>Cart Plus</h2>
        <Link to="/About" className='m-5'>About Us</Link>
        <Link to="/contact" className='m-5'>Contact Us</Link>
        <Link to="/terms" className='m-5'>Terms and Conditions</Link>
      </footer >
    </div>
  );
}

export default Footer;
