import React, { useEffect, useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const count = 80;
    const starArray = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,  // % cinsinden
      y: Math.random() * 100,
      delay: Math.random() * 10,
    }));
    setStars(starArray);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="stars-container">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="hero-content">
        <p className="intro">Hi, my name is</p>
        <h1 className="name">Cihan Tunalı</h1>
        <p className="tagline">Cloud & DevOps Consultant based in Istanbul.</p>
        <a href="mailto:hello@tnl.works" className="cta-button">Let’s connect</a>
      </div>
    </section>
  );
};

export default Hero;