import React, { useEffect } from 'react';
import './PageStyles.css';
import AOS from'aos'; 
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() =>{
    AOS.init({
      duration:1000,
      once:false,
    });
  },[]);
  return (
    <div className="page-content">
      <div className="about-content">
      <h1>About Us</h1>
      <p>Qissah is rooted in the belief that fashion is a form of expression. Our brand embodies elegance and authenticity.</p>

      <img src="/images/about1.jpg" alt="Our Studio" data-aos="zoom-in" className="about-img" />
      <p>Our artisans handcraft every piece with dedication and cultural pride.</p>

      <img src="/images/about2.jpg" alt="Crafting Process" data-aos="zoom-in" className="about-img" />
      </div>
    </div>
  );
};

export default About;
