import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your logo in /assets/

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#140602',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/images/logo.jpg" alt="Al Das Logo" style={{ height: '40px', marginRight: '10px' }} />
        <h1 style={{ margin: 0, fontFamily: 'Playfair Display', color: '#fdfbf9' }}>QISSAH</h1>
      </div>
      <div>
        <Link to="/" style={{ margin: '0 1rem', color: '#fdfbf9', textDecoration: 'none' }}>Home</Link>
        <Link to="/shop" style={{ margin: '0 1rem', color: '#fdfbf9', textDecoration: 'none' }}>Shop</Link>
        <Link to="/about" style={{ margin: '0 1rem', color: '#fdfbf9', textDecoration: 'none' }}>About</Link>
        <Link to="/paymentpage" style={{ margin: '0 1rem', color: '#fdfbf9', textDecoration: 'none' }}>Payment</Link>
      </div>
    </nav>
  );
}

export default Navbar;

