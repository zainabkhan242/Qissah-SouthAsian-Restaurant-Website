import React , { useEffect } from 'react';
import AOS from'aos'; 
import 'aos/dist/aos.css';
import './PageStyles.css';
import CheckoutForm from '../components/CheckoutForm';


const Shop = () => {
  useEffect(() =>{
    AOS.init({
      duration:1000,
      once:false,
    });
  },[]);
  return (
    <div className="page-content">
      <div className="shop-content">
      <h1>Shop</h1>
      <h3> Discover flavours woven with Heritage and Heart. </h3>

      </div>

      <div className="shop-grid">
        <div className="product-card">
          <img src="/images/product1.jpg" alt="Product 1" data-aos="fade-up"/>
          <p>Biryani</p>
        </div>
        <div className="product-card">
          <img src="/images/product2.jpg" alt="Product 2" data-aos="fade-up" data-aos-delay="200"  />
          <p>Lamb Roast</p>
        </div>
        <div className="product-card">
          <img src="/images/product3.jpg" alt="Product 3" data-aos="fade-up" data-aos-delay="400" />
          <p>Classic Nihari</p>
      
        </div>
      </div>
    </div>

  );
};

export default Shop;
