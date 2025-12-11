import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Bob Jansen',
      role: 'Oprichter & Hoofdinstructeur',
      description: 'Met meer dan 15 jaar ervaring brengt Bob rust en vertrouwen in elke les. Specialist in het begeleiden van nerveuze leerlingen.',
      image: null // Placeholder for image
    },
    {
      name: 'Lisa Vermeeren',
      role: 'Rijinstructeur',
      description: "Lisa's enthousiasme is aanstekelijk. Haar specialiteit is het aanleren van complexe manoeuvres op een eenvoudige, stapsgewijze manier.",
      image: null
    },
    {
      name: 'Mark de Vries',
      role: 'Rijinstructeur',
      description: 'Mark is onze technische expert. Hij legt uit geduld en precisie uit hoe je het beste uit de auto haalt en rijdt met vertrouwen.',
      image: null
    }
  ];

  return (
    <section className="team">
      <div className="team__container">
        <h2 className="team__title">Ons Team</h2>
        <div className="team__grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team__member">
              <div className="team__member-image">
                {member.name}
              </div>
              <h3 className="team__member-name">{member.name}</h3>
              <p className="team__member-role">{member.role}</p>
              <p className="team__member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

