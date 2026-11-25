import React, { useState, useEffect } from 'react';
import './PageStyles.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  '/images/carousel1.jpg',
  '/images/carousel2.jpg',
  '/images/carousel3.jpeg',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); // Clean up
  }, [currentIndex]);

  return (
    <div className="page-content">
      <div className="carousel-wrapper">
        <img
          src={carouselImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="arrow left-arrow" onClick={prevSlide}>
          <ChevronLeft size={30} color="white" />
        </button>
        <button className="arrow right-arrow" onClick={nextSlide}>
          <ChevronRight size={30} color="white" />
        </button>
      </div>

    
    <div className="journey-section">
      <div className="journey-text">
        <h2>Our Journey</h2>
        <p>
          Rooted in tradition and inspired by timeless flavors, our culinary journey is a blend of heritage and contemporary experiences. With each dish, we celebrate the warmth of home and the richness of culture.
        </p>
      </div>
      <div className="dishes-gallery">
        <div className="dishes-gal"><img src="/images/dish1.jpg" alt="Dish 1" data-aos="fade-up"/></div>
        <div className="dishes-gal"><img src="/images/dish2.jpg" alt="Dish 2" data-aos="fade-up" data-aos-delay="200" /></div>
        <div className="dishes-gal"><img src="/images/dish3.jpg" alt="Dish 3" data-aos="fade-up" data-aos-delay="400" /></div>
      </div>
    </div>



      <section className="section">
        <h1>Welcome to Qissah</h1>
        <p>Discover flavours woven with Heritage and Culture</p>
        <img src="/images/section1.jpg" alt="Fashion" className="section-img" data-aos="zoom-in" />
      </section>

      <section className="section">
        <h2>Our Story</h2>
        <p>We blend tradition with modern designs to create unique styles.</p>
        <img src="/images/section2.jpg" alt="Heritage" className="section-img" data-aos="zoom-in" />
      </section>
    </div>
  );
};

export default Home;
