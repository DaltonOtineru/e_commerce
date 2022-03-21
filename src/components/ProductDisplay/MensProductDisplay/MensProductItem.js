import React, { useContext } from 'react';
import CartContext from '../../../context/cart/CartContext';
import './MensDisplay.scss';
import { Button } from '@mui/material';

const MensProductItem = (props) => {
  const { img, name, price, product } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mens--item">
      <div className="mens--item--inner">
        <div className="mens--img--wrap">
          <img src={img} alt="product" className="mens--img" />
        </div>
        <div className="item--name--wrap">
          <h6 className="item--name">{name}</h6>
        </div>
        <div className="item--price--wrap">
          <span className="item--price">{price}</span>
        </div>
        <div className="add--cart--wrap">
          <Button
            label="Add to Cart"
            id="add--to--cart"
            onClick={() => addToCart(product)}
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
