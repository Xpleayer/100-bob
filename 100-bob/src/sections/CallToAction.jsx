import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">Klaar om achter het stuur te kruipen?</h2>
          <p className="cta__text">
            Plan een gratis en vrijblijvende proefles en ontdek hoe Rijschool 100%
            BOB jou kan helpen om een zelfverzekerde bestuurder te worden.
          </p>
          <button className="cta__button">Geen verplichtingen</button>
        </div>

        <div className="cta__form">
          <div className="cta__form-header">Plan je proefles</div>
          <div className="cta__form-container">
            <div className="cta__form-group">
              <input type="text" className="cta__form-input" placeholder="Naam" />
            </div>
            <div className="cta__form-group">
              <input type="tel" className="cta__form-input" placeholder="Telefoonnummer" />
            </div>
            <button className="cta__form-button">Verstuur aanvraag</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
