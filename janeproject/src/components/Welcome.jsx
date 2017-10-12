import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import background from '../img/welcome.jpg'

class Welcome extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <Image src={background} fluid/>
      </div>
    );
  }
}

export default Welcome;
