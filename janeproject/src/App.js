import React, {Component, PropTypes} from 'react';
<<<<<<< HEAD
import Footer from "./components/Footer.jsx"
import './stylesheets/App.css';

=======
import logo from './logo.svg';
import './App.css';
>>>>>>> d938c91243416e8a9ab4d91448db2cf05a0c0f60

class App extends Component {
  render() {
    console.log(this)
    const {children} =this.props
    return (
      <div className="App">
        <div>
      {children}
    </div>
    <Footer />
      </div>
    );
  }
}
App.propTypes ={
children: PropTypes.element.isRequired,
// location: PropTypes.object.isRequired,
}

export default App;
