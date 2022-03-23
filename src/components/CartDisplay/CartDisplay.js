import React, { useContext } from 'react';
import './Cart.scss';
import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';
import cartApi from '../../api/api';

const CartDisplay = () => {
  const { cartItems } = useContext(CartContext);
  console.log('cartDISPLAY');

  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <CartItem
        key={index}
        img={item.image}
        item={item}
        name={item.name}
        price={item.price}
        id={item._id}
      />
    ));
  };

  return (
    <section className="cart--display">
      <div className="cart--display--wrapper">{renderCartItems()}</div>
    </section>
  );
};

export default CartDisplay;
