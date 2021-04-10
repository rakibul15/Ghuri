import React, { useEffect } from "react";
import "./platform.css";
import "../../css/mediaQuery.css";
import ride from "../../images/others/ride.png";
import { Link } from "react-router-dom";

const Platform = () => {
  useEffect(() => {
    window.scrollTo(0, 900);
  }, []);
  return (
    <div>
      <div className="platform_bg platform">
        <div className="row d-flex align-items-center text-ceneter center ">
          <div className="col-sm-12 text-center product_text">
            <h1>Make your Journey Safe</h1>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center platform_wrapper">
        <div className="col-sm-9 col-11 ">
          <div className="row justify-content-center text-center product_row">
            <div className="col-sm-2 col-2 padding_reduce product first_product">
              <Link to="/parcel">
                <h4>Parcel</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product active_product">
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
          <div className="row justify-content-center align-items-center center sm_center_fix">
            <div className="col-sm-6">
              <h4 className="mb-4">GHURI RIDE</h4>
              {/* <h4 className="mb-4">Open GHURI App. Choose GHURI Ride.</h4> */}
              <p>
                The ride-hailing business is expanding, it is mainly in the
                capital of Bangladesh. GHURI Ride has been one of the most
                successful ridesharing initiatives in Bangladesh GHURI Ride
                focuses on transforming the transport sector & generating
                positive impacts in terms of creating jobs and expanding choices
                for consumers. GHURI ride ensure your safety and security to
                your journey. We offer all types of cars and bikes for a trip
                and day rental also. For a cheaper and safer ride choose GHURI
                ride and go to your destination.
              </p>
              {/* <button className="btn  mt-3 learn_more">
                Learn More
                <i class="fa fa-chevron-right"></i>
              </button> */}
            </div>
            <div className="col-sm-6 product_img">
              <img src={ride} alt="Ride" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
