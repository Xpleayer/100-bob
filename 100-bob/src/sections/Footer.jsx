import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo">
            <img src="/logo.png" alt="Rijschool 100% BOB" className="footer__logo-image" />
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3 className="footer__column-title">Links</h3>
              <ul className="footer__list">
                <li className="footer__list-item"><a href="/" className="footer__link">Home</a></li>
                <li className="footer__list-item"><a href="/tarieven" className="footer__link">Tarieven</a></li>
                <li className="footer__list-item"><a href="/over-ons" className="footer__link">Over ons</a></li>
                <li className="footer__list-item"><a href="/contact" className="footer__link">Contact</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title">Pakketten</h3>
              <ul className="footer__list">
                <li className="footer__list-item"><a href="/pakketten/starter" className="footer__link">Starter</a></li>
                <li className="footer__list-item"><a href="/pakketten/standaard" className="footer__link">Standaard</a></li>
                <li className="footer__list-item"><a href="/pakketten/comfort" className="footer__link">Comfort</a></li>
                <li className="footer__list-item"><a href="/pakketten/premium" className="footer__link">Premium</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title">Openingstijden</h3>
              <ul className="footer__list">
                <li className="footer__list-item">Maandag - Vrijdag</li>
                <li className="footer__list-item">9:00 - 18:00</li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title">Social media</h3>
              <div className="footer__social">
                <a href="https://facebook.com" className="footer__social-link">Facebook</a>
                <a href="https://instagram.com" className="footer__social-link">Instagram</a>
                <a href="https://youtube.com" className="footer__social-link">YouTube</a>
                <a href="https://whatsapp.com" className="footer__social-link">WhatsApp</a>
              </div>
              <div className="footer__contact">
                <p className="footer__contact-item">+31 6 1234 5678</p>
                <p className="footer__contact-item">info@rijschoolbob.nl</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2025 Rijschool 100% BOB. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
