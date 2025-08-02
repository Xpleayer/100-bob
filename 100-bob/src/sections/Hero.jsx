import React from 'react';
import backgroundImage from '../assets/imgs/stock/image_1.png';

const Hero = () => {
  // Using a custom CSS property to pass the image URL to CSS
  const heroStyle = {
    '--hero-background-image': `url(${backgroundImage})`,
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title"> Bob – daar kom je mee thuis. </h1>
            <h3 className="hero__subtitle">Jouw reis naar rijvaardigheid begint hier.</h3>
          <div className="hero__actions">
            <button className="btn btn--primary">Bekijk tarieven</button>
          </div>
        </div>
      </div>
      <div className="hero__triangle-container">
          <svg width="1423" height="500" viewBox="0 0 1423 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={"hero__triangle"}>
              <path opacity="0.88" d="M-1456.5 3247.51L-1456.5 -2748.51L1414 249.5L-1456.5 3247.51Z" fill="#00A550" fill-opacity="0.95" stroke="url(#paint0_linear_15_518)" stroke-width="13"/>
              <defs>
                  <linearGradient id="paint0_linear_15_518" x1="-501" y1="-3231" x2="-501" y2="3730" gradientUnits="userSpaceOnUse">
                      <stop offset="0.485577" stop-color="#F5F5F5"/>
                      <stop offset="0.519231"/>
                  </linearGradient>
              </defs>
          </svg>
      </div>
    </section>
  );
};

export default Hero;
