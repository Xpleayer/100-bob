import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Wat onze leerlingen zeggen</h2>
        <div className="testimonials__grid">
          <div className="testimonial">
            <div className="testimonial__content">
              <div className="testimonial__image">
                <img src="/student1.jpg" alt="Student" />
              </div>
              <div className="testimonial__info">
                <h3 className="testimonial__name">Mohammed</h3>
                <p className="testimonial__location">Leiden</p>
                <p className="testimonial__text">
                  "Bob is super geduldig en legt alles op een rustige manier uit. Echt geweldig!"
                </p>
                <div className="testimonial__status">Geslaagd ✓</div>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="testimonial__content">
              <div className="testimonial__image">
                <img src="/student2.jpg" alt="Student" />
              </div>
              <div className="testimonial__info">
                <h3 className="testimonial__name">Mohammed</h3>
                <p className="testimonial__location">Leiden</p>
                <p className="testimonial__text">
                  "Bob is super geduldig en legt alles op een rustige manier uit. Echt geweldig!"
                </p>
                <div className="testimonial__status">Geslaagd ✓</div>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="testimonial__content">
              <div className="testimonial__image">
                <img src="/student3.jpg" alt="Student" />
              </div>
              <div className="testimonial__info">
                <h3 className="testimonial__name">Mohammed</h3>
                <p className="testimonial__location">Leiden</p>
                <p className="testimonial__text">
                  "Bob is super geduldig en legt alles op een rustige manier uit. Echt geweldig!"
                </p>
                <div className="testimonial__status">Geslaagd ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
