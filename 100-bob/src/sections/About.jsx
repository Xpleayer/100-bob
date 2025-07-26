import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <img src="/instructor.jpg" alt="Driving Instructor" className="about__image-img" />
        </div>
        <div className="about__content">
          <h2 className="about__title">Welkom bij Rijschool 100% BOB</h2>
          <p className="about__text">
            Met passie en precisie begeleid ik je door elke bocht en kruising, tot jij de
            weg met vertrouwen beheerst. Mijn doel is niet alleen om je te laten
            slagen, maar om je een veilige, zelfverzekerde bestuurder te maken voor
            het leven.
          </p>
          <div className="about__quote">
            <p className="about__quote-text">"Rijden is meer dan een vaardigheid – het is een mindset"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
