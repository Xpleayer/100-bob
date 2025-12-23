import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={onToggle}>
        <span>{question}</span>
        <span className="faq__icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="faq__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Hoeveel uur heb ik nodig?',
      answer: 'Gemiddeld hebben leerlingen 30-40 uur nodig om het rijbewijs te halen. Dit is echter heel persoonlijk en kan variëren. We maken een zorgvuldige inschatting tijdens de proefles en passen het programma aan jouw niveau en leervermogen aan.'
    },
    {
      question: 'Wat zijn de kosten van uitschrijven?',
      answer: 'Bij uitschrijving zijn kosten van toepassing. Binnen 1 maand na aanvang: 25% van de pakketprijs. Na 1 maand: 50% van de pakketprijs. Na 3 maanden: volledige pakketprijs. Reeds gegeven lessen worden afgetrokken tegen het losse lestarief van € 70 per uur.'
    },
    {
      question: 'Kan ik overstappen naar een ander pakket?',
      answer: 'Ja, je kunt altijd overstappen naar een groter pakket. We berekenen dan het verschil tussen de pakketten, waarbij je een voordeel houdt van het eerder gekochte pakket. Overstappen naar een kleiner pakket is helaas niet mogelijk.'
    },
    {
      question: 'Kan ik kiezen tussen een handgeschakelde of automatische auto?',
      answer: 'Ja, wij bieden zowel handgeschakelde als automatische lesauto\'s aan. Je kunt bij aanmelding aangeven welke voorkeur je hebt. Houd er rekening mee dat het type auto invloed heeft op het type rijbewijs dat je kunt behalen.'
    },
    {
      question: 'Wat kost een proefles?',
      answer: 'Een proefles kost € 65 voor 60 minuten. Dit is een vrijblijvende kennismaking met onze rijschool en instructeur, waarbij we je huidige niveau inschatten en een passend lesprogramma adviseren.'
    },
    {
      question: 'Is het herexamen gratis in het Premium pakket?',
      answer: 'Ja! In het Premium pakket is het herexamen volledig GRATIS inbegrepen. Dit geeft je de zekerheid van twee examenpogingen zonder extra kosten, perfect voor cursisten die maximale zekerheid willen.'
    },
    {
      question: 'Wat is het verschil tussen losse lessen en pakketten?',
      answer: 'Losse lessen kosten € 70 per uur, terwijl lessen in pakketten slechts € 65 per uur kosten. Met pakketten bespaar je dus € 5 per uur en heb je meer zekerheid over je voorbereiding op het rijbewijs.'
    },
    {
      question: 'Kan ik lessen annuleren of verzetten?',
      answer: 'Lessen kunnen tot 24 uur van tevoren kosteloos worden geannuleerd of verzet. Bij annulering binnen 24 uur wordt de les in rekening gebracht. Flexibele planning is belangrijk voor ons!'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Veelgestelde vragen</h2>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
