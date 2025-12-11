import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import student images
import mojtabaImg from '../assets/imgs/studenten/mojtaba.jpg';
import nasimImg from '../assets/imgs/studenten/nasim.jpg';
import marailysImg from '../assets/imgs/studenten/marailys.jpg';
import masiImg from '../assets/imgs/studenten/masi.jpg';
// import rouzbehImg from '../assets/imgs/studenten/rouzbeh.jpg';

const Testimonials = () => {
  console.log('Testimonial images:', { mojtabaImg, nasimImg, marailysImg, masiImg });
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // State to control autoplay
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);

  // Autoplay configuration - only applied when autoplayEnabled is true
  const autoplayConfig = autoplayEnabled ? {
    delay: 2500,
    disableOnInteraction: false,
  } : false;

  // Toggle autoplay function
  const toggleAutoplay = () => {
    setAutoplayEnabled(!autoplayEnabled);
  };

  // Mock data for testimonials - replace with your actual data
  const testimonialData = [
    {
      id: 1,
      name: 'Mojtaba',
      location: 'Leusden',
      text: '"Bob is super geduldig en legt alles op een rustige manier uit. Echt geweldig!"',
      status: 'Geslaagd',
      image: mojtabaImg
    },
    {
      id: 2,
      name: 'Nasim',
      location: 'Leusden',
      text: '"Dankzij Bob heb ik in één keer mijn rijbewijs gehaald. Zijn methode werkt echt!"',
      status: 'Geslaagd',
      image: nasimImg
    },
    {
      id: 3,
      name: 'Marailys',
      location: 'Leusden',
      text: '"De lessen waren ontspannen en Bob gaf me veel vertrouwen. Bedankt voor alles!"',
      status: 'Geslaagd',
      image: marailysImg
    },
    {
      id: 4,
      name: 'Masi',
      location: 'Leusden',
      text: '"Bob weet precies hoe hij moet inspelen op jouw leerstijl. Zeer aan te raden!"',
      status: 'Geslaagd',
      image: masiImg
    },
    {
      id: 5,
      name: 'Rouzbeh',
      location: 'Leusden',
      text: '"Gewoon in een keer gehaald! Chosro is een top instructeur!"',
      status: 'Geslaagd',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Wat onze leerlingen zeggen</h2>

        {/* Autoplay toggle button */}
        <button
          className="testimonials__autoplay-toggle"
          onClick={toggleAutoplay}
        >
          {autoplayEnabled ? 'Pause Autoplay' : 'Start Autoplay'}
        </button>

        <div className="testimonials__slider-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={autoplayConfig}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 640px (tablet)
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 3,
              }
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="testimonials__swiper"
            loop={true}
            grabCursor={true}
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="testimonial-slide">
                <div className="testimonial">
                  <div className="testimonial__content">
                    <div className="testimonial__image">
                        <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial__info">
                      <h3 className="testimonial__name">{testimonial.name}</h3>
                      <p className="testimonial__location">{testimonial.location}</p>
                      <p className="testimonial__text">{testimonial.text}</p>
                      <div className="testimonial__status">{testimonial.status} ✓</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials__navigation">
            <button ref={navigationPrevRef} className="testimonials__nav-button testimonials__nav-prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button ref={navigationNextRef} className="testimonials__nav-button testimonials__nav-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
