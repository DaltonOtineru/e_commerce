import React, { useReducer, useEffect } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import cartApi from '../../api/api';
import { ADD_TO_CART, REMOVE_ITEM } from '../types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const CartState = ({ children }) => {
  const initalState = {
    cartItems: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
  };

  // const cartCollectionRef = collection(db, 'cart');

  const [state, dispatch] = useReducer(CartReducer, initalState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state]);

  // const addToCart = async () => {
  //   await addDoc(cartCollectionRef, {

  //   })
  // }
  // const addToCart = (item) => {
  //   return async (dispatch) => {
  //     const response = await cartApi.post('/cart/', response.data);

  //     dispatch({
  //       type: ADD_TO_CART,
  //       payload: response.data,
  //     });
  //   };
  // };
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

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
