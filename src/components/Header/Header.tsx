import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBriefcase, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <FontAwesomeIcon icon={faBriefcase} />
          <span>WorkWise</span>
        </Link>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/jobs" className="nav-link" onClick={closeMenu}>Jobs</Link>
          <Link to="/companies" className="nav-link" onClick={closeMenu}>Companies</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
          <button className="btn btn-primary">Post a Job</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 