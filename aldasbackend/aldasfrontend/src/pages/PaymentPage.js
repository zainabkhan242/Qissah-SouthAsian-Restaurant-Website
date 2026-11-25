// src/pages/PaymentPage.js
import React, { useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51RI5cqPWDvqeHcHVxygOl71sUnAqreOqT80v5q89B9LdgVvMucv31pRYWJAqMwoh2450Ef9DcoCsKpIzTBWiVlgc00IHFMCThB');

const PaymentPage = () => {
  useEffect(() => {
  document.body.style.backgroundColor = '#e6dbc6'; // earthy beige

  return () => {
    document.body.style.backgroundColor = '';
  };
}, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#000000',
      colorText: '#000000',
      colorBackground: '#f5f1e6',
      colorPlaceholder: '#555',
      fontFamily: 'Arial, sans-serif',
    },
  };

  return (
    <div style={{ backgroundColor: '#f5f1e6', minHeight: '100vh', padding: '2rem', color: 'black' }}>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <h2 style={{
    backgroundColor: '#d4a373',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '2rem'
  }}>
    Complete Your Payment
  </h2>
</div>
  
  <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center' 
}}>
  <div style={{
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%'
  }}>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </div>
</div>

    </div>
  );
};

export default PaymentPage;
