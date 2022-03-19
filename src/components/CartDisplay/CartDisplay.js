import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';

const CartDisplay = () => {
  const { removeItem, cartItems } = useContext(CartContext);

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
      <div className="cart--display--wrap">{renderCartItems()}</div>
    </section>
  );
};

export default CartDisplay;
