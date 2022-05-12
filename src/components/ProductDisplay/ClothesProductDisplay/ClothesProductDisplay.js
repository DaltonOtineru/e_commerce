import React from 'react';
import ClothesProductItem from './ClothesProductItem';
import './ClothesDisplay.scss';
import { clothingProducts } from '../../../productData/clothingData';

const ClothesProductDisplay = () => {
  const renderProducts = () => {
    return clothingProducts.map((product, index) => (
      <ClothesProductItem
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
    <div className="clothes--display">
      <div className="clothes--display--wrap">{renderProducts()}</div>
    </div>
  );
};

export default ClothesProductDisplay;
