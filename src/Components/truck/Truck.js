import React from "react";
import "./Truck.css";
import truck_img from "../../images/others/truck.png";
import { Link } from "react-router-dom";

const Truck = () => {
  return (
    <div>
      <div className="truck_bg platform">
        <div className="row d-flex align-items-center text-ceneter center">
          <div className="col-sm-12 text-center product_text">
            <h1>Find the truck you need</h1>
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
            <div className="col-sm-2 col-2  padding_reduce  product ">
              <Link to="/ride">
                <h4>Ride</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product">
              <Link to="/food">
                <h4>Food</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product active_product">
              <Link to="/truck">
                <h4>Truck</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product">
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
              <h4 className="mb-4">GHURI TRUCK</h4>
              {/* <h4 className="mb-4">Open GHURI App. Choose GHURI Truck.</h4> */}
              <p>
                GHURI trucks offer safest and finest transportation for packer’s
                movers, and logistics services, catering to all your goods
                movement needs, both in full load and part load capacity all
                over Bangladesh. Just use GHURI App & get a pickup or a truck
                right away to your loading location. You can also place an order
                directly; our service is available 24/7! We make sure all of our
                customers and clients are receiving the best rate in the market
                based on vehicle type and shipping distance. We also tried to
                give the security to your products so they don't get hampered.
                We also deal corporately to expand your business all over the
                country.
              </p>
              {/* <button className="btn  mt-3 learn_more">
                  Learn More
                  <i class="fa   fa-chevron-right"></i>
                </button> */}
            </div>
            <div className="col-sm-6 product_img">
              <img src={truck_img} alt="Ride" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Truck;
