import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <h2 className="features__title">Waarom kiezen voor BOB?</h2>
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon">
              <span className="feature-card__icon-placeholder">📅</span>
            </div>
            <h3 className="feature-card__title">Flexibel plannen</h3>
            <p className="feature-card__description">Jij bepaalt je eigen tempo. Lessen worden ingepland wanneer het jou uitkomt.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">
              <span className="feature-card__icon-placeholder">🚗</span>
            </div>
            <h3 className="feature-card__title">Nieuwe auto</h3>
            <p className="feature-card__description">Rijd in comfortabele, nieuwe auto's voorzien van alle moderne rijhulpsystemen.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">
              <span className="feature-card__icon-placeholder">🎓</span>
            </div>
            <h3 className="feature-card__title">Hoog ervaren instructeur</h3>
            <p className="feature-card__description">Lessen op maat afgestemd op jouw leerstijl en vaardigheden voor optimaal resultaat.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
