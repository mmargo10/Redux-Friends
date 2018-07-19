import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import friendsReducer from './friendsReducer';
// import fetchFriends from './friendAction';

import './index.css';
import App from './App';

const store = createStore(combineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware(thunk, logger),

);


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root')
);

