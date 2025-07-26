import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/logo.png" alt="Rijschool 100% BOB" className="header__logo-image" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#home" className="header__nav-link">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="#tarieven" className="header__nav-link">Tarieven</a>
            </li>
            <li className="header__nav-item">
              <a href="#over-ons" className="header__nav-link">Over ons</a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
