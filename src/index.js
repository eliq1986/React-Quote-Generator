import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import quotesReducer from './reducers';
import App from './components/App';




//quotes={quotes}
ReactDOM.render(
<Provider store={createStore(quotesReducer)}>
  <App />
</Provider>
  , document.getElementById("root"))
