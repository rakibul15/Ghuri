/* eslint-disable jsx-a11y/alt-text */
// import { logDOM } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Topnav.css";
import logo from "../../images/logo/Anniversary-logo.png";
import { SetRiderectMessage } from "../Signup/_redux/action/SignupAction";
import gplay from "../../images/others/Google-Play-nb.png";
import appstore from "../../images/others/App-Store-nb.png";

const Topnav = () => {
  const dispatch = useDispatch();
  const riderectMessage = () => {
    dispatch(SetRiderectMessage());
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" className="fixed" mb-5>
        <Navbar.Brand>
          <a href="/">
            <img className="ghuri_logo img-fluid" src={logo} fluid alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ghuri_nav">
            <Nav.Link href="/home">Home</Nav.Link>

            <div className="dropdown_main">
              <Nav.Link className="dropdown">
                Service <i className="fa fa-caret-down"></i>
              </Nav.Link>
              <div
                className="dropdown_menu  drop_down_custom show drop_down_content"
                aria-labelledby="menu-item-dropdown-223"
                role="menu"
              >
                <div className="row drop_down_margin">
                  <div className="col-sm-12 col-md-6  ">
                    <li
                      id="menu-item-144"
                      className="
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
                        className="dropdown-item"
                      >
                        {" "}
                        Parcel
                        <span className="sub">
                          On Demand Delivery at Your Doorstep
                        </span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
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
                        href="/health"
                        className="dropdown-item"
                      >
                        Health
                        <span className="sub">Ghuri Health Service</span>
                      </a>
                    </li>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
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
                        className="dropdown-item"
                        rel="noreferrer"
                      >
                        Interior
                        <span className="sub">Extra Idea Our Asset</span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
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
                        className="dropdown-item"
                        rel="noreferrer"
                      >
                        News
                        <span className="sub">Your Right To Know</span>
                      </a>
                    </li>
                  </div>
                  {/* //////////////////Tanni-tickets///////////////////// */}

                  <div className="col-sm-12 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
                     
                      food_icon
                      nav-icon
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-144
                      nav-item
                      "
                    >
                     {/* <a title="Ticket" href="/ticket" class="dropdown-item">
                        Tickets
                        <span class="sub">Ghuri Ticket Service</span> */}
                      <a
                        title="Food"
                        href="/ghuriFood"
                        className="dropdown-item"
                      >
                        Food
                        <span className="sub">
                          {" "}
                          Get Your Food in Less Than an Hour
                        </span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
                      ticket_icon
                      nav-icon
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-144
                      nav-item
                      "
                    >
                     <a title="Ticket" href="/ticket" class="dropdown-item">
                        Tickets
                        <span class="sub">Ghuri Ticket Service</span>
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
                      rel="noreferrer"
                    >
                      <img
                        width="146"
                        height="44"
                        src={gplay}
                        title="Google Play"
                      />
                    </a>

                    <a href>
                      <img
                        width="146"
                        height="44"
                        src={appstore}
                        title="App-Store"
                      />
                    </a>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h6>Download Fighter App</h6>
                    <a
                      href="https://play.google.com/store/apps/details?id=ghuri.express.parcelfighter"
                      target="_Blank"
                      rel="noreferrer"
                    >
                      <img
                        width="146"
                        height="44"
                        src={gplay}
                        title="Google Play"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Nav.Link href={`${process.env.REACT_APP_BAZAR}`} target="_Blank">
              Bazar
            </Nav.Link>

            {/* Dropdown for small Screen Only */}
            <NavDropdown
              title="Services"
              id="collasible-nav-dropdown"
              className="nav_dropdown"
            >
              <div
                className="dropdown-menu  drop_down_custom show drop_down_content"
                aria-labelledby="menu-item-dropdown-223"
                role="menu"
              >
                <div className="row drop_down_margin">
                  <div className="col-sm-6 col-md-6  ">
                    <li
                      id="menu-item-144"
                      className="
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
                        className="dropdown-item"
                      >
                        {" "}
                        Parcel
                        <span className="sub">
                          On Demand Delivery at Your Doorstep
                        </span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
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
                        href="/health"
                        className="dropdown-item"
                      >
                        Health
                        <span className="sub">Ghuri Health Service</span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
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
                        className="dropdown-item"
                        rel="noreferrer"
                      >
                        Interior
                        <span className="sub">Extra Idea Our Asset</span>
                      </a>
                    </li>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
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
                        className="dropdown-item"
                        rel="noreferrer"
                      >
                        News
                        <span className="sub">Your Right To Know</span>
                      </a>
                    </li>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
                      food_icon
                      nav-icon
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-144
                      nav-item
                      "
                    >
                      <a
                        title="Food"
                        href="/ghuriFood"
                        className="dropdown-item"
                      >
                        Food
                        <span className="sub">
                          {" "}
                          Get Your Food in Less Than an Hour
                        </span>
                      </a>
                    </li>
                  </div>
                  {/* ///////////ticket///////////////// */}
                  <div className="col-sm-12 col-md-6">
                    <li
                      id="menu-item-144"
                      className="
                      ticket_icon
                      nav-icon
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-144
                      nav-item
                      "
                    >
                      <a
                        title="Ticket"
                        href="/ticket"
                        className="dropdown-item"
                      >
                        Tickets
                        <span className="sub">
                          {" "}
                          Ghuri Ticket Service
                        </span>
                      </a>
                    </li>
                  </div>
                </div>

                <hr />
                <div className="row  download_app_all">
                  <div className="col-md-6 col-sm-6">
                    <h6>Download User App</h6>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                      target="_Blank"
                      rel="noreferrer"
                    >
                      <img
                        width="146"
                        height="44"
                        src={gplay}
                        title="Google Play"
                      />
                    </a>

                    <a href>
                      <img
                        width="146"
                        height="44"
                        src={appstore}
                        title="App-Store"
                      />
                    </a>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <h6>Download Fighter App</h6>
                    <a
                      href="https://play.google.com/store/apps/details?id=ghuri.express.parcelfighter"
                      target="_Blank"
                      rel="noreferrer"
                    >
                      <img
                        width="146"
                        height="44"
                        src={gplay}
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
              <div className="merchant_drop mt-1">
                <li
                  id="menu-item-144"
                  className="
                  signup_icon
                      nav-icon
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-144
                      nav-item
                      "
                >
                  <a
                    title="Signup"
                    href="/merchant"
                    onClick={() => riderectMessage()}
                    className="hover_color dropdown-item"
                  >
                    Signup
                    <span className="sub">Signup As a Merchant</span>
                  </a>
                </li>
              </div>

              <div className="merchant_drop mt-1">
                <li
                  id="menu-item-144"
                  className="
                  login_icon
                      nav-icon
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-144
                      nav-item
                      "
                >
                  <a
                    title="Login"
                    target="_Blank"
                    className="hover_color dropdown-item"
                    href={`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`}
                    rel="noreferrer"
                  >
                    Login
                    <span className="sub">Login Your Merchant Account</span>
                  </a>
                </li>
              </div>
            </NavDropdown>

            <div className="merchant_dropdown">
              <Nav.Link className="dropdown">
                Merchant <i className="fa fa-caret-down"></i>
              </Nav.Link>
              <div className="merchant_content">
                <div className="merchant_drop mt-2 mb-2">
                  <li
                    id="menu-item-144"
                    className="
                  signup_icon
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
                      className="hover_color dropdown-item"
                    >
                      Signup
                      <span className="sub">Signup As a Merchant</span>
                    </a>
                  </li>
                </div>
                <div className="merchant_drop mt-2 mb-2">
                  <li
                    id="menu-item-144"
                    className="
                  login_icon
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
                      className="hover_color dropdown-item"
                      href={`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`}
                      rel="noreferrer"
                    >
                      Login
                      <span className="sub">Login Your Merchant Account</span>
                    </a>
                  </li>
                </div>
              </div>
            </div>

            <Nav.Link href="/career" className="nav_color last_nav">
              Career
            </Nav.Link>

            {/* <Nav.Link href="/health" className="nav_color">
              Health
            </Nav.Link> */}
            {/* <Nav.Link className="nav_color">
              <Link to="/blog">Blog</Link>
            </Nav.Link> */}
            {/* <Nav.Link className="custom_nav">
              <i className="fa fa-globe"></i> EN
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topnav;
