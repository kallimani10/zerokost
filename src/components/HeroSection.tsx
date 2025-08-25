
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Empowering Industries with Next-Gen AI';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden golden-particles">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-sky-50/60 to-amber-100/70"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 fade-in">
            <div className="w-2 h-16 golden-gradient mx-auto mb-8 rounded-full shadow-lg shadow-amber-300/50"></div>
          </div>

          <h1 className="hero-text mb-8 fade-in stagger-1">
            {text}
            <span className="animate-pulse sky-text">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl minimal-text mb-12 max-w-4xl mx-auto fade-in stagger-2 font-light">
            Revolutionizing Healthcare, Finance, Defence, and Beyond with Cutting-Edge Artificial Intelligence Solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in stagger-3">
            <Link to="/solutions" className="golden-gradient hover:shadow-xl hover:shadow-amber-300/30 text-white px-12 py-4 rounded-full text-lg font-light transition-all duration-300 subtle-hover">
              Explore Solutions
            </Link>
            <Link to="/products" className="border-2 border-sky-400/50 sky-text hover:bg-sky-50/50 hover:shadow-xl hover:shadow-sky-200/30 px-12 py-4 rounded-full text-lg font-light transition-all duration-300 subtle-hover">
              Learn More
            </Link>
          </div>

          <div className="fade-in stagger-4">
            <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-sky-400 mx-auto animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
