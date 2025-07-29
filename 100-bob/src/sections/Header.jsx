import React, { useState } from 'react';
import logoImage from '../assets/imgs/Logo-removebg-preview 1.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logoImage} alt="Rijschool 100% BOB" className="header__logo-image" />
        </div>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#home" className="header__nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li className="header__nav-item">
              <a href="#tarieven" className="header__nav-link" onClick={() => setMenuOpen(false)}>Tarieven</a>
            </li>
            <li className="header__nav-item">
              <a href="#over-ons" className="header__nav-link" onClick={() => setMenuOpen(false)}>Over ons</a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
