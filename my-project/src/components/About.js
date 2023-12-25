// AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
   const navigate=useNavigate();
    const handleonclick=()=>{
          navigate('/');
    }
  return (
    <div className='mt-5 bg-bg-body-secondary   container-fluid '>
      <h2 className=''>About Us</h2>
      <p>Welcome to Cart Plus, your go-to destination for a delightful shopping experience!</p>
      <p>At Cart Plus, we believe in providing our customers with a curated selection of high-quality products, unbeatable prices, and excellent customer service. Our goal is to make your shopping journey convenient, enjoyable, and stress-free.</p>
      <p>What sets us apart:</p>
      <ul>
        <li>**Wide Variety:** Explore a vast range of products, from everyday essentials to the latest trends in fashion and electronics.</li>
        <li>**Quality Assurance:** We source our products from trusted suppliers to ensure you receive only the best quality items.</li>
        <li>**Affordable Prices:** Enjoy competitive prices and exclusive deals that make your shopping budget-friendly.</li>
        <li>**User-Friendly Experience:** Our user-friendly website and intuitive design make it easy for you to find what you need quickly and efficiently.</li>
        <li>**Customer Satisfaction:** Your satisfaction is our top priority. Our dedicated customer support team is here to assist you with any inquiries or concerns.</li>
      </ul>
      <p>Thank you for choosing Cart Plus for your shopping needs. We look forward to serving you and making every shopping moment special.</p>
   <button className='p-2' onClick={handleonclick}>Ok</button>
    </div>
  );
}

export default AboutUs;
