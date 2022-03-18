import React from 'react';
import './Essentials.scss';
import ShopButton from '../shared/ShopButton';

import '../../fonts/nikeFutura/FuturaExtraBoldCondensed.ttf';

const Essentials = ({ label }) => {
  return (
    <section className="essentials">
      <div className="essentials--inner">
        <div className="essentials--content">
          <h3 className="essential--header">Essentials For Spring Break</h3>
          <p className="essential--text">
            Be ready for adventure: add trunks and kicks that'll take you
            anywhere.
          </p>
          <div className="essential--btn--wrap">
            <ShopButton className="essential--btn" label="shop">
              {label}
            </ShopButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essentials;
