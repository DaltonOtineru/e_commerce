import ReactDOM from 'react-dom';
import App from './components/App/App';
// import CartState from './context/cart/CartState';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer, { getTotals } from './redux/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(getTotals());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
