import React from 'react';
import { womensProducts } from '../../../productData/womensProducts';
import './WomensDisplay.scss';
import WomensProductItem from './WomensProductItem';

const WomensProductDisplay = () => {
  const renderProducts = () => {
    return womensProducts.map((product, index) => (
      <WomensProductItem
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
    <section className="womens--display">
      <div className="womens--display--wrap">{renderProducts()}</div>
    </section>
  );
};

export default WomensProductDisplay;
