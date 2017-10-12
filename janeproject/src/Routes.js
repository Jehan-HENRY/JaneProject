import React from 'react';
import { Router,Route, IndexRoute } from 'react-router';
// import {history} from './redux/store';
 import {browserHistory} from 'react-router';
import App from './App';
import {Layout} from './components/Layout.jsx';
import {MainView} from './components/MainView.jsx';
import {List} from './components/List.jsx';
import {Card} from './components/Card.jsx';


export default() => (
  <Router history={browserHistory}>
  <Route path='/' component={App}>
  <IndexRoute component={Layout}/>
  <Route path='/Home' component={MainView}/>
  <Route path='/List' component={List}/>
  <Route path='/Card' component={Card}/>
</Route>
<Route path='/' component={App}/>
</Router>
);
