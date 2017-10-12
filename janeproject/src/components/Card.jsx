import React, { Component } from 'react';
import NavBar from './Navbar.jsx';

class Card extends Component {
	render() {
    const {path} = this.props.route
    console.log(this);
    return (
      <div >
        <NavBar path={path}/>
				<h1>i'm the card</h1>
			</div>
		);
	}
}

export default Card;
