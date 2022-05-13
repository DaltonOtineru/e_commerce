import React, { useReducer, useEffect } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import cartApi from '../../api/api';
import { ADD_TO_CART, REMOVE_ITEM, CART_TOTAL } from '../types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const CartState = ({ children }) => {
  const initalState = {
    cartItems: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
    cartPrice: 0,
    // cartQuantity: 0,
  };

  // const cartCollectionRef = collection(db, 'cart');

  const [state, dispatch] = useReducer(CartReducer, initalState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state]);

  const addToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id,
    });
  };
  const cartTotal = () => {
    dispatch({
      type: CART_TOTAL,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        cartPrice: state.cartPrice,
        addToCart,
        removeItem,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
