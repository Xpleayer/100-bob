import React, { useState } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const PackageDetailTemplate = ({ packageData }) => {
  const [formData, setFormData] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: '',
    geboortedatum: '',
    opmerkingen: '',
    akkoord: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const { name, lessons, price, pricePerLesson, savings, subtitle, description, features, whatYouLearn, variant, otherPackages } = packageData;

  return (
    <div className="package-detail-page">
      <Header />
      <main className="main">
        <section className="breadcrumb">
          <div className="breadcrumb__container">
            <a href="/">Home</a>
            <span className="breadcrumb__separator">›</span>
            <a href="/tarieven">Tarieven</a>
            <span className="breadcrumb__separator">›</span>
            <span>{name} Pakket</span>
          </div>
        </section>

        <section className="package-detail-hero">
          <div className="package-detail-hero__container">
            <h1 className="package-detail-hero__title">{name} Pakket</h1>
          </div>
        </section>

        <section className={`package-info-banner ${variant ? `package-info-banner--${variant}` : ''}`}>
          <div className="package-info-banner__container">
            <h2 className="package-info-banner__title">{name} • {lessons} • € {price}</h2>
            <p className="package-info-banner__subtitle">{subtitle}</p>
          </div>
        </section>

        <section className="package-included">
          <div className="package-included__container">
            <div className="package-included__content">
              <h2 className="package-included__title">Wat is inbegrepen?</h2>
              
              <div className="package-included__grid">
                {features.map((feature, index) => (
                  <div key={index} className="package-included__item">
                    <div className="package-included__icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="package-included__why">
                <h3>Waarom het {name} pakket?</h3>
                <div className={`package-included__highlight ${variant === 'comfort' ? 'package-included__highlight--popular' : ''} ${variant === 'premium' ? 'package-included__highlight--premium' : ''}`}>
                  {variant === 'comfort' && <span className="popular-badge">Populair</span>}
                  {description.highlight}
                </div>
                <p>{description.full}</p>
              </div>

              <div className="package-included__learn">
                <h3>Wat leer je tijdens deze lessen?</h3>
                <ul className="package-included__list">
                  {whatYouLearn.map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="package-booking">
              <div className={`package-booking__card ${variant === 'comfort' ? 'package-booking__card--popular' : ''} ${variant === 'premium' ? 'package-booking__card--premium' : ''}`}>
                {variant === 'comfort' && <span className="package-booking__badge">Populair</span>}
                <h3 className="package-booking__title">Boek nu je {name} pakket</h3>
                
                <div className="package-booking__price-breakdown">
                  <div className="package-booking__price-row">
                    <span>Pakketprijs</span>
                    <span>€ {price}</span>
                  </div>
                  <div className="package-booking__price-row">
                    <span>Prijs per les</span>
                    <span>€ {pricePerLesson}</span>
                  </div>
                  <div className="package-booking__price-row package-booking__price-row--savings">
                    <span>Besparing t.o.v. losse lessen</span>
                    <span>€ {savings}</span>
                  </div>
                </div>

                <button className={`package-booking__cta ${variant === 'comfort' ? 'package-booking__cta--comfort' : ''} ${variant === 'premium' ? 'package-booking__cta--premium' : ''}`}>
                  Boek nu
                </button>

                <div className="package-booking__questions">
                  <h4>Wil je sparen?</h4>
                  <p>Bel ons vrijblijvend voor advies of om al je vragen te beantwoorden.</p>
                  <a href="tel:+31612345678" className="package-booking__phone">
                    📞 +31 6 1234 5678
                  </a>
                </div>

                <div className="package-booking__why-choose">
                  <h4>Waarom kiezen voor BOB?</h4>
                  <ul>
                    <li>✓ Persoonlijke aanpak</li>
                    <li>✓ Moderne lesauto's</li>
                    <li>✓ Flexibele planning</li>
                    <li>✓ Ervaren instructeurs</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="package-booking-form">
          <div className="package-booking-form__container">
            <h2 className="package-booking-form__title">Start je rijlessen met het {name} pakket</h2>
            
            <form onSubmit={handleSubmit} className="package-booking-form__form">
              <div className="package-booking-form__row">
                <div className="package-booking-form__field">
                  <input type="text" name="voornaam" placeholder="Voornaam" value={formData.voornaam} onChange={handleInputChange} required />
                </div>
                <div className="package-booking-form__field">
                  <input type="text" name="achternaam" placeholder="Achternaam" value={formData.achternaam} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="package-booking-form__row">
                <div className="package-booking-form__field">
                  <input type="email" name="email" placeholder="E-mailadres" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="package-booking-form__field">
                  <input type="tel" name="telefoon" placeholder="Telefoonnummer" value={formData.telefoon} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="package-booking-form__row">
                <div className="package-booking-form__field package-booking-form__field--full">
                  <input type="date" name="geboortedatum" placeholder="Gewenste startdatum" value={formData.geboortedatum} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="package-booking-form__row">
                <div className="package-booking-form__field package-booking-form__field--full">
                  <textarea name="opmerkingen" placeholder="Eventuele opmerkingen" value={formData.opmerkingen} onChange={handleInputChange} rows="4"></textarea>
                </div>
              </div>
              <div className="package-booking-form__checkbox">
                <input type="checkbox" name="akkoord" id="akkoord" checked={formData.akkoord} onChange={handleInputChange} required />
                <label htmlFor="akkoord">Ik ga akkoord met de algemene voorwaarden en het privacybeleid van Rijschool 100% BOB.</label>
              </div>
              <button type="submit" className="package-booking-form__submit">Verstuur aanvraag</button>
            </form>
          </div>
        </section>

        <section className="other-packages">
          <div className="other-packages__container">
            <h2 className="other-packages__title">Bekijk ook onze andere pakketten</h2>
            <div className="other-packages__grid">
              {otherPackages.map((pkg, index) => (
                <div key={index} className="other-packages__card">
                  <div className={`other-packages__header other-packages__header--${pkg.variant}`}>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.lessons}</p>
                  </div>
                  <div className="other-packages__price">€ {pkg.price}</div>
                  <ul className="other-packages__features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <a href={pkg.link} className="other-packages__button">Bekijk details</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PackageDetailTemplate;

