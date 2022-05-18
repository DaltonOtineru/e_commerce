import React from 'react';
import './Essentials.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Essentials = ({ label }) => {
  return (
    <section className="essentials">
      <div className="essentials--inner">
        <div className="essentials--content">
          <h3 className="essential--header">Essentials For Summer</h3>
          <p className="essential--text">
            Be ready for adventure: add kicks that'll take you anywhere.
          </p>
          <div className="essential--btn--wrap">
            <Button
              as={Link}
              className="essential--btn"
              to="shoes"
              variant="contained"
            >
              Shop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essentials;
