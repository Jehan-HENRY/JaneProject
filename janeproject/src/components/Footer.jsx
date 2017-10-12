import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Footer extends Component {
	render() {
		return (
      <Menu className="sovietFooter" size='huge' inverted widths={1}>
        <Menu.Item >Elle est où Jane ?</Menu.Item>

      </Menu>
		);
	}
}

export default Footer;
