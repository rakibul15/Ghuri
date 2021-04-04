import React from "react";
import { Link } from "react-router-dom";
import "./Bazar.css";

import bazarimg from "../../images/others/bazar.png";
import "../../css/mediaQuery.css";

const Bazar = () => {
  return (
    <div>
      <div className="bazar_bg platform">
        <div className="row d-flex align-items-center text-ceneter center ">
          <div className="col-sm-12 text-center product_text">
            <h1>Change your lifestyle</h1>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center platform_wrapper">
        <div className="col-sm-9 col-11 ">
          <div className="row justify-content-center text-center product_row">
            <div className="col-sm-2 col-2  padding_reduce product first_product">
              <Link to="/parcel">
                <h4>Parcel</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product">
              <Link to="/ride">
                <h4>Ride</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product">
              <Link to="/food">
                <h4>Food</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product">
              <Link to="/truck">
                <h4>Truck</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product  active_product">
              <Link to="/bazar">
                <h4>Bazar</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product last_product">
              <Link to="/ticket">
                <h4>Ticket</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center product_info">
        <div className="col-sm-10 ">
          <div className="row justify-content-center align-items-center center center sm_center_fix">
            <div className="col-sm-6">
              <h4 className="mb-4">GHURI BAZAR</h4>
         
              <p>
                GHURI Bazar is an on-demand everyday goods delivery service.
                GHURI Bazar is an internet-based shop which will be equipped for
                giving each sort of merchandise and items from each area to each
                shopper situated in Bangladesh. The world's commercial center
                will be just fingertips away for any client possessing a cell
                phone/PC through an app and website. Whoever wants to buy
                anything from a multi-store can order groceries, packaged food,
                healthcare products, beauty products, gifts and many more using
                the GHURI app and have it delivered to you. We are working on
                the business system to the next level for enhancing Bangladesh's
                financial condition.
              </p>
            
            </div>
            <div className="col-sm-6 product_img">
              <img src={bazarimg} alt="Ride " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bazar;
