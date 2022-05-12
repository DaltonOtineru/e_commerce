import React, { useContext } from 'react';
import CartContext from '../../../context/cart/CartContext';
import { Button } from '@mui/material';

const ClothesProductItem = (props) => {
  const { product, img, name, price } = props;
  const { addToCart } = useContext(CartContext);
  return (
    <div className="clothes--item">
      <div className="clothes--item--inner">
        <div className="clothes--img--wrap">
          <img src={img} alt={name} className="clothes--img" />
        </div>
        <div className="item--name--wrap">
          <h6 className="item--name">{name}</h6>
        </div>
        <div className="item--price--wrap">
          <span className="item--price">{`$${price.toFixed(2)}`}</span>
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

export default ClothesProductItem;
