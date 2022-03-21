import React from 'react';

import { mensProducts } from '../../../productData/mensProducts';
import MensProductItem from './MensProductItem';
import './MensDisplay.scss';

const MensProductDisplay = () => {
  const renderProducts = () => {
    return mensProducts.map((product, index) => (
      <MensProductItem
        product={product}
        img={product.image}
        id={product._id}
        name={product.name}
        key={index}
        price={product.price}
      />
    ));
  };

  return (
    <section className="mens--display">
      <div className="mens--display--wrap">{renderProducts()}</div>
    </section>
  );
};

export default MensProductDisplay;
