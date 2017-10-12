import React, {Component, PropTypes} from 'react';
import Footer from "./components/Footer.jsx"
import './stylesheets/App.css';


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
