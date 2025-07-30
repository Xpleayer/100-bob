import React from 'react';
import WelkomImage from '../assets/imgs/stock/welcome_image.jpg';

const TextblockMedia = () => {

    const WelkomStyle = {
        '--textblock-media-welcome-image': `url(${WelkomImage})`,
    };


  return (
    <section className="textblock-media" style={WelkomStyle}>
      <div className="textblock-media__container">
          <h2 className="textblock-media__title"> Welkom bij <span className="textblock-media__title-break"></span> Rijschool 100% BOB  </h2>
          <div className="textblock-media__image">
            <img src={WelkomImage} alt="Driving Instructor" className="textblock-media__image-img" />
        </div>
          <div className="textblock-media__content">
          <p className="textblock-media__text">
            Met passie en precisie begeleid ik je door elke bocht en kruising, tot jij de
            weg met vertrouwen beheerst. Mijn doel is niet alleen om je te laten
            slagen, maar om je een veilige, zelfverzekerde bestuurder te maken voor
            het leven.
          </p>
          <div className="textblock-media__quote">
            <p className="textblock-media__quote-text">"Rijden is meer dan een vaardigheid – het is een mindset"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextblockMedia;
