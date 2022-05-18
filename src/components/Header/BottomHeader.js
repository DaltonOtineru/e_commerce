import React from 'react';
import './BottomHeader.scss';
import { Link } from 'react-router-dom';

const BottomHeader = () => {
  return (
    <section className="bottom--header">
      <div className="bottom--inner">
        <div className="bottom content">
          <h3 className="shipping">
            Free Shipping + Returns, Free Membership, Exclusive Products
          </h3>
          <Link to="/login" className="shipping--join--now">
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BottomHeader;
