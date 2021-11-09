import React from "react";
import "./GhuriRide.css";

// Hero main Image
import heroMain from "../../images/GhuriRide/RideHero.png";

// Why Ride Image
import whyRide1 from ".././../images/GhuriRide/whyRide1.png";
import whyRide2 from ".././../images/GhuriRide/whyRide2.png";
import whyRide3 from ".././../images/GhuriRide/whyRide3.png";
import whyRide4 from ".././../images/GhuriRide/whyRide4.png";
import whyRide5 from ".././../images/GhuriRide/whyRide5.png";
import whyRide6 from ".././../images/GhuriRide/whyRide6.png";

// JoinRide Image
import ERideMain from ".././../images/GhuriRide/ERideMain.png";
import ERide1 from ".././../images/GhuriRide/ERide1.png";
import ERide2 from ".././../images/GhuriRide/ERide2.png";
import ERide3 from ".././../images/GhuriRide/ERide3.png";
import ERide4 from ".././../images/GhuriRide/ERide4.png";

const GhuriRide = () => {
  return (
    <div className="bgRide">
      <div className="Nav_overflow_Ride">
        <section className="hero_ride">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h1>Find a Ride-Sharing, or Offer a Ride.</h1>
                <p>
                  Now, it’s time to earn while you travel! Time to say no to
                  empty seats. Get your spare seats earning money and also enjoy
                  the journey sharing with new people. Road is no longer a
                  boring thing, meet.
                </p>
                <button className="btn btn_lmore">
                  Learn More <i className="fa fa-caret-right"></i>
                </button>
              </div>

              <div className="col-sm-6">
                <img src={heroMain} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Ride Section */}
        <section className="whyRide">
          <div className="container why_truck rideSection">
            <h1>Why Choose Ghuri Ride?</h1>
            <div className="row mt-70">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="single_ride_card text-center">
                  <img src={whyRide1} alt="" />
                  <h6>Enjoy safest rides</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="single_ride_card text-center">
                  <img src={whyRide2} alt="" />
                  <h6>Book Long distance rides</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="single_ride_card text-center">
                  <img src={whyRide3} alt="" />
                  <h6>Travel at your convenience</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="single_ride_card text-center">
                  <img src={whyRide4} alt="" />
                  <h6>Find active riders anytime</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="single_ride_card text-center">
                  <img src={whyRide5} alt="" />
                  <h6>Fastest ride</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="single_ride_card text-center">
                  <img src={whyRide6} alt="" />
                  <h6>Hassle-free payment</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="joinRide">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 joinRide_Text">
                <h1>Eligibility to Join a Ride</h1>
                <div className="row singleCarRow">
                  <div className="col-6 col-sm-3">
                    <div className="singleCar">
                      <img src={ERide1} alt="" />
                      <h5>Bike</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="singleCar">
                      <img src={ERide2} alt="" />
                      <h5>Car Lite</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="singleCar">
                      <img src={ERide3} alt="" />
                      <h5>car Plus</h5>
                    </div>
                  </div>
                  <div className="col-3 col-sm-3">
                    <div className="singleCar">
                      <img src={ERide4} alt="" />
                      <h5>Intercity</h5>
                    </div>
                  </div>
                 
                    <div className="col-sm-12">
                      <div className="box arrow-top">
                        This is a box with some content and an arrow at the top.
                      </div>
                   
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="joinRideCar">
                  <img src={ERideMain} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GhuriRide;
