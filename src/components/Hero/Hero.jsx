import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero" id="hero">
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