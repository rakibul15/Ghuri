// import { logDOM } from "@testing-library/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Topnav.css";
import logo from "../../images/logo/logo.svg";
import { Link } from "react-router-dom";
import { SetRiderectMessage } from "../Signup/_redux/action/SignupAction";

const Topnav = () => {
  const dispatch = useDispatch();
  const riderectMessage = () => {
    dispatch(SetRiderectMessage());
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" className="fixed" mb-5>
        <Navbar.Brand>
          <Link to="/">
            <img className="ghuri_logo img-fluid" src={logo} fluid alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ghuri_nav">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_Blank"
                href="https://nuraniinteriorbd.com/"
              >
                Nurani Interior
              </NavDropdown.Item>
              <NavDropdown.Item target="_Blank" href="https://nuraniradio.com/">
                Nurani Radio
              </NavDropdown.Item>

              {/* <NavDropdown.Item href="/ParcelDetails">Parcel</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Merchant" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="/merchant"
                onClick={() => riderectMessage()}
                className="hover_color"
              >
                Signup
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_Blank"
                className="hover_color"
                href={`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`}
              >
                Login
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/health" className="nav_color">
              Health
            </Nav.Link>
            {/* <Nav.Link className="nav_color">
              <Link to="/blog">Blog</Link>
            </Nav.Link> */}
            <Nav.Link className="custom_nav">
              <i className="fa fa-globe"></i> EN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topnav;
