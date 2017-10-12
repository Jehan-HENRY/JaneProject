import React from 'react';
import { Router,Route, IndexRoute } from 'react-router';
// import {history} from './redux/store';
 import {browserHistory} from 'react-router';
import App from './App';
import Home from './components/Home.jsx';
import MainView from './components/MainView.jsx';
import List from './components/List.jsx';
import Card from './components/Card.jsx';


export default() => (
  <Router history={browserHistory}>
  <Route path='/' component={App}>
  <IndexRoute component={Home}/>
  <Route path='home' component={MainView}/>
  <Route path='list' component={List}/>
  <Route path='card' component={Card}/>
</Route>

</Router>
);
