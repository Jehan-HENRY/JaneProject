import React from 'react';
import {render} from 'react-dom';
// import {Provider} from 'react-redux';
// import {store} from './redux/store';
import Router from './Routes.js';


render(
  // <Provider store={store}>
  <Router/>,
  // </Provider>
  document.getElementById('root')
);
