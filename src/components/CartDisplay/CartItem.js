import React, { useContext } from 'react';

import CartContext from '../../context/cart/CartContext';
import { Button } from '@mui/material';

const CartItem = (props) => {
  const { removeItem } = useContext(CartContext);
  const { img, item, name, price } = props;
  console.log('Cart ITEMMMM');
  return (
    <div className="cart--item">
      <div className="cart--item--inner">
        <div className="img--and--name">
          <img src={img} className="cart--img" alt="cart product" />
          <div className="cart--name--price">
            <span className="cart--item--name">{name}</span>
            <span className="cart--price-remove">{price}</span>
          </div>
        </div>
        <div className="cart--total--remove">
          {/* <span className="cart--price-remove">{price}</span> */}
          <Button onClick={() => removeItem(item._id)} variant="contained">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
