import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

function Navbar() {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 868);

  const handleProductsEnter = () => setShowProductsDropdown(true);
  const handleProductsLeave = () => setShowProductsDropdown(false);
  const handleServicesEnter = () => setShowServicesDropdown(true);
  const handleServicesLeave = () => setShowServicesDropdown(false);

  const toggleProductsDropdown = () =>
    setShowProductsDropdown(!showProductsDropdown);
  const toggleServicesDropdown = () =>
    setShowServicesDropdown(!showServicesDropdown);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 868);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <Link to="/" className="navbar-logo">
        <h1>Incisive Solutions</h1>
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
        >
          <NavLink
            to="products"
            className={`navbar-menu-item ${
              showProductsDropdown ? 'dropdown-active' : ''
            }`}
          >
            Products{' '}
            {isMobileView &&
              (showProductsDropdown ? <FaAngleUp /> : <FaAngleDown />)}
          </NavLink>
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
        >
          <NavLink
            to="services"
            className={`navbar-menu-item ${
              showServicesDropdown ? 'dropdown-active' : ''
            }`}
          >
            Services{' '}
            {isMobileView &&
              (showServicesDropdown ? <FaAngleUp /> : <FaAngleDown />)}
          </NavLink>

          {showServicesDropdown && (
            <div className="dropdown-menu">
              <Link to="/services/service1" className="dropdown-item">
                Service 1
              </Link>
              <Link to="/services/service2" className="dropdown-item">
                Service 2
              </Link>
              <Link to="/services/service3" className="dropdown-item">
                Service 3
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
