import React from 'react';
import '../styles/components/Footer.scss';
import cutlery from '../assets/cutlery.svg';
import home from '../assets/house.svg';
import loupe from '../assets/loupe.svg';
import user from '../assets/user.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <nav className="footer-nav">
        <ul className="footer-menu">
          <li>
            <Link to="#">
              <img src={home} alt="home" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={cutlery} alt="cutlery" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={loupe} alt="loupe" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={user} alt="user" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
