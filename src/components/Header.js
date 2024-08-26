import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons'; // Add faBars for the menu icon
import '../styles/style.css';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false); // State for navbar visibility

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="images/logo.png" alt="Logo" />
      </a>

      <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#products">Products</a>
        <a href="#categories">Categories</a>
        <a href="#learn">Learn</a>
        <a href="#about">About</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div className="icons">
        <div id="search-btn" className="search-icon" onClick={() => setSearchActive(!searchActive)}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div id="profile-btn" className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div id="menu-btn" className="fas fa-bars" onClick={() => setNavbarActive(!navbarActive)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <form className={`search-form ${searchActive ? 'active' : ''}`}>
        <input type="search" placeholder="Search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>
    </header>
  );
};

export default Header;
