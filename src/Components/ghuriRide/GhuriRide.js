import React, { useState } from "react";
import "./GhuriRide.css";
import OwlCarousel from "react-owl-carousel";

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

import ERideY1 from ".././../images/GhuriRide/ERideY1.png";
import ERideY2 from ".././../images/GhuriRide/ERideY2.png";
import ERideY3 from ".././../images/GhuriRide/ERideY3.png";
import ERideY4 from ".././../images/GhuriRide/ERideY4.png";

// About Ride
import aboutimg from "../../images/GhuriRide/AboutRide.png";
import JoinRide from "../../images/GhuriRide/JoinRide.png";
import aman from "../../images/GhuriRide/men1.jpg";
import aman2 from "../../images/GhuriRide/men2.jpg";

// ommmunity
import community from ".././../images/GhuriRide/Commuinity.png";

const GhuriRide = () => {
  const [active, setActive] = useState(1);
  const Txt = () => {
    let tx = "";
    if (active === 1) {
      tx = (
        <div className="col-sm-12">
          <div className="box arrow-top-third">
            Nothing beats traffic like Ghuri Bikes and you know it! Save time,
            save money and reach your destination on time.
          </div>
        </div>
      );
    } else if (active === 2) {
      tx =( <div className="col-sm-12">
        <div className="box arrow-top_lite">
        "Budget tight? Try Ghuri Car Lite!";
        </div>
      </div>)
    } else if (active === 3) {
      tx = (
        <div className="col-sm-12">
          <div className="box arrow-top_plus">
            With Ghuri Intercity, you can keep Ghuri’s best in class drivers and
            sedans for up to 10 hours.The service is available for pick ups
            starting from Dhaka metropolitan area to Gazipur, Savar,
            Narayanganj, Mawna, Katiyadi, Bhairab Bazar, Araihazar, Munshiganj,
            Mawa Ferry Ghat, Dohar, Paturia Ferry Ghat, Saturia, Mymensingh and
            Cumilla.
          </div>
        </div>
      );
      // tx=" Want to travel in AC? Use Pathao Car Plus!";
    } else {
      tx = (
        <div className="col-sm-12">
          <div className="box arrow-top">
            With Ghuri Intercity, you can keep Ghuri’s best in class drivers and
            sedans for up to 10 hours.The service is available for pick ups
            starting from Dhaka metropolitan area to Gazipur, Savar,
            Narayanganj, Mawna, Katiyadi, Bhairab Bazar, Araihazar, Munshiganj,
            Mawa Ferry Ghat, Dohar, Paturia Ferry Ghat, Saturia, Mymensingh and
            Cumilla.
          </div>
        </div>
      );
    }
    return tx;
  };

  let option2 = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div className="bgRide">
      <div className="Nav_overflow_Ride">
        <section className="hero_ride">
          <div className="container">
            <div className="row aic">
              <div className="col-sm-6">
                <h1>Find a Ride-Sharing, or Offer a Ride.</h1>
                <p>
                  Now, it’s time to earn while you travel! Time to say no to
                  empty seats. Get your spare seats earning money and also enjoy
                  the journey sharing with new people. Road is no longer a
                  boring thing, meet people, bring fun while you earn money! Not
                  bad, right?
                </p>
                {/* <button className="btn btn_lmore">
                  Learn More <i className="fa fa-caret-right"></i>
                </button> */}
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
            <div className="row rmt-70 aic">
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
            <div className="row aic">
              <div className="col-sm-6 joinRide_Text">
                <h1>Ride Service Category</h1>
                <div className="row singleCarRow">
                  <div className="col-6 col-md-3">
                    <div className="singleCar" onClick={() => setActive(1)}>
                      {active === 1 ? (
                        <img src={ERideY1} alt="" />
                      ) : (
                        <img src={ERide1} alt="" />
                      )}
                      <h5>Bike</h5>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="singleCar" onClick={() => setActive(2)}>
                      {active === 2 ? (
                        <img src={ERideY2} alt="" />
                      ) : (
                        <img src={ERide2} alt="" />
                      )}
                      <h5>Car Lite</h5>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="singleCar" onClick={() => setActive(3)}>
                      {active === 3 ? (
                        <img src={ERideY3} alt="" />
                      ) : (
                        <img src={ERide3} alt="" />
                      )}
                      <h5>car Plus</h5>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="singleCar" onClick={() => setActive(4)}>
                      {active === 4 ? (
                        <img src={ERideY4} alt="" />
                      ) : (
                        <img src={ERide4} alt="" />
                      )}
                      <h5>Intercity</h5>
                    </div>
                  </div>

                  {Txt()}
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

        <section className="aboutRide">
          <div className="container">
            <div className="row d-flex align-items-center aic">
              <div className="col-sm-6">
                <div className="about_img">
                  <img src={aboutimg} alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="AboutRideTxt">
                  <h1>About Ghuri Ride</h1>
                  <p>
                    GHURI Ride has been one of the most promising ride-sharing
                    initiatives in Bangladesh. GHURI Ride focuses on QUICK, SAFE
                    &amp; AFFORDABLE ride-sharing; transforming the transport
                    sector &amp; generating positive impacts in terms of
                    creating jobs and expanding choices for consumers. GHURI
                    Ride ensures your safety and confidentiality on your
                    journey. We offer all types of cars and bikes for a trip and
                    day rental also. We are clung to the uprising technologies
                    &amp; systems. Our prior approach is to ensure your comfort
                    to get around. For a cheaper and safer ride choose GHURI
                    Ride and go to your destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid customer_say_bg">
          <div className="container customer_say cus_truck">
            <div className="row justify-content-center">
              <div className="col-sm-8 owl_truck ride_cus_say">
                <h1 className="text-center">Customer say about us</h1>
                <OwlCarousel
                  navigation={true}
                  navText={[
                    `<div class='nav-btn truck_prev prev-slide'><img src="https://i.ibb.co/Jn6GBBC/next.png"/> </div>`,
                    `<div class='nav-btn truck_next next-slide'><img src="https://i.ibb.co/Fn597p9/preview.png" /></div>`,
                  ]}
                  loop
                  margin={10}
                  autoplay
                  dots={false}
                  {...option2}
                  className=" d-flex  align-items-center owl-theme"
                >
                  <div className="main_said">
                    <div className="customer_say_img d-flex justify-content-center">
                      <img src={aman} alt="" />
                    </div>
                    <h5 className="text-center">Hasan Mahmud</h5>
                    <p className="text-center"></p>

                    <p className="mt-2 text-center">
                      Its like a daily basis app cause its help us to arrived
                      location easily and safely.
                    </p>
                  </div>

                  <div className="main_said">
                    <div className="customer_say_img d-flex justify-content-center">
                      <img src={aman2} alt="" />
                    </div>
                    <h5 className="text-center">Asif Ali</h5>
                    {/* <p className="text-center">Businessman</p> */}

                    <p className="mt-2 text-center">
                      Trustable and affortable app which is very easy to use
                    </p>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>

        <section className="elRider">
          <div className="container ">
            <div className="row d-flex justify-content-between aic">
              <div className="col-sm-6">
                <div className="elRiderTxt">
                  <h1>Eligibility to Join as a Rider</h1>
                  <p className="d-flex align-items-center">
                    <div className="circleY"></div> Must have a smartphone
                    access
                  </p>

                  <p className="d-flex align-items-center">
                    <div className="circleY"></div> Must be an adult
                  </p>

                  <p className="d-flex align-items-center">
                    <div className="circleY"></div> Must have a driving license
                  </p>

                  <p className="d-flex align-items-center">
                    <div className="circleY"></div> Must have valid registration
                    documents
                  </p>

                  <p className="d-flex align-items-center">
                    <div className="circleY"></div> Must have textoken
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={JoinRide} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="commitment">
          <div className="container">
            <div className="row d-flex justify-content-center text-center aic">
              <div className="col-sm-9">
                <div className="commitmentMain">
                  <h1>Commitment to Our Community</h1>
                  <p>
                    Our team is working on extracting potential technology to
                    contribute to help build a better future and serve our
                    community. We are determined to transform our cities into a
                    safer, more comfortable &amp; more efficient place by
                    simplifying travel experience and by taking sustainable
                    initiatives for the world.
                  </p>
                  <img src={community} alt="" />
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
