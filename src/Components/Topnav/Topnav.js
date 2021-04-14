// import { logDOM } from "@testing-library/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
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
  const handleRedirect = () => {
    // window.open("https://ocean.ghuriexpress.com/#/login", "_blank");
    window.open(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`, "_blank");
  };
  const riderectNuraniInterior = () => {
     window.open("https://nuraniinteriorbd.com/", "_blank");
   
  };
  const riderectNuraniRadio = () => {
    window.open("https://nuraniradio.com/", "_blank");
  
 };

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" className="fixed"   mb-5>
        <Navbar.Brand>
          <Link to="/">
            <img className="ghuri_logo img-fluid" src={logo} fluid alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav_color">
              <Link to="/home"> Home</Link>
            </Nav.Link>

            <Nav.Link>
              <DropdownButton title="Services" variant="none">
                <Dropdown.Item className="hover_color">
                  <Link to="#" className="drop_down_menu">
                    <a href onClick={() => riderectNuraniInterior()}>
                      Nurani Interior
                    </a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className="hover_color">
                  <Link to="#" className="drop_down_menu">
                    <a href onClick={() => riderectNuraniRadio()}>
                      Nurani Radio
                    </a>
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
            </Nav.Link>

            <Nav.Link>
              <DropdownButton
                id="dropdown-basic-button"
                title="Merchant"
                variant="none"
              >
                <Dropdown.Item className="hover_color">
                  <Link
                    className="drop_down_menu"
                    to="/merchnat"
                    onClick={() => riderectMessage()}
                  >
                    <a href
                    
                    > Signup</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className="hover_color">
                  <Link  to="#" className="drop_down_menu">
                    <a href
                    

                      onClick={() => handleRedirect()}
                    >
                      Login
                    </a>
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
            </Nav.Link>
            <Nav.Link className="nav_color">
            <Link to="/health"> Health</Link>
            </Nav.Link>
            <Nav.Link className="nav_color">
            <Link to="/blog"> Blog</Link>
            </Nav.Link>
            <Nav.Link className="language">
              <Link to="#">
                <i className="fa fa-globe"></i> EN
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topnav;
