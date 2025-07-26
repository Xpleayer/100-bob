import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Jouw reis naar rijvaardigheid begint hier.</h1>
          <div className="hero__actions">
            <button className="btn btn--primary">Bekijk tarieven</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
