import React, { useContext } from 'react';
import CartContext from '../../../context/cart/CartContext';
import { Button } from '@mui/material';

const WomensProductItem = (props) => {
  const { img, name, price, product } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="womens--item">
      <div className="womens--item--inner">
        <div className="womens--img--wrap">
          <img src={img} alt={name} className="womens--img" />
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

export default WomensProductItem;
