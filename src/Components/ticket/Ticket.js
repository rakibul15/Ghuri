import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Ticket.css";
import "../../css/mediaQuery.css";
import ticketimg from "../../images/others/ticket.png";

const Ticket = () => {
  useEffect(() => {
    window.scrollTo(0, 900);
  }, []);
  return (
    <div>
      <div className="ticket_bg platform">
        <div className="row d-flex align-items-center text-ceneter center ">
          <div className="col-sm-12 text-center product_text">
            <h1>Get your ticket faster</h1>
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
            <div className="col-sm-2 col-2  padding_reduce  product ">
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
            <div className="col-sm-2 col-2  padding_reduce  product active_product last_product">
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
              <h4 className="mb-4">GHURI TICKET</h4>
              {/* <h4 className="mb-4">Open GHURI App. Choose GHURI Ticket..</h4> */}
              <p>
                GHURI Ticket is a premium online booking portal which allows
                users to purchase tickets for various services like bus
                services, launch services, movies and events across all over
                Bangladesh. Everyone gets purchase travel tickets in the
                simplest, easiest, smartest and most convenient way. GHURI
                Ticket simplifies your ticket booking experiences. Just select
                your desired trip and choose your seats, you will get the online
                ticket otherwise you can get the ticket by hand to hand. We
                enable consumers to purchase tickets from any location at any
                time, just by using your mobile phone. Customers can also
                purchase tickets through the website.
              </p>
              {/* <button className="btn  mt-3 learn_more">
                Learn More
                <i class="fa fa-chevron-right"></i>
              </button> */}
            </div>
            <div className="col-sm-6 product_img">
              <img src={ticketimg} alt="Food" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
