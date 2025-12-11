import React from 'react';

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission__container">
        <h2 className="mission__title">Onze Missie</h2>
        <p className="mission__text">
          Bij Rijschool 100% BOB geloven we dat rijvaardigheid meer is dan alleen een voertuig 
          besturen. Het gaat om vertrouwen, verantwoordelijkheid en vrijheid. Onze missie is om 
          elke leerling niet alleen voor te bereiden op het examen, maar op een leven lang veilig en 
          zelfverzekerd rijden.
        </p>
        <div className="mission__values">
          <div className="mission__value">Veiligheid</div>
          <div className="mission__value">Vertrouwen</div>
          <div className="mission__value">Vakmanschap</div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

