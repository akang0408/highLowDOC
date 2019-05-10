import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    font-size: 15px;
    padding: 3%;
  } 
`

const store = createStore(rootReducer, applyMiddleware(thunk));

// store.dispatch(startGame());
// store.dispatch(cancelGame());
// store.dispatch(expandInstructions());
// store.dispatch(collapseInstructions());


console.log('store.getState', store.getState())
console.log('store', store)

store.subscribe(() => console.log('store.getState()', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
