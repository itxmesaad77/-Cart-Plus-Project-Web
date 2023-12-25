// TermsAndConditions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const TermsAndConditions = () => {
 const navigate=useNavigate();
 const handleonclick=()=>{
    navigate('/');
 }
    return (
    <div className='container-fluid  m-5'>
      <h2>Terms and Conditions</h2>
      <p>Please read the following terms and conditions carefully before using our website.</p>

      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using our website, you agree to be bound by these terms and conditions.</p>

      <h3>2. Use of Content</h3>
      <p>Unless otherwise stated, all content on this website is the property of Cart Plus. You may not reproduce, distribute, or otherwise use any content without our permission.</p>

      <h3>3. Privacy Policy</h3>
      <p>Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and disclose information.</p>

      {/* Add more terms and conditions as needed */}

      <h3>Contact Information</h3>
      <p>If you have any questions about these terms and conditions, please contact us at support@cartplus.com.</p>
    <button className='p-2' onClick={handleonclick}>Ok</button>
    </div>
  );
}

export default TermsAndConditions;
