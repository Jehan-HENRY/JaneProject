import React from 'react';
import { Router,Route, IndexRoute } from 'react-router';
// import {history} from './redux/store';
 import {browserHistory} from 'react-router';
import App from './App';
import Welcome from './components/Welcome.jsx';
import Home from './components/Home.jsx';
import List from './components/List.jsx';
import Card from './components/Card.jsx';


export default() => (
  <Router history={browserHistory}>
  <Route path='/' component={App}>
  <IndexRoute component={Welcome}/>
  <Route path='home' component={Home}/>
  <Route path='list' component={List}/>
  <Route path='card' component={Card}/>
</Route>

</Router>
);
