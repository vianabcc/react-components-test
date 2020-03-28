import React from 'react';
import { Menu } from "semantic-ui-react";
import logo from "../logo.svg";
import "./styles.css"

const Navbar = () => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>
        MyFullFeatureList <img src={logo} alt="logo" className="Navbar-logo"/>
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item>
        Sign up
      </Menu.Item>
      <Menu.Item>
        Login
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
