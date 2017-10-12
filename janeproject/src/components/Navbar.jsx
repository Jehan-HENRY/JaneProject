import React, {PropTypes} from "react";
import {Menu} from 'semantic-ui-react';
import {browserHistory} from 'react-router';
import logo from '../../img/cat.png';
import './NavBar.css';

const NavBar = ({path}) =>(
<Menu>
<Menu.Menu>
<Menu.Item onClick={()=>browserHistory.push('/')}>
Hello to U   <img className='NavBar-logo' src={logo} alt='logo'/>
</Menu.Item>
</Menu.Menu>
<Menu.Menu position="right">
<Menu.Item active={path ==='/signup'} onClick={()=>browserHistory.push('/signup')}>
Sign up
</Menu.Item>
<Menu.Item active={path ==='/login'} onClick={()=>browserHistory.push('/login')}>
Login
</Menu.Item>
</Menu.Menu>
</Menu>
);

NavBar.propTypes = {
  path:PropTypes.string.isRequired
}

export default NavBar;
