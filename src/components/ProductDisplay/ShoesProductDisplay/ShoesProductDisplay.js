import React from 'react';
import { shoesProducts } from '../../../productData/shoesData';
import ShoesProductItem from './ShoesProductItem';
import './ShoesDisplay.scss';

const ShoesProductDisplay = () => {
  const renderProducts = () => {
    return shoesProducts.map((product, index) => (
      <ShoesProductItem
        product={product}
        img={product.image}
        id={product._id}
        name={product.name}
        price={product.price}
        key={index}
      />
    ));
  };

  return (
    <div className="shoes--display">
      <div className="shoes--display--wrap">{renderProducts()}</div>
    </div>
  );
};

export default ShoesProductDisplay;
