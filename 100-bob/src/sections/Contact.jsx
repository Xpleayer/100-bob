import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Neem contact op</h2>
        <p className="contact__text">We staan klaar om al je vragen te beantwoorden</p>

        <div className="contact__methods">
          <div className="contact__method">
            <h3 className="contact__method-title">Openingstijden</h3>
            <p className="contact__method-text">Ma-Vr: 9:00-18:00</p>
            <a href="tel:+31612345678" className="contact__method-button">Bel nu</a>
          </div>

          <div className="contact__method">
            <h3 className="contact__method-title">Bel direct</h3>
            <p className="contact__method-text">+31 6 2302 4801</p>
            <a href="tel:+31623024801" className="contact__method-button">Bel nu</a>
          </div>

          <div className="contact__method">
            <h3 className="contact__method-title">WhatsApp</h3>
            <p className="contact__method-text">Stuur een bericht</p>
            <a href="https://wa.me/31623024801" className="contact__method-button">Chat nu</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
