import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

function Navbar() {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 868);

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 972);
      {
        /* 868px */
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.dropdown') &&
        !event.target.closest('.navbar-menu-item')
      ) {
        setShowProductsDropdown(false);
        setShowServicesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle hover (mouse enter/leave) on large screens
  const handleProductsEnter = () => {
    if (!isMobileView) setShowProductsDropdown(true);
  };
  const handleProductsLeave = () => {
    if (!isMobileView) setShowProductsDropdown(false);
  };
  const handleServicesEnter = () => {
    if (!isMobileView) setShowServicesDropdown(true);
  };
  const handleServicesLeave = () => {
    if (!isMobileView) setShowServicesDropdown(false);
  };

  // Toggle Products dropdown on click (both mobile and desktop)
  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
    setShowServicesDropdown(false); // Close services dropdown when products is toggled
  };

  // Toggle Services dropdown on click (both mobile and desktop)
  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
    setShowProductsDropdown(false); // Close products dropdown when services is toggled
  };

  // Handle keyboard keydown events
  const handleKeyDown = (e, toggleDropdown) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent default space scroll behavior
      toggleDropdown();
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <Link to="/" className="navbar-logo">
        <h1>Incisive Solutions</h1>
        <i>Inspire, Innovate, Integrate..!</i>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className="navbar-menu">
        <NavLink to="/" className="navbar-menu-item">
          Home
        </NavLink>

        {/* Products Dropdown */}
        <div
          className={`dropdown ${
            showProductsDropdown ? 'dropdown-active' : ''
          }`}
          onMouseEnter={handleProductsEnter}
          onMouseLeave={handleProductsLeave}
          onClick={toggleProductsDropdown}
          onKeyDown={(e) => handleKeyDown(e, toggleProductsDropdown)}
          tabIndex="0" // Allows div to be focusable via keyboard/tab
        >
          <div
            className={`navbar-menu-item ${
              showProductsDropdown ? 'dropdown-active' : ''
            }`}
          >
            Products{' '}
            {isMobileView &&
              (showProductsDropdown ? <FaAngleUp /> : <FaAngleDown />)}
          </div>
          {showProductsDropdown && (
            <div className="dropdown-menu">
              <Link to="/products/product1" className="dropdown-item">
                Product 1
              </Link>
              <Link to="/products/product2" className="dropdown-item">
                Product 2
              </Link>
              <Link to="/products/product3" className="dropdown-item">
                Product 3
              </Link>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div
          className={`dropdown ${
            showServicesDropdown ? 'dropdown-active' : ''
          }`}
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
          onClick={toggleServicesDropdown}
          onKeyDown={(e) => handleKeyDown(e, toggleServicesDropdown)}
          tabIndex="0" // Allows div to be focusable via keyboard/tab
        >
          <div
            className={`navbar-menu-item ${
              showServicesDropdown ? 'dropdown-active' : ''
            }`}
          >
            Services{' '}
            {isMobileView &&
              (showServicesDropdown ? <FaAngleUp /> : <FaAngleDown />)}
          </div>

          {showServicesDropdown && (
            <div className="dropdown-menu">
              <Link to="/services/data-entry" className="dropdown-item">
                Data Entry
              </Link>
              <Link to="/services/data-processing" className="dropdown-item">
                Data Processing
              </Link>
              <Link to="/services/data-conversion" className="dropdown-item">
                Data Conversion
              </Link>
            </div>
          )}
        </div>

        <NavLink to="team" className="navbar-menu-item">
          Team
        </NavLink>

        <NavLink to="contact" className="navbar-menu-item">
          Contact
        </NavLink>

        <NavLink to="about" className="navbar-menu-item">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
