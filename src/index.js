import ReactDOM from 'react-dom';

import App from './components/App/App';
import CartState from './context/cart/CartState';

ReactDOM.render(
  <CartState>
    <App />
  </CartState>,
  document.getElementById('root')
);
