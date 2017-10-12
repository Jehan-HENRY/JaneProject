import React, { Component } from 'react';
import NavBar from './Navbar.jsx';

class List extends Component {
	render() {
    const {path} = this.props.route
    console.log(this);
    return (
      <div >
        <NavBar path={path}/>
				<h1>i'm the list</h1>
			</div>
		);
	}
}

export default List;
