import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    const {children, location} =this.props
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

export default App;
