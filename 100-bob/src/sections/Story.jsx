import React from 'react';

const Story = () => {
  return (
    <section className="story">
      <div className="story__container">
        <h2 className="story__title">Ons Verhaal</h2>
        <div className="story__timeline">
          <div className="story__item">
            <div className="story__number">1</div>
            <h3 className="story__item-title">Oprichting</h3>
            <p className="story__item-text">
              In 2010 begon Bob Jansen met een droom en één lesauto. Met jarenlange 
              ervaring als chauffeur en een passie voor lesgeven, werd Rijschool 100% 
              BOB geboren.
            </p>
          </div>
          <div className="story__item">
            <div className="story__number">2</div>
            <h3 className="story__item-title">Groei</h3>
            <p className="story__item-text">
              Door de jaren heen groeide onze reputatie voor kwaliteit en persoonlijke 
              aandacht. We breidden uit naar Almere en verwelkomen nieuwe instructeurs 
              die onze waarden delen.
            </p>
          </div>
          <div className="story__item">
            <div className="story__number">3</div>
            <h3 className="story__item-title">Ambitie</h3>
            <p className="story__item-text">
              Vandaag blijven we innoveren met moderne lesauto's en persoonlijke 
              lesmethoden. Onze ambitie is om de regio te zijn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

