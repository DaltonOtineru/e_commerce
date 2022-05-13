import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.scss';
import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';
import { Button } from '@mui/material';
import { BsArrowLeft } from 'react-icons/bs';

const CartDisplay = () => {
  const cart = useSelector((state) => state.cart);

  // const [total, setTotal] = useState(0);
  // let totalCartPrice = 0;
  // useEffect(() => {
  //   const renderCartTotal = () => {
  //     cartItems.map((item) => {
  //       totalCartPrice += item.price;
  //       return setTotal(totalCartPrice.toFixed(2));
  //     });
  //   };
  //   renderCartTotal();
  // }, [cartItems]);

  const renderCartItems = () => {
    return cart.cartItems.map((item, index) => (
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
    // <>
    <section
      className={
        cart.cartItems.length === 0 ? 'cart--display empty' : 'cart--display'
      }
    >
      <h2 className="cart--header">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        // <div className="cart--container--empty">
        //   <h2>Shopping Cart</h2>
        //   <div className='cart--empty--inner'>
        //     <div className="cart--empty">
        //       <p>Your cart is currently empty</p>
        //       <div className="start--shopping">
        //         <Link to="/" className="start--shopping--link">
        //           <BsArrowLeft className="arrow--icon" />
        //           <span>Start Shopping</span>
        //         </Link>
        //       </div>
        //     </div>
        //   </div>
        // </div>
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
                      <button className="remove--btn">Remove</button>
                    </div>
                  </div>
                  <div className="cart--product--price">{`$${cartItem.price}`}</div>
                  <div className="cart--product--quantity">
                    <button className="quantity--btn--left">-</button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button className="quantity--btn--right">+</button>
                  </div>
                  <div className="cart--product--total--price">
                    {`$${cartItem.price * cartItem.cartQuantity}`}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart--summary">
            <button className="clear--cart">Clear Cart</button>
            <div className="cart--checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">{`$${cart.cartTotalAmount}`}</span>
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
  {
    /* <section
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
                {cartItems.length} items | {`$${total}`}
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
      </>
      )}
    </section> */
  }
};

export default CartDisplay;
