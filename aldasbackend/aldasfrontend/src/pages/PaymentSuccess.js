// src/pages/PaymentSuccess.js
import React from 'react';

function PaymentSuccess() {
  return (
    <div className="h-screen flex items-center justify-center bg-green-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
        <p className="text-gray-700">Thank you for your purchase.</p>
      </div>
    </div>
  );
}

export default PaymentSuccess;
