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
      question: 'Hoeveel lessen heb ik nodig?',
      answer: 'Gemiddeld hebben leerlingen 30-40 lessen nodig om het rijbewijs te halen. Dit is echter heel persoonlijk en kan variëren. We kennen jouw instructiemaken zorgvuldig inschatting tijdens de proefles en passen het programma aan jouw niveau en leervermogen aan.'
    },
    {
      question: 'Kan ik overstappen naar een ander pakket?',
      answer: 'Ja, je kunt altijd overstappen naar een groter pakket. We berekenen dan het verschil tussen de pakketten, waarbij je een voordeel houdt van het eerder gekochte pakket. Overstappen naar een kleiner pakket is helaas niet mogelijk.'
    },
    {
      question: 'Hoeveel lessen heb ik nodig?',
      answer: 'Gemiddeld hebben leerlingen 30-40 lessen nodig om het rijbewijs te halen. Dit is echter heel persoonlijk en kan variëren. We kennen jouw instructiemaken zorgvuldig inschatting tijdens de proefles en passen het programma aan jouw niveau en leervermogen aan.'
    },
    {
      question: 'Hoeveel lessen heb ik nodig?',
      answer: 'Gemiddeld hebben leerlingen 30-40 lessen nodig om het rijbewijs te halen. Dit is echter heel persoonlijk en kan variëren. We kennen jouw instructiemaken zorgvuldig inschatting tijdens de proefles en passen het programma aan jouw niveau en leervermogen aan.'
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
