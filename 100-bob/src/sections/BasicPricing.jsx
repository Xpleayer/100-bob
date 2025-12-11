import React from 'react';

const BasicPricing = () => {
  return (
    <section className="basic-pricing">
      <div className="basic-pricing__container">
        <h2 className="basic-pricing__title">Basistarieren</h2>
        <div className="basic-pricing__cards">
          <div className="basic-pricing__card">
            <h3 className="basic-pricing__card-title">Praktijkexamen</h3>
            <p className="basic-pricing__card-description">
              Inclusief gebruik klasauto en 60 minuten voorrijles
            </p>
            <div className="basic-pricing__card-price">€ 299</div>
          </div>
          <div className="basic-pricing__card">
            <h3 className="basic-pricing__card-title">Losse les</h3>
            <p className="basic-pricing__card-description">
              Per 1,5 uur praktijkles (€60 per 60 minuten)
            </p>
            <div className="basic-pricing__card-price">€ 90</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicPricing;

