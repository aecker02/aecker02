import React from "react";
import { Link } from "gatsby";

import PropTypes from "prop-types";

import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__column footer__logo">
          <img
            className="footer__logo"
            src={"http://acmelogos.com/images/logo-8.svg"}
            alt="Chauffeur Services London"
          />
        </div>
        <div className="footer__column footer__nav-links">
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/quote">Get a Quote</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__column footer__contact">
          <div className="footer__contact-divider">
            <span className="footer__contact--gold">Telephone: </span>
            <a className="footer__contact-item">0657466456464</a>
          </div>
          <div className="footer__contact-divider">
            <span className="footer__contact--gold">E-mail: </span>
            <a className="footer__contact-item">test@test.com</a>
          </div>
          <div className="footer__contact-divider">
            <span className="footer__contact--gold">Address: </span>
            <p className="footer__contact-item">
              123 Road Road, Manchester, UK, M1 3RD
            </p>
          </div>
        </div>
        <div className="footer__column footer__social">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
        <hr />
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
