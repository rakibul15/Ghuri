import { logDOM } from "@testing-library/react";
import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import "./Topnav.css";
import logo from "../../images/logo/logo.svg";
import { Link } from "react-router-dom";
import { SetRiderectMessage } from "../Signup/_redux/action/SignupAction";


const Topnav = () => {
  const dispatch = useDispatch()
  const riderectMessage=()=>{
    dispatch(SetRiderectMessage())
  }
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
            <Nav.Link className="active">
              <Link to="/home"> Home</Link>
            </Nav.Link>
            <Nav.Link className="px-4 active">
              <Link to="/marchent" onClick={()=>riderectMessage()}> Merchant</Link>
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
