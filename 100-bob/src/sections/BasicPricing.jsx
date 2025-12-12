import React from 'react';

const BasicPricing = () => {
  return (
    <section className="basic-pricing">
      <div className="basic-pricing__container">
        <h2 className="basic-pricing__title">Basistarieren</h2>
        <div className="basic-pricing__cards">
          <div className="basic-pricing__card">
            <h3 className="basic-pricing__card-title">Proefles</h3>
            <p className="basic-pricing__card-description">
              60 minuten kennismaking met onze rijschool en instructeur
            </p>
            <div className="basic-pricing__card-price">€ 65</div>
          </div>
          <div className="basic-pricing__card">
            <h3 className="basic-pricing__card-title">Losse les</h3>
            <p className="basic-pricing__card-description">
              Per 60 minuten praktijkles (€65 per uur in pakketten)
            </p>
            <div className="basic-pricing__card-price">€ 70</div>
          </div>
          <div className="basic-pricing__card">
            <h3 className="basic-pricing__card-title">Praktijkexamen</h3>
            <p className="basic-pricing__card-description">
              Inclusief gebruik lesauto en 60 minuten voorrijles
            </p>
            <div className="basic-pricing__card-price">€ 299</div>
          </div>
        </div>
        <p className="basic-pricing__note">
          * Uitschrijfkosten zijn van toepassing volgens onze pakketten. Automatische auto beschikbaar op aanvraag.
        </p>
      </div>
    </section>
  );
};

export default BasicPricing;

