import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// our app state will be a plain JS object
const initialState = {
  darkMode: false,
  user: null,
  shoppingCart: {
    total: 0,
    items: []
  }
};

function reducer(state = initialState, action) {
  // this should calculate the new app state
  // we won't modify the existing state directly!
  switch(action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode
      };

    // the two below are examples; they aren't active in this app
    case 'ADD_CART_ITEM':
      return {
        ...state,
        shoppingCart: {
          total: state.shoppingCart.total + action.payload.price,
          items: [...state.shoppingCart.items, action.payload]
        }
      }
    case 'LOGOUT':
      return {
        ...initialState
      };

    default: // action doesn't match one of our types
      return state;
  }
}

// this is our global app store
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* connecting our store to the app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
