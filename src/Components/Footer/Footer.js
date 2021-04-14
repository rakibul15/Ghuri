import React from "react";
import "./Footer.css";
import "../../css/mediaQuery.css";
import playstore from "../../images/footer/playstore.png";
import appstore from "../../images/footer/appstore.png";
import facebook from "../../images/footer/facebook.png";
import twitter from "../../images/footer/twitter.png";
import instagram from "../../images/footer/instagram.png";
import youtube from "../../images/footer/youtube.png";
import linkedin from "../../images/footer/linkedin.png";
import ghurilogo from "../../images/logo/logo.svg";
import csv from "../../images/footer/csa.png";
import ssl from "../../images/footer/SSL-Commerz-Pay-With-logo-All-Size.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleParcel = () => {
    
    window.scrollTo(0,900);
  

  };
  const handleRedirect = () => {
    // window.open("https://ocean.ghuriexpress.com/#/login", "_blank");
    window.open(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`, "_blank");

   
  };

  return (
    <div className="footer_div">
      <div className="row footer">
        <div className="col-sm-8 margin-dotted">
          <div className="row">
            <div className="col-sm-3 col-6">
              <p>Platform</p>
            
                <small>
                  <Link to="/ride">
                    <a>GHURI Ride</a>
                  </Link>
                </small>
            
              <br />

              <small>
                <Link to="/food">
                  <a>GHURI Food</a>
                </Link>
              </small>

              <br />
              <small>
                <Link to="/parcel"
                  onClick={() => handleParcel()}
                >
                  <a>GHURI Percel</a>
                </Link>
              </small>
              <br />
              <small>
                <span>
                  <Link to="/ticket">
                    <a>GHURI Ticket</a>
                  </Link>
                </span>
              </small>
              <br />
              <small>
                <span>
                  <Link to="/truck">
                    <a>GHURI Truck</a>
                  </Link>
                </span>
              </small>
              <br />
              <small>
                <span>
                  <Link to="/bazar">
                    <a>GHURI Bazar</a>
                  </Link>
                </span>
              </small>
            </div>
            <div className="col-sm-3 col-6">
              <p>Earn With Ghuri</p>
              <small>
                <span>Earn With Bike</span>
              </small>
              <br />
              <small>
                <span>Earn With Car</span>
              </small>
              <br />
              <small>
                <span>Earn With Cycle</span>
              </small>
            </div>
            <div className="col-sm-3 col-6">
              <p className="marchant_small">Marchant</p>
              <small>
                <span>
                  <Link to="/merchnat">Parcel Marchant Sign Up</Link>
                </span>
              </small>
              <br />
              <small>
                <span>
                  <Link>
                    <a onClick={() => handleRedirect()}>
                      Parcel Marchant Log In
                    </a>
                  </Link>
                </span>
              </small>
              <br />
              <small>
                <span>Restaurant Marchant Sign Up </span>
              </small>
              <br />
              <small>
                <span>Restaurant Marchant Sign Up </span>
              </small>
              <br />
              <small>
                <span>Restaurant Marchant Log In </span>
              </small>
            </div>
            <div className="col-sm-3 col-6">
              <p className="marchant_small">Help</p>
              <small>
                <span>Work in Support Center</span>
              </small>
              <br />
              <small>
                <span>User Help Center</span>
              </small>
              <br />
              <small>
                <span>Rider Help Center </span>
              </small>
              <br />
              <small>
                <span>Marchant Help Center </span>
              </small>
              <br />
              <small>
                <span>Helpline </span>
              </small>
            </div>
          </div>
          <div className="row  mt-5">
            <div className="col-sm-9 col-12  ssl">
              <p>Payment Partner</p>
              <img src={ssl} alt="" className="img-fluid" />
            </div>
            <div className="col-sm-3 col-6 mt-1 csv ">
              <p>Member Of</p>
              <img src={csv} alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="row ">
            <div className="col-lg-6 our_app mb-4">
              <div className="row mt-3 align-items-center">
                <div className="col-sm-12 col-6 footer_store_img">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={playstore} className="img-fluid" alt="" />
                  </a>
                </div>

                <div className="col-sm-12 col-6 app_store_img footer_store_img">
                  <img
                    src={appstore}
                    className="img-fluid   text-right"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p>News Letter</p>
              <div className="input-group input-margin-top">
                <input
                  className="form-control email"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <button className="btn newsletter-btn " type="button ">
                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                  </button>
                </div>
                <small className="mt-2">
                  Subscribe with email address for our monthly newletter
                </small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-11 footer-address">
              <small>
                <p> GHURI Express LTD</p>
              </small>
              <p className="mt-2 address">
                <small>Corporate Headquarter</small>
              </p>
              <p>
                <small>House No : 101, Northern Road, Baridhara DOHS,</small>
              </p>
              <p>
                <small>Dhaka-1206, Bangladesh.</small>
              </p>
              <p>
                <small>Phone No : +880 28411018, +880 1309038120</small>
              </p>
              <p>
                <small>Email : support@ghuriexpress.com</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer-brand brand-color-bg align-items-center remove_small">
        <div className="col-sm-3">
          <div className="row">
            <div className="col-sm-3 col-3">
            <small>
                  <Link to="/privacy">Privacy</Link>
            </small>
            </div>
            <div className="col-sm-3 col-3">
              <small>
                <Link to="/terms">Terms</Link>
              </small>
            </div>
            <div className="col-sm-3 col-3">
            <small>
                  <Link to="/refund">Refund</Link>
              </small>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-12">
              <small>© 2021 GHURI Express Ltd. All rights reserved.</small>
            </div>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="row text-center">
            <div className="col-sm-12 linklogo">
              <a href="https://www.facebook.com/ghuriApp" target="_blank">
                <img src={facebook} alt="" className="img-fluid" />
              </a>

              <a href="https://twitter.com/GHURI67793705" target="_blank">
                <img src={twitter} alt="" className="img-fluid" />
              </a>

              <a href="https://www.instagram.com/ghuri_app/" target="_blank">
                <img src={instagram} alt="" className="img-fluid" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCLVDbjelUC0_zV6gTLF-JYQ/featured"
                target="_blank"
              >
                <img src={youtube} alt="" className="img-fluid" />
              </a>

              <a href="https://www.linkedin.com/company/ghuri/" target="_blank">
                <img src={linkedin} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-2 footer-logo">
          <img src={ghurilogo} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row footer-brand brand-color-bg align-items-center appear_small d-none">
        <div className="Footer_fix">
          <div className="col-8">
            <div className="row">
              <div className=" col-3">
              <small>
                  <Link to="/privacy">Privacy</Link>
              </small>
              </div>
              <div className="col-3">
                <small>
                  <Link to="/terms">Terms</Link>
                </small>
              </div>
              <div className="col-3">
              <small>
                  <Link to="/refund">Refund</Link>
              </small>
              </div>
            </div>
            <small>
              © 2021 GHURI Express Ltd. <br /> All rights reserved.
            </small>
          </div>
          <div className="col-4 footer-logo">
            <img src={ghurilogo} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-sm-7 col-12">
          <div className="row text-center">
            <div className="col-sm-12 linklogo">
              <a href="https://www.facebook.com/ghuriApp" target="_blank">
                <img src={facebook} alt="" className="img-fluid" />
              </a>

              <a href="https://twitter.com/GHURI67793705" target="_blank">
                <img src={twitter} alt="" className="img-fluid" />
              </a>

              <a href="https://www.instagram.com/ghuri_app/" target="_blank">
                <img src={instagram} alt="" className="img-fluid" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCLVDbjelUC0_zV6gTLF-JYQ/featured"
                target="_blank"
              >
                <img src={youtube} alt="" className="img-fluid" />
              </a>

              <a href="https://www.linkedin.com/company/ghuri/" target="_blank">
                <img src={linkedin} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
