import { logDOM } from "@testing-library/react";
import React from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import "./Topnav.css";
import logo from "../../images/logo/logo.svg";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" navbar-dark mb-5>
        <Navbar.Brand>
          <Link to="/home">
            <img className="ghuri_logo img-fluid" src={logo} fluid />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="px-4 active">
              <Link to="/home"> Home</Link>
            </Nav.Link>
            <Nav.Link className="language">
             <Link> <i class="fa fa-globe"></i> EN</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topnav;
