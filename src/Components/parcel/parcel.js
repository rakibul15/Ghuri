import React from "react";
import { Link } from "react-router-dom";
import "../../css/mediaQuery.css"
import "./parcel.css";

import parcelimg from "../../images/others/Parcel.png";


const parcel = () => {
  return (
    <div>
      <div className="parcel_bg platform">
        <div className="row d-flex align-items-center text-ceneter center ">
          <div className="col-sm-12 text-center product_text">
            <h1>
              Your safe and secure <br />
              parcel delivery
            </h1>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center platform_wrapper">
        <div className="col-sm-9">
          <div className="row justify-content-center text-center product_row">
            <div className="col-sm-2 col-2 padding_reduce product active_product first_product ">
              <Link to="/parcel">
            
                <h4>Parcel</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2 padding_reduce  product ">
              <Link to="/ride">
             
                <h4>Ride</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2 padding_reduce  product">
              <Link to="/food">
               
                <h4>Food</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2 padding_reduce  product">
              <Link to="/truck">
               
                <h4>Truck</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2 padding_reduce  product">
              <Link to="/bazar">
              
                <h4>Bazar</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2 padding_reduce  product last_product">
              <Link to="/ticket">
               
                <h4>Ticket</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center product_info">
        <div className="col-sm-10 col-10">
          <div className="row justify-content-center align-items-center center">
            <div className="col-sm-6">
              <h4 className="mb-4">GHURI PARCEL</h4>
              {/* <h4 className="mb-4">Open ghuri App, choose ghuri parcel</h4> */}
              <p>
                GHURI provides Home delivery service in Dhaka city. We are
                currently available in Dhaka. We are constantly expanding to
                more places! Parcel will cover more places soon. With GHURI
                Parcel, you can deliver your parcel in the quickest time.
                Because your emergencies Parcel’s is our biggest concern! You
                can deliver everything legal products by GHURI Parcel to your
                customer's doorstep to important personal documents and parcels
                to your Customer. GHURI Parcel Delivery is the one-stop solution
                for all of your delivery problems. GHURI Parcel enables you to
                offer home delivery service to your business's customers all
                over Dhaka City.
              </p>
              {/* <button className="btn  mt-3 learn_more">
                Learn More
                <i class="fa fa-chevron-right"></i>
              </button> */}
            </div>
            <div className="col-sm-6 product_img">
              <img src={parcelimg} alt="Ride Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default parcel;
