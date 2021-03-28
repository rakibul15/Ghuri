import React from "react";
import "./Food.css";
import food_img from "../../images/others/food.png";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div>
      <div className="food_bg platform">
        <div className="row d-flex align-items-center text-ceneter center ">
          <div className="col-sm-12 text-center product_text">
            <h1>Get your food fast</h1>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center platform_wrapper">
        <div className="col-sm-9 col-11 ">
          <div className="row justify-content-center text-center product_row">
            <div className="col-sm-2 col-2  padding_reduce product first_product  ">
              <Link to="/parcel">
                <h4>Parcel</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product ">
              <Link to="/ride">
                <h4>Ride</h4>
              </Link>
            </div>
            <div className="col-sm-2 col-2  padding_reduce  product active_product">
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
        <div className="col-sm-10">
          <div className="row justify-content-center align-items-center center sm_center_fix">
            <div className="col-sm-6">
              <h4 className="mb-4">GHURI FOOD</h4>
              {/* <h4 className="mb-4">Open GHURI App. Choose GHURI Food.</h4> */}
              <p>
                GHURI Food is a convenient online food ordering platform that
                connects users with thousands of local restaurants. Customers
                can browse through numerous menus and place orders for delivery
                or take-away at the best price. Hungry customers can get their
                food as soon as possible. GHURI Food also helps you to make your
                own home kitchen to a restaurant and become to help you earn
                money from home. We deliver every kind of food by GHURI Food to
                the customer's doorstep from every listed restaurant all over
                Dhaka city. Just click and order in our GHURI app and website.
                Our concern is giving you the fastest food delivery at lowest
                price.
              </p>
              {/* <button className="btn  mt-3 learn_more">
                Learn More
                <i class="fa fa-chevron-right"></i>
              </button> */}
            </div>
            <div className="col-sm-6 product_img">
              <img src={food_img} alt="food Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
