import React from 'react';
import './TopHeader.scss';
import { Link } from 'react-router-dom';
import { SiJordan } from 'react-icons/si';

const TopHeader = () => {
  return (
    <div className="top--header">
      <div className="top--header--inner">
        <div className="top--header--brand"></div>
        <div className="top--header--links">
          <Link to="/" className="top--header--link">
            Contact
          </Link>
          <span className="link--line"></span>
          <Link to="/login" className="top--header--link">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
