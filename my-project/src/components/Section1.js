import React, { useEffect, useRef } from "react";
import "./sec1.css";
import img from "./hv.png";
import { useNavigate } from "react-router-dom";
export default function Section1() {
  const elementRef = useRef(null);
const navigate= useNavigate();
 const shopnow=()=>{
  navigate('/filter');
 }
  useEffect(() => {
    const Typed = window.Typed;
    if (Typed && elementRef.current) {
      const options = {
        strings: ["Welcome to CART PLUS! Explore the latest trends"],
        typeSpeed: 50,
        cursorChar: "|", // Set the cursor character
      };

      const typed = new Typed(elementRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="first d-flex justify-content-around align-items-center">
      <div className="leftsection">
        <span ref={elementRef} className="Purple"></span>
        <br /><button className="btn-shop"  onClick={shopnow}> Shop Now </button>
      </div>
      <div className="rightsection">
        <img src={img} alt="Shopping Mart Illustration" width="500px" />
      </div> 
    </section>
  );
}
