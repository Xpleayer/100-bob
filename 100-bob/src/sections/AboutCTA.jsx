import React from 'react';

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <div className="about-cta__container">
        <h2 className="about-cta__title">Klaar om de weg op te gaan?</h2>
        <p className="about-cta__text">
          Ontdek hoe wij jou kunnen helpen om een zelfverzekerde en veilige bestuurder te worden.
        </p>
        <div className="about-cta__buttons">
          <a href="/tarieven" className="about-cta__button about-cta__button--primary">
            Plan een proefles
          </a>
          <a href="/tarieven" className="about-cta__button about-cta__button--secondary">
            Bekijk tarieven
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;

