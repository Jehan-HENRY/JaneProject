import React, {PropTypes, Component} from "react";
import {browserHistory} from 'react-router';
import {Menu} from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    console.log(this);
    const {path}=this.props
     return (
      <Menu style={{marginTop: "0px!important"}}>
        <Menu.Menu>
          <Menu.Item onClick={() => browserHistory.push('/')}>
            PokeJane
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item active={path === 'list'} onClick={() => browserHistory.push('/list')}>
            Liste
          </Menu.Item>
          <Menu.Item active={path === '/'} onClick={() => browserHistory.push('/')}>
            Accueil
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

NavBar.propTypes = {
  path: PropTypes.string.isRequired
}

export default NavBar;
