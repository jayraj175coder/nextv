// src/components/AnimatedBackground.js

import React, { useEffect } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 2000);
    };

    const starInterval = setInterval(createStar, 100);

    return () => clearInterval(starInterval);
  }, []);

  return <div className="animated-bg"></div>;
};

export default AnimatedBackground;
