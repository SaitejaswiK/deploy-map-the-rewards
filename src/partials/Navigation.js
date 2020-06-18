import React from "react";
import firebase from "../firebase/index";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  DropdownItem
} from "reactstrap";

export default class Navigation extends React.Component {

  userLogout = e => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><h2>Map the Rewards</h2></NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
            <DropdownItem onClick={this.userLogout}>Logout</DropdownItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
