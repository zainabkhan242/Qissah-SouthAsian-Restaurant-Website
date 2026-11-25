// src/components/CheckoutForm.js
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      alert('Payment method created!');
    }
  };

  const cardStyle = {
    style: {
      base: {
        fontSize: '16px',
        color: '#000',
        backgroundColor: '#f5f1e6',
        '::placeholder': {
          color: '#555',
        },
      },
      invalid: {
        color: '#e5424d',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto',color: '#000000'  }}>
      <label>
        Card Details
       <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#000000', // BLACK TEXT
        backgroundColor: '#f5f1e6', // optional, may not show
        '::placeholder': {
          color: '#4a4a4a', // dark grey placeholder
        },
      },
      invalid: {
        color: '#9e2146', // red text if input is invalid
      },
    },
  }}
/>
      </label>
      <button type="submit" style={{ marginTop: '1rem', padding: '10px 20px' }}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;


