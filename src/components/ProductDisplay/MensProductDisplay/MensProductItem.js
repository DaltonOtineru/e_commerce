import React from 'react';

import './MensDisplay.scss';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

const MensProductItem = (props) => {
  const { img, name, price, product } = props;

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="mens--item">
      <div className="mens--item--inner">
        <div className="mens--img--wrap">
          <img src={img} alt={name} className="mens--img" />
        </div>
        <div className="item--name--wrap">
          <h6 className="item--name">{name}</h6>
        </div>
        <div className="item--price--wrap">
          <span className="item--price">${price}</span>
        </div>
        <div className="add--cart--wrap">
          <Button
            label="Add to Cart"
            id="add--to--cart"
            onClick={() => handleAddToCart(product)}
            variant="contained"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MensProductItem;
