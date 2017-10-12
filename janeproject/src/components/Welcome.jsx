import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import background from '../img/welcome.jpg'
import welcome1 from "../img/welcome1.png";
import welcome2 from "../img/welcome2.png";

class Welcome extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <div className="one" />
        <div className="two" />
      </div>
    );
  }
}

export default Welcome;
