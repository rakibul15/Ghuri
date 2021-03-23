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

const Footer = () => {
  return (
    <div className="footer_div">
      <div className="row footer">
        <div className="col-sm-8 margin-dotted">
          <div className="row">
            <div className="col-sm-3 col-6">
              <p>Platform</p>
              <small>
                <a href="#">GHURI Ride </a>
              </small>
              <br />
              <small>
                <a href="#">GHURI Food</a>
              </small>
              <br />
              <small>
                <a href="#">GHURI Percel </a>
              </small>
              <br />
              <small>
                <a href="#">GHURI Ticket </a>
              </small>
              <br />
              <small>
                <a href="#">GHURI Truck </a>
              </small>
              <br />
              <small>
                <a href="#">GHURI Bazar</a>
              </small>
            </div>
            <div className="col-sm-3 col-6">
              <p>Earn With Ghuri</p>
              <small>
              
                <a href="#">Earn With Bike</a>
              </small>
              <br />
              <small>
                <a href="#">Earn With Car</a>
              </small>
              <br />
              <small>
                <a href="#">Earn With Cycle</a>
              </small>
            </div>
            <div className="col-sm-3 col-6">
              <p className="marchant_small">Marchant</p>
              <small>
                <a href="#">Parcel Marchant Sign Up</a>
              </small>
              <br />
              <small>
                <a href="#">Parcel Marchant Log In</a>
              </small>
              <br />
              <small>
                <a href="#">Restaurant Marchant Sign Up </a>
              </small>
              <br />
              <small>
                <a href="#">Restaurant Marchant Sign Up </a>
              </small>
              <br />
              <small>
                <a href="#">Restaurant Marchant Log In </a>
              </small>
            </div>
            <div className="col-sm-3 col-6">
              <p className="marchant_small">Help</p>
              <small>
                <a href="#">Work in Support Center</a>
              </small>
              <br />
              <small>
                <a href="#">User Help Center</a>
              </small>
              <br />
              <small>
                <a href="#">Rider Help Center </a>
              </small>
              <br />
              <small>
                <a href="#">Marchant Help Center </a>
              </small>
              <br />
              <small>
                <a href="#">Helpline </a>
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
              >
                <img src={playstore} className="img-fluid" alt="" />
              </a>
            </div>
             
             <div className="col-sm-12 col-6 app_store_img footer_store_img">
             <a href="">
           
           <img src={appstore} className="img-fluid   text-right" alt="" />
         </a>
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
              <small>Privacy</small>
            </div>
            <div className="col-sm-3 col-3">
              <small>Terms</small>
            </div>
            <div className="col-sm-3 col-3">
              <small>Refund</small>
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
              <a href="">
                <img src={facebook} alt="" className="img-fluid" />
              </a>
              <a href="">
                <img src={twitter} alt="" className="img-fluid" />
              </a>
              <a href="">
                <img src={instagram} alt="" className="img-fluid" />
              </a>
              <a href="">
                <img src={youtube} alt="" className="img-fluid" />
              </a>
              <a href="">
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
                <small>Privacy</small>
              </div>
              <div className="col-3">
                <small>Terms</small>
              </div>
              <div className="col-3">
                <small>Refund</small>
              </div>
              
            </div>
            <small>© 2021 GHURI Express Ltd. <br/> All rights reserved.</small>
          </div>
          <div className="col-4 footer-logo">
            <img src={ghurilogo} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-sm-7 col-12">
          <div className="row text-center">
            <div className="col-sm-12 linklogo">
              <a href="">
               
                <img src={facebook} alt="" className="img-fluid" />
              </a>
              <a href="">
              
                <img src={twitter} alt="" className="img-fluid" />
              </a>
              <a href="">
             
                <img src={instagram} alt="" className="img-fluid" />
              </a>
              <a href="">
              
                <img src={youtube} alt="" className="img-fluid" />
              </a>
              <a href="">
             
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
