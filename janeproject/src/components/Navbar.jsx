import React, {Component} from "react";
import {browserHistory} from 'react-router';
import {Menu} from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    const {path}=this.props
     return (
      <Menu size="huge" style={{marginTop: "0px!important", backgroundColor:"firebrick", }}>
        <Menu.Menu>
          <Menu.Item className="fontNav" onClick={() => browserHistory.push({state: { visible: false },pathname: '/'})}>
            Accueil
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item className="fontNav" active={path === 'list'} onClick={() => browserHistory.push('/list')}>
            Liste
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}


export default NavBar;
