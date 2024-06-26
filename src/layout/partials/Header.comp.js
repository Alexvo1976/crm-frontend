import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
// import { useHistory } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

import { userLogout } from "../../api/userApi";

export const Header = () => {
  // const history = useHistory();

  // const logMeOut = () => {
  //   sessionStorage.removeItem("accessJWT");
  //   localStorage.removeItem("crmSite");
  //   userLogout();
    // history.push("/");
  // };
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
      <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
            <Nav.Link>Dashboard</Nav.Link>
            <Nav.Link>Tickets</Nav.Link>
            <Nav.Link>Logout</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
 );
};

