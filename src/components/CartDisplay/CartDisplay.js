import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
} from '../../redux/cartSlice.js';
import './Cart.scss';
import { BsArrowLeft } from 'react-icons/bs';
// import CartItem from './CartItem';

const CartDisplay = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // const renderCartItems = () => {
  //   return cart.cartItems.map((item, index) => (
  //     <CartItem
  //       key={index}
  //       img={item.image}
  //       item={item}
  //       name={item.name}
  //       price={item.price}
  //       id={item._id}
  //     />
  //   ));
  // };

  return (
    <section
      className={cart.cartItems.length === 0 ? 'empty' : 'cart--display'}
    >
      <h2
        className={
          cart.cartItems.length === 0 ? 'header--hidden' : 'cart--header'
        }
      >
        Shopping Cart
      </h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart--display--empty">
          <p className="cart--empty--text">
            There are no items currently in your cart
          </p>
          <Link to="/" className="start--shopping--link">
            <BsArrowLeft className="arrow--icon" />
            <span>Start Shopping</span>
          </Link>
        </div>
      ) : (
        <>
          <div className="titles">
            <h3 className="product--title">Product</h3>
            <h3 className="price--title">Price</h3>
            <h3 className="quantity--title">Quantity</h3>
            <h3 className="total--title">Total</h3>
          </div>
          <div className="cart--items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart--item" key={cartItem._id}>
                  <div className="cart--product">
                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      className="cart--img"
                    />
                    <div className="cart--product--info">
                      <h3 className="cart--product--name">{cartItem.name}</h3>
                      <button
                        className="remove--btn"
                        onClick={() => handleRemoveFromCart(cartItem)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart--product--price">{`$${cartItem.price}`}</div>
                  <div className="cart--product--quantity">
                    <button
                      className="quantity--btn--left"
                      onClick={() => handleDecreaseCart(cartItem)}
                    >
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button
                      className="quantity--btn--right"
                      onClick={() => handleIncreaseCart(cartItem)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart--product--total--price">
                    {`$${cartItem.price * cartItem.cartQuantity}`}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart--summary">
            <button className="clear--cart" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart--checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">{`$${cart.cartTotalAmount.toFixed(
                  2
                )}`}</span>
              </div>
              <p className="taxes--shipping">
                Taxes and shipping calculated at checkout
              </p>
              <button className="checkout--btn">Checkout</button>
              <Link to="/" className="continue--shopping--link">
                <BsArrowLeft className="arrow--icon" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CartDisplay;
