import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <a href="/">
          <img
            src="logo-incisive-solutions.png"
            alt="Incisive Solutions Logo"
          />
        </a>

      </div> */}

      <Link to="/" className="navbar-logo">
        {/* <img
            src="logo-incisive-solutions.png"
            alt="Incisive Solutions Logo"
          /> */}
        <h1>Incisive Solutions
          {/* <span className="brand-color-1">Incisive </span>
          <span className="brand-color-2">Solutions</span> */}
        </h1>
      </Link>

      {/* <img
            src="logo-incisive-solutions.png"
            alt="Incisive Solutions Logo"
            className="navbar-logo"
          /> */}

      <div className="navbar-menu">
        <NavLink to="/" className="navbar-menu-item">
          Home
        </NavLink>

        <NavLink to="products" className="navbar-menu-item">
          Products
          {/* <span>
            <RiArrowDropDownLine className="dropdown-arrow" />
          </span> */}
        </NavLink>

        <NavLink to="services" className="navbar-menu-item">
          Services
          {/* <span>
            <RiArrowDropDownLine className="dropdown-arrow" />
          </span> */}
        </NavLink>
        {/* <select>
          <option>BPO Services</option>
          <option>Data Entry Services</option>
          <option>Web Designing</option>
          <option>IT Services</option>
        </select> */}

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
