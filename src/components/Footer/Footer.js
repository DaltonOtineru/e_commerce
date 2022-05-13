import React from 'react';

import { Link } from 'react-router-dom';
import './Footer.scss';
import { CgAdidas } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { SiTwitter } from 'react-icons/si';
import { FaPinterestSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--inner">
        <div className="footer--left">
          <Link to="/" className="adidas--footer--link">
            <CgAdidas className="adidas--footer" />
            <span className="logo--text">Adidas</span>
          </Link>
          <div className="footer--socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <BsYoutube />
            </a>
            <a href="#">
              <SiTwitter />
            </a>
            <a href="#">
              <FaPinterestSquare />
            </a>
            <a href="#">
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="footer--links col1">
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Blog</Link>
        </div>
        <div className="footer--links col2">
          <Link to="/">Careers</Link>
          <Link to="/">Support</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
        <div className="footer--right">
          <div className="footer--cta">
            <Link to="/">
              <button className="cta--btn">Discount Code</button>
            </Link>
          </div>
          <div className="footer--copyright">
            <span className="cta--text">&copy;Adidas. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
