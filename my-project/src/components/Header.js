import React from "react";
import { Link } from "react-router-dom";
import "./head.css";

export default function Header() {
  return (
    <header>
      <nav className="d-flex justify-content-around align-items-center">
        <div className="left">CART PLUS</div>
        <div className="right">
          <ul className="d-flex">
          <Link to="/" className='m-5'>Home</Link>
          <Link to="/men" className='m-5'>Mens</Link>
          <Link to="/Women" className='m-5'>Women</Link>
            <Link to="/Kids" className='m-5'>Kids</Link>
            <Link to="/contact" className='m-5'>Contact Us</Link>
            <Link to="/login" className='m-5' >Sign in </Link>
          </ul>
        </div>
        
      </nav>
    </header>
  );
}
