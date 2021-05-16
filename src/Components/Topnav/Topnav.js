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
            <NavDropdown
              title="Services"
              id="collasible-nav-dropdown"
              className="nav_dropdown"
            >
              {/* <NavDropdown.Item className="menu-item" href="/ghuriparcel">
                Parcel
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menu-item item"
                target="_Blank"
                href="https://nuraniinteriorbd.com/"
              >
                Interior
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menu-item"
                target="_Blank"
                href="https://nuraniradio.com/"
              >
                News
              </NavDropdown.Item> */}
              <div
                class="dropdown-menu show drop_down_content"
                aria-labelledby="menu-item-dropdown-223"
                role="menu"
              >
                <div className="row">
                  <div className="col-sm-6  ">
                    <li
                      id="menu-item-144"
                      class="
        parcel_icon
        nav-icon
        menu-item
        menu-item-type-post_type
        menu-item-object-page menu-item-144
        nav-item
        car
      "
                    >
                      <a
                        title="Parcel"
                        href="/ghuriparcel"
                        class="dropdown-item"
                      >
                        {" "}
                        Parcel
                        <span class="sub">
                          On Demand Delivery at Your Doorstep
                        </span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-6">
                    <li
                      id="menu-item-144"
                      class="
        health_icon
        nav-icon
        menu-item
        menu-item-type-post_type
        menu-item-object-page menu-item-144
        nav-item
      "
                    >
                      <a title="Health" href="/health" class="dropdown-item">
                        Health
                        <span class="sub">
                          Get Your Food in Less Than an Hour
                        </span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-6">
                    <li
                      id="menu-item-144"
                      class="
        interior_icon
        nav-icon
        menu-item
        menu-item-type-post_type
        menu-item-object-page menu-item-144
        nav-item
      "
                    >
                      <a
                        target="_Blank"
                        title="Interior"
                        href="https://nuraniinteriorbd.com/"
                        class="dropdown-item"
                      >
                        Interior
                        <span class="sub">
                          Get Your Food in Less Than an Hour
                        </span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-6">
                    <li
                      id="menu-item-144"
                      class="
                      news_icon
                      nav-icon
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-144
                      nav-item
                      "
                    >
                      <a
                        title="News"
                        target="_Blank"
                        href="https://nuraniradio.com/"
                        class="dropdown-item"
                      >
                        News
                        <span class="sub">
                          Get Your Food in Less Than an Hour
                        </span>
                      </a>
                    </li>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-sm-6">
                    <li
                      id="menu-item-144"
                      class="
                      news_icon
                      nav-icon
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-144
                      nav-item
                      "
                    >
                      <a
                        title="News"
                        target="_Blank"
                        href="https://nuraniradio.com/"
                        class="dropdown-item"
                      >
                        News
                        <span class="sub">
                          Get Your Food in Less Than an Hour
                        </span>
                      </a>
                    </li>
                  </div>
                </div> */}
                <hr />
                <div className="row ml-2 mb-4 download_app_all">
                  <div className="col-md-6 col-sm-12">
                    <h6>Download User App</h6>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                      target="_Blank"
                    >
                      <img
                        width="146"
                        height="44"
                        src="https://pathao.com/wp-content/uploads/2018/12/Google-Play-nb.png"
                        title="Google-Play-nb"
                      />
                    </a>
                    <br />

                    <a>
                      <img
                        width="146"
                        height="44"
                        src="https://pathao.com/wp-content/uploads/2018/12/App-Store-nb.png"
                        title="App-Store-nb"
                      />
                    </a>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <h6>Download Drive App</h6>
                    <a
                      href="https://play.google.com/store/apps/details?id=ghuri.express.parcelfighter"
                      target="_Blank"
                    >
                      <img
                        width="146"
                        height="44"
                        src="https://pathao.com/wp-content/uploads/2018/12/Google-Play-nb.png"
                        title="Google-Play-nb"
                      />
                    </a>
                  </div>
                </div>
              </div>
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
            <Nav.Link className="nav_color">
              <Link to="/blog">Blog</Link>
            </Nav.Link>
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
