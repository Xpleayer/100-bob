import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoImage from '../assets/imgs/Logo-removebg-preview 1.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tarievenDropdownOpen, setTarievenDropdownOpen] = useState(false);
  const location = useLocation();

  // Check if current page is a tarieven-related page
  const isTarievenActive = location.pathname.startsWith('/tarieven') || location.pathname.startsWith('/pakket/');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTarievenDropdown = () => {
    setTarievenDropdownOpen(!tarievenDropdownOpen);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setTarievenDropdownOpen(false);
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
              <NavLink to="/" className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`} onClick={closeAll} end>Home</NavLink>
            </li>
            <li className={`header__nav-item header__nav-item--dropdown ${tarievenDropdownOpen ? 'header__nav-item--open' : ''}`}>
              <button 
                className={`header__nav-link header__nav-link--dropdown ${isTarievenActive ? 'header__nav-link--active' : ''}`}
                onClick={toggleTarievenDropdown}
              >
                Tarieven
                <span className="header__nav-arrow">{tarievenDropdownOpen ? '▲' : '▼'}</span>
              </button>
              <ul className="header__dropdown">
                <li className="header__dropdown-item">
                  <NavLink to="/tarieven" className={({ isActive }) => `header__dropdown-link ${isActive ? 'header__dropdown-link--active' : ''}`} onClick={closeAll}>
                    Overzicht tarieven
                  </NavLink>
                </li>
                <li className="header__dropdown-item">
                  <NavLink to="/pakket/starter" className={({ isActive }) => `header__dropdown-link ${isActive ? 'header__dropdown-link--active' : ''}`} onClick={closeAll}>
                    Starter Pakket
                  </NavLink>
                </li>
                <li className="header__dropdown-item">
                  <NavLink to="/pakket/standaard" className={({ isActive }) => `header__dropdown-link ${isActive ? 'header__dropdown-link--active' : ''}`} onClick={closeAll}>
                    Standaard Pakket
                  </NavLink>
                </li>
                <li className="header__dropdown-item">
                  <NavLink to="/pakket/comfort" className={({ isActive }) => `header__dropdown-link ${isActive ? 'header__dropdown-link--active' : ''}`} onClick={closeAll}>
                    Comfort Pakket
                  </NavLink>
                </li>
                <li className="header__dropdown-item">
                  <NavLink to="/pakket/premium" className={({ isActive }) => `header__dropdown-link ${isActive ? 'header__dropdown-link--active' : ''}`} onClick={closeAll}>
                    Premium Pakket
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="header__nav-item">
              <NavLink to="/over-ons" className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`} onClick={closeAll}>Over ons</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/contact" className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`} onClick={closeAll}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
