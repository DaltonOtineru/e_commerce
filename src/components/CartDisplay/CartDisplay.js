import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss';
import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';
// import cartApi from '../../api/api';
import { Button } from '@mui/material';
import { CART_TOTAL } from '../../context/types';

const CartDisplay = () => {
  const { cartItems, cartPrice, cartTotal } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  let totalCartPrice = 0;
  useEffect(() => {
    const renderCartTotal = () => {
      cartItems.map((item) => {
        totalCartPrice += item.price;
        return setTotal(totalCartPrice.toFixed(2));
      });
    };
    renderCartTotal();
  }, [cartItems]);

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
    // <section className="cart--display empty">
    <section
      className={cartItems.length < 1 ? 'cart--display empty' : 'cart--display'}
    >
      {cartItems.length < 1 ? (
        <div className="cart--display--empty">
          <p className="cart--empty--text">
            There are no items currently in your cart
          </p>
        </div>
      ) : (
        <>
          <h2 className="cart--header">Your Cart</h2>
          <div className="cart--display--wrapper">
            {renderCartItems()}
            <div className="cart--total">
              <div className="cart--amount">
                {cartItems.length} Items | {`$${total}`}
              </div>
              <div className="cart--checkout">
                <Button
                  type="button"
                  variant="contained"
                  className="checkout--btn"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CartDisplay;
