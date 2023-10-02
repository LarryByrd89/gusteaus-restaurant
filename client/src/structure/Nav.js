import React, { useState } from 'react';
import siteIcon from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="logo-nav container">
          <div className="scrolling-words-container">
            <div className="scrolling-words-box">
              <ul>
                <li>1800 S Main St, Roswell NY </li>
                <li>575-627-0144</li>
                <li>Opening Hours From 1:00pm - 10:00pm</li>
              </ul>
            </div>
          </div>

          <div className="logo">
            <img src={siteIcon} alt="Le Bon Manges" />
          </div>

          <div className="nav">
            <nav>
              <label>
                <input type="checkbox" checked={isMenuOpen} onChange={() => setMenuOpen(!isMenuOpen)} />
                <span className="menu">
                  <span className="hamburger"></span>
                </span>
                <ul>
                  <li>
                    <Link to="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu" onClick={closeMenu}>
                      Menu
                    </Link>
                  </li>
                  <Link to="/reservation" onClick={closeMenu}>
                      Make A Reservation
                    </Link>
                  <li>
                    <Link to="/guest-membership" onClick={closeMenu}>
                      Guest Membership
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </label>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
