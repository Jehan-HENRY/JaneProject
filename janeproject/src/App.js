import React, {Component, PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    console.log(this)
    const {children} =this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
      {children}
    </div>
      </div>
    );
  }
}
App.propTypes ={
children: PropTypes.element.isRequired,
location: PropTypes.object.isRequired,
}

export default App;
