import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import AboutUs from './components/About';
import Contact from './components/Contact';
import KidsProducts from './components/KidsProducts';
import MaleProducts from './components/MaleProducts';
import FemaleProducts from './components/FemaleProducts';
import TermsAndConditions from './components/TermsAndConditons';
import ProductList from './components/ProductList';
import LoginPage from './components/LoginPage';
import { CartProvider } from '../src/components/CartContext'; // Import the CartProvider
import Filter from './components/Filter';
import ShoppingCart from './components/ShoppingCart';
import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap your application with CartProvider */}
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Section1 />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kids" element={<KidsProducts />} />
            <Route path="/women" element={<FemaleProducts />} />
            <Route path="/men" element={<MaleProducts />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/addressForm" element={<AddressForm />} />
            <Route path="/paymentForm" element={<PaymentForm />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            {/* ... other routes ... */}
          </Routes>
          <Footer />
        </>
      </CartProvider>
    </Router>
  );
}

export default App;
