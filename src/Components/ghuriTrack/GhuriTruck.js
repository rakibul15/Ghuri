import React from "react";
import truckHero from ".././../images/GhuriTruck/TruckHero.png";
import image1 from ".././../images/GhuriTruck/image1.png";
import image2 from ".././../images/GhuriTruck/image2.png";
import image3 from ".././../images/GhuriTruck/image3.png";
import image4 from ".././../images/GhuriTruck/image4.png";
import image5 from ".././../images/GhuriTruck/image5.png";
import image6 from ".././../images/GhuriTruck/image6.png";
import whyghuri1 from ".././../images/GhuriTruck/whyGhuri1.png";
import whyghuri2 from ".././../images/GhuriTruck/whyGhuri2.png";
import whyghuri3 from ".././../images/GhuriTruck/whyGhuri3.png";
import whyghuri4 from ".././../images/GhuriTruck/whyGhuri4.png";
import whyghuri5 from ".././../images/GhuriTruck/whyGhuri5.png";
import whyghuri6 from ".././../images/GhuriTruck/whyGhuri6.png";
import truck1 from ".././../images/GhuriTruck/Truck1.png";
import truck2 from ".././../images/GhuriTruck/Truck2.png";
import truck3 from ".././../images/GhuriTruck/Truck3.png";
import truck4 from ".././../images/GhuriTruck/truck4.png";
import truck5 from ".././../images/GhuriTruck/truck5.png";
import truck6 from ".././../images/GhuriTruck/truck6.png";

import aman from ".././../images/GhuriTruck/aman.jpeg";
import aman2 from ".././../images/GhuriTruck/aman2.jpg";

import "./GhuriTruck.css";
import OwlCarousel from "react-owl-carousel";
const GhuriTruck = () => {
  let option = {
    responsive: {
      0: {
        items: 3,
      },
      450: {
        items: 4,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 7,
      },
    },
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
    <>
      <div className="Nav_overflow_food ">
        <div className="container">
          <div className="row d-flex truck_section">
            <div className="col-sm-6 truck_headline">
              <h1>Driven by Risk Free, Cost Friendly Top Class Carrier</h1>
              <p>
                Throw out age-old complex transporting. Here's a new experience
                for truck rental! Ghuri Truck offers cutting-edge and
                state-of-the-art transport solutions to its customers, helping
                them to focus on their core competencies & business operations.
              </p>
              <button className="btn btn_lmore">
                Learn More <i className="fa fa-caret-right"></i>
              </button>
            </div>
            <div className="col-sm-6">
              <div className="Truck_hero">
                <img className="img-fluid" src={truckHero} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container_fluid mt-58 truck_carousel_0th">
          <OwlCarousel
            navigation={true}
            loop
            margin={10}
            autoplay
            dots={false}
            {...option}
            className=" d-flex  align-items-center owl-theme"
          >
            <div className="item item_truck_logo">
              <img className="img-fluid" src={image1} alt="" />
            </div>
            <div className="item item_truck_logo">
              <img className="img-fluid" src={image2} alt="" />
            </div>
            <div className="item item_truck_logo">
              <img className="img-fluid" src={image3} alt="" />
            </div>
            <div className="item item_truck_logo">
              <img className="img-fluid" src={image4} alt="" />
            </div>
            <div className="item item_truck_logo">
              <img className="img-fluid" src={image5} alt="" />
            </div>
            <div className="item item_truck_logo">
              <img className="img-fluid" src={image6} alt="" />
            </div>
          </OwlCarousel>
        </div>

        <div className="container why_truck truck_section">
          <h1>Why Choose Ghuri Truck:</h1>
          <div className="row mt-70 truck_section_pd">
            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck_card text-center">
                <img src={whyghuri1} alt="" />
                <h6>Hassle-free</h6>
                <p>
                  Firm focused on providing comprehensive, easy booking.
                  Reachability to anywhere in Bangladesh.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck_card text-center">
                <img src={whyghuri2} alt="" />
                <h6>Cost Effective</h6>
                <p>
                  Find the Rental Rate that fit your Budget. Cost-effective
                  rental procedure.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck_card text-center">
                <img src={whyghuri3} alt="" />
                <h6>User Friendly App</h6>
                <p>
                  Easy to upload documents. Very easy to use the app.Trained
                  Drivers. High Quality customer service.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck_card text-center">
                <img src={whyghuri4} alt="" />
                <h6>Safety & Reliability</h6>
                <p>
                  We drive effective implementation of security tools and
                  complete logistics. Secure & sound delivery.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck_card text-center">
                <img src={whyghuri5} alt="" />
                <h6>Forefront Technology</h6>
                <p>
                  A super app; an innovative technology platform. Live Tracking
                  Feature.Real- time Data & Info.Access new leads.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck_card text-center">
                <img src={whyghuri6} alt="" />
                <h6>Fast Booking</h6>
                <p>
                  Single network & platform for Truck owners, Transporters and
                  Drivers. No hidden charges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid customer_say_bg">
          <div className="container customer_say cus_truck">
            <div className="row justify-content-center">
              <div className="col-sm-8 owl_truck">
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
                    <h5 className="text-center">Nur Islam Mridha</h5>
                    <p className="text-center">Engineer</p>

                    <p className="mt-2 text-center">
                      I am using Ghuri Truck. It's very esay  booking a truck.They have differnt kind of trucks.Thanks Ghuri.
                    </p>
                  </div>

                  <div className="main_said">
                    <div className="customer_say_img d-flex justify-content-center">
                      <img src={aman2} alt="" />
                    </div>
                    <h5 className="text-center">Rifat Hasan</h5>
                    <p className="text-center">Businessman</p>

                    <p className="mt-2 text-center">
                      Their service is too good. I really love their service. It's helps my Business.Thanks Ghuri Truck.
                    </p>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>

        <div className="container truck_services truck_section truck_section_pd">
          <h1 className="text-center">Our Track Services</h1>
          <p className="text-center">
            Ghuri Truck comes up as a single platform for both Shippers and
            Truck Owners to connect directly across Bangladesh. This opens the
            gates to choose the right pricing and quality through easy
            navigation. You can choose from a variety of trucks according to
            your convenience. Our team is determined to provide great service at
            your demand.
          </p>

          <div className="row d-flex justify-content-center">
            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck">
                <img src={truck1} alt="" />
                <p className="truck_ton">1 Ton Truck</p>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck">
                <img src={truck2} alt="" />
                <p className="truck_ton">3.5 Ton Truck</p>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck">
                <img src={truck3} alt="" />
                <p className="truck_ton">7.5 Ton Truck</p>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck">
                <img src={truck4} alt="" />
                <p className="truck_ton">15 Ton Truck</p>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck">
                <img src={truck5} alt="" />
                <p className="truck_ton">3.5 Ton Truck</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single_truck">
                <img src={truck6} alt="" />
                <p className="truck_ton">2 Ton Truck</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GhuriTruck;
