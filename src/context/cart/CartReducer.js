import { ADD_TO_CART, REMOVE_ITEM, CART_TOTAL } from '../types';

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    case CART_TOTAL:
      return {
        ...state,
        cartPrice: state.cartItems.reduce(
          (accumulatedTotal, cartItem) =>
            accumulatedTotal + cartItem.price === action.payload,
          0
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
