import React from 'react';

const Packages = () => {
  return (
    <section className="packages">
      <div className="packages__container">
        <h2 className="packages__title">Onze pakketten</h2>
        <div className="packages__grid">
          <div className="package-card">
            <h3 className="package-card__title">Starter</h3>
            <p className="package-card__lessons">10 lessen</p>
            <div className="package-card__price">€ 825</div>
            <ul className="package-card__features">
              <li className="package-card__feature">✓ 10 praktijklessen</li>
              <li className="package-card__feature">✓ Geen examen</li>
              <li className="package-card__feature">✓ Nieuwe auto</li>
              <li className="package-card__feature">✓ Flexibel plannen</li>
            </ul>
            <button className="package-card__button">Bekijk details</button>
          </div>

          <div className="package-card">
            <h3 className="package-card__title">Standaard</h3>
            <p className="package-card__lessons">15 lessen</p>
            <div className="package-card__price">€ 1.237</div>
            <ul className="package-card__features">
              <li className="package-card__feature">✓ 15 praktijklessen</li>
              <li className="package-card__feature">✓ Geen examen</li>
              <li className="package-card__feature">✓ Nieuwe auto</li>
              <li className="package-card__feature">✓ Flexibel plannen</li>
            </ul>
            <button className="package-card__button">Bekijk details</button>
          </div>

          <div className="package-card package-card--featured">
            <div className="package-card__badge">Populair</div>
            <h3 className="package-card__title">Comfort</h3>
            <p className="package-card__lessons">20 lessen + examen</p>
            <div className="package-card__price">€ 1.650</div>
            <ul className="package-card__features">
              <li className="package-card__feature">✓ 20 praktijklessen</li>
              <li className="package-card__feature">✓ Examen inbegrepen</li>
              <li className="package-card__feature">✓ Nieuwe auto</li>
              <li className="package-card__feature">✓ Losse voorrĳding</li>
            </ul>
            <button className="package-card__button">Bekijk details</button>
          </div>

          <div className="package-card">
            <h3 className="package-card__title">Premium</h3>
            <p className="package-card__lessons">25 lessen + examen + herexamen</p>
            <div className="package-card__price">€ 2.475</div>
            <ul className="package-card__features">
              <li className="package-card__feature">✓ 25 praktijklessen</li>
              <li className="package-card__feature">✓ Examen + herexamen</li>
              <li className="package-card__feature">✓ Nieuwe auto</li>
              <li className="package-card__feature">✓ Voorrĳding inbegrepen</li>
            </ul>
            <button className="package-card__button">Bekijk details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
