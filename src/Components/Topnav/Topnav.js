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
            <div class="dropdown_main">
            <Nav.Link className="dropdown">Service <i class="fa fa-caret-down"></i></Nav.Link>
            <div
                class="dropdown_menu  drop_down_custom show drop_down_content"
                aria-labelledby="menu-item-dropdown-223"
                role="menu"
                >
                <div className="row drop_down_margin">
                  <div className="col-sm-12 col-md-6  ">
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
                  <div className="col-sm-12 col-md-6">
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
                  <div className="col-sm-12 col-md-6">
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
                  <div className="col-sm-12 col-md-6">
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

                <hr />
                <div className="row ml-2 download_app_all">
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
                        title="Google Play"
                      />
                    </a>

                    <a>
                      <img
                        width="146"
                        height="44"
                        src="https://pathao.com/wp-content/uploads/2018/12/App-Store-nb.png"
                        title="App-Store"
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
                        title="Google Play"
                      />
                    </a>
                  </div>
                </div>
              </div>
          </div>



            {/* Dropdown for small Screen Only */}
            <NavDropdown
              title="Services"
              id="collasible-nav-dropdown"
              className="nav_dropdown"
            >
                
           
            <div
                class="dropdown-menu  drop_down_custom show drop_down_content"
                aria-labelledby="menu-item-dropdown-223"
                role="menu"
                >
                <div className="row drop_down_margin">
                  <div className="col-sm-12 col-md-6  ">
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
                  <div className="col-sm-12 col-md-6">
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
                  <div className="col-sm-12 col-md-6">
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
                  <div className="col-sm-12 col-md-6">
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

                <hr />
                <div className="row ml-2 download_app_all">
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
                        title="Google Play"
                      />
                    </a>

                    <a>
                      <img
                        width="146"
                        height="44"
                        src="https://pathao.com/wp-content/uploads/2018/12/App-Store-nb.png"
                        title="App-Store"
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
                        title="Google Play"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </NavDropdown>
            {/* End DropDown */}

        
            <NavDropdown
              className="marchent_custom"
              title="Merchant"
              id="collasible-nav-dropdown"
            >
              <div className="merchant_drop m-1">
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
                  <a
                    title="Health"
                    href="/merchant"
                    onClick={() => riderectMessage()}
                    className="hover_color"
                    class="dropdown-item"
                  >
                    Signup
                    <span class="sub">Get Your Food in Less Than an Hour</span>
                  </a>
                </li>
              </div>

              <div className="merchant_drop m-1">
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
                  <a
                    title="Health"
                    target="_Blank"
                    className="hover_color"
                    href={`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`}
                    class="dropdown-item"
                  >
                    Login
                    <span class="sub">Get Your Food in Less Than an Hour</span>
                  </a>
                </li>
              </div>
            </NavDropdown>

            <div className="merchant_dropdown">
            <Nav.Link className="dropdown">Merchant<i class="fa fa-caret-down"></i></Nav.Link>
            <div className="merchant_content">
            <div className="merchant_drop m-1">
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
                  <a
                    title="Health"
                    href="/merchant"
                    onClick={() => riderectMessage()}
                    className="hover_color"
                    class="dropdown-item"
                  >
                    Signup
                    <span class="sub">Get Your Food in Less Than an Hour</span>
                  </a>
                </li>
              </div>
              <div className="merchant_drop m-1">
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
                  <a
                    title="Health"
                    target="_Blank"
                    className="hover_color"
                    href={`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`}
                    class="dropdown-item"
                  >
                    Login
                    <span class="sub">Get Your Food in Less Than an Hour</span>
                  </a>
                </li>
              </div>

            </div>

            </div>
           
            


            {/* <Nav.Link href="/health" className="nav_color">
              Health
            </Nav.Link> */}
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
