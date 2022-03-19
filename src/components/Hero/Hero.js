import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import denim from '../../assets/denim_adidas.jpg';
import bridge from '../../assets/bridge_adidas.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero--inner">
        <aside className="hero--left">
          <img
            className="demin--img hero--img"
            src={denim}
            alt="Woman wearing adidas shoes"
          />
          <div className="hero--text text--left">
            <div className="hero--overlay--content">
              <div className="hero--btn--container">
                <Link to="/" className="hero--btn">
                  Women
                  <i className="fa-solid fa-arrow-right-long hero--arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <aside className="hero--right">
          <img
            className="bridge--img hero--img"
            src={bridge}
            alt="Man with adidas backpack on bridge"
          />
          <div className="hero--text text--left">
            <div className="hero--overlay--content">
              <div className="hero--btn--container--right">
                <Link to="/mens" className="hero--btn--right">
                  Men
                  <i className="fa-solid fa-arrow-right-long hero--arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
