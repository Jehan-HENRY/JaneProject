import React from 'react';
import { Router,Route, IndexRoute } from 'react-router';
// import {history} from './redux/store';
 import {browserHistory} from 'react-router';
import App from './App';
import Home from './components/Home.jsx';
import ListPokemon from './components/ListPokemon.jsx';
import CardPokemon from './components/CardPokemon.jsx';


export default() => (
  <Router history={browserHistory}>
  <Route path='/' component={App}>
  <IndexRoute component={Home}/>
  <Route path='list' component={ListPokemon}/>
  <Route path='card' component={CardPokemon}/>
</Route>

</Router>
);
