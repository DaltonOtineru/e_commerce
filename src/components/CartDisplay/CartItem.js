import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

const CartItem = () => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart--item">
      <div className=""></div>
    </div>
  );
};

export default CartItem;
