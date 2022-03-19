import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { SiNike, SiAdidas } from 'react-icons/si';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

const Navigation = () => {
  return (
    <section className="nav">
      <div className="nav--inner">
        <Link to="/" className="adidas--nav--link">
          <SiAdidas className="adidas--nav" />
        </Link>

        <div className="nav--links">
          <Link to="/" className="nav--link">
            New Releases
          </Link>
          <Link to="/" className="nav--link">
            Men
          </Link>
          <Link to="/" className="nav--link">
            Women
          </Link>
          <Link to="/" className="nav--link">
            Sale
          </Link>
        </div>
        <div className="nav--right">
          <Button className="button--login right" variant="contained">
            Sign In
          </Button>
          <div className="nav--icon--wrap">
            <Link to="cart" className="nav--icon">
              <FaShoppingCart className="button--cart right nav--icon" />
            </Link>
          </div>
          <div className="nav--icon--wrap">
            <FaBars
              id="button--bars"
              className="button--bars right nav--icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
