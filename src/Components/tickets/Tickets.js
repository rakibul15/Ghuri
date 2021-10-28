import React from 'react'
// import { Card, Nav, Container } from 'react-bootstrap'
import './Tickets.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import text1 from '../../images/tickets/ist-pic.png'
import plane from '../../images/tickets/plane.png'
import launch from '../../images/tickets/launch.png'
import bus from '../../images/tickets/bus.png'
import upperPicture from '../../images/tickets/upperPicture.png'
// import novoair from '../../images/tickets/novoair.png'
import glpl2 from '../../images/tickets/greenline2.png'



import cox from '../../images/tickets/cox.png'
// import cox1 from '../../images/tickets/cox1.png'
import cox2 from '../../images/tickets/cox2.png'
import cox3 from '../../images/tickets/cox3.png'
import cox4 from '../../images/tickets/cox4.png'
import cox5 from '../../images/tickets/cox5.png'
import plane2 from '../../images/tickets/plane2.png'
import bus2 from '../../images/tickets/bus2.png'
import launch2 from '../../images/tickets/lunch2.png'
import star from '../../images/tickets/Star.png'
import hotel from '../../images/tickets/hotel.png'
import Stary from '../../images/tickets/Star-y.png'
import picture from '../../images/tickets/picture.png'
import tanni from '../../images/tickets/tanni.jpg'
import smily from '../../images/tickets/smily.png'
import { Carousel } from '@trendyol-js/react-carousel';
import ticket2 from '../../images/tickets/ticket2.png'
import ticket_pic from '../../images/tickets/ticket-pic.png'
import OwlCarousel from 'react-owl-carousel'


import novo from "../../images/tickets/novo.png"
import shohag from "../../images/tickets/shohag2.png"
import usb from "../../images/tickets/usb2.png"
import usbangla from "../../images/tickets/usbangla.png"






const Tickets = () => {

  let option = {
    responsive: {
      0: {
        items: 3,
      },
      450: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };
  let options = {
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
  let service = {
    responsive: {
      0: {
        items: 2,
      },
      450: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    // <div className="container">


    <div className="ticket-body">
      <div className="mt-159">
        <div className="container">


          <div className="row ">
            <div className="col-md-6 col-sm-12  first-box text">
              <div className="text-box">
                <h5>
                  <img src={smily} alt="" /> Easy Way to Book your Ticket
                </h5>
                <h1>
                  Find Your <br />
                  Tickets Now!
                </h1>
              </div>

              <div className="row mt-45">
                <div className="col-4  col-sm-4  ">
                  <div className="card_size ">
                    <img className="plane_img" src={plane} />
                    <h4>Flight</h4>
                  </div>

                </div>
                <div className="col-4   col-sm-4 ">
                  <div className=" card_size">
                    <img className="plane_img" src={launch} />
                    <h4>Launch</h4>
                  </div>
                </div>
                <div className="col-4   col-sm-4  ">
                  <div className="card_size">
                    <img className="plane_img" src={bus} />
                    <h4>Bus</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-6 col-sm-0 order-1 order-lg-2 align-content-center">
              <div className=" upperPicture  ">
                <img src={ticket_pic} />
              </div>
            </div>
          </div>
        </div>
        <div className=" middle-row">
          {/* <div className="container"> */}
          <div className="  slider container">
            {/* <div className="row"> */}
            <OwlCarousel
              loop
              margin={10}
              items={6}
              autoplay
              dots={false}
              {...option}
              className=" d-flex  align-items-center owl-theme">
              <div className="  airline">
                <img src={glpl2} />
              </div>
              <div className=" airline">
                <img src={novo} />
              </div>
              <div className="  airline">
                <img src={usb} />
              </div>
              <div className="  airline">
                <img src={shohag} />
              </div>
              <div className="  airline">
                <img src={glpl2} />
              </div>
              <div className="  airline">
                <img src={usbangla} />
              </div>
            </OwlCarousel>
            {/* </div> */}

            {/* </div> */}
          </div>

        </div>
        <div className="container">
        <div className=" service">
            <h1>Our Best Services</h1>
            <h5>GHURI Ticket is a premium online booking portal which allows users to purchase<br/>
              tickets for various services like bus services, launch services, Beman ticket<br/>
              and more across all over Bangladesh.</h5>
            <div className=" row service_div">
              {/* <Carousel> */}
              {/* <OwlCarousel
           loop
           margin={10}
           items={6}
           autoplay
           dots={false}
           {...service}
           className=" d-flex  align-items-center owl-theme"> */}
              <div className="col-md-4 single_pic col-sm-12">
                <div className="service_card">
                  <img src={bus2} alt="" />
                  <div className="d-flex justify-content-between align-items-center ">
                    <p>
                      Green Line provides
                      the best service
                    </p>
                    <div className=" d-flex align-items-center">
                      <div className="star">
                        <img src={star} alt="" />
                      </div>
                      <p> (5.00)</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-4  col-sm-2 col-sm-12 ">
                <div className="service_card">
                  <img src={plane2} alt="" />
                  <div className=" d-flex justify-content-between align-items-center p-22">
                    <p>
                      BD Biman
                      provides the best service
                    </p>
                    <div className=" d-flex align-items-center">
                      <div className="star">
                        <img src={star} alt="" />
                      </div>
                      <p> (5.00)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4  col-sm-12 ">
                <div className="service_card">
                  <img src={launch2} alt="" />
                  <div className="display  d-flex justify-content-between align-items-center p-22">
                    <p>
                      {' '}
                      Sundarban provides
                      the best service
                    </p>
                    <div className=" d-flex align-items-center">
                      <div className="star">
                        <img src={star} alt="" />
                      </div>
                      <p> (5.00)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </OwlCarousel> */}
            </div>
            <button className="btn customer_btn">
              Load more <i className="fa fa-caret-right lmore"></i>
            </button>
          </div>
          <div className="top_destination">
            <h2>Top Destination</h2>
            <h5>After an 18-month ban on most inbound travel, the US is set to update its border rules on<br/>
              November 8, by requiring all foreign visitors to be vaccinated before entering.<br/>
              Here's what you need to know about the new travel policy.</h5>
            <div className=" row destination ">
              <div className="col-md-8 col-sm-12  destination_text">
                <h4>M A R I N E D R I V E</h4>
                <h1>COX ’ S BAZAR</h1>
                <img src={cox} alt="" />
              </div>
              <div className="col-md-4  col-sm-6  col-6 destination_text2">
                <p>M A R I N E D R I V E</p>
                <h1>COX ’ S BAZAR</h1>
                <img src={cox2} alt="" />
              </div>
              {/* </div> */}
              {/* <div className="  destination destination2"> */}
              <div className="col-md-4  col-sm-6 col-6 destination_text3 ">
                <p>M A R I N E D R I V E</p>
                <h1>COX ' S BAZAR</h1>
                <img src={cox3} alt="" />
              </div>
              <div className="col-md-4  col-sm-6 col-6  destination_text3">
                <p>M A R I N E D R I V E</p>
                <h1>COX ' S BAZAR</h1>
                <img src={cox4} alt="" />
              </div>
              <div className="col-md-4  col-sm-6 col-6  destination_text3">
                <p>M A R I N E D R I V E</p>
                <h1>COX ' S BAZAR</h1>
                <img src={cox5} alt="" />
              </div>
              {/* </div> */}
            </div>
          </div>
         


          <section className="customer_review">
            <OwlCarousel
              navigation={true}
              // navText={[
              //   `<div class='nav-btn prev-slide'><img src="https://i.ibb.co/Fn597p9/preview.png" /></div>`,
              //   `<div class='nav-btn next-slide'><img src="https://i.ibb.co/Jn6GBBC/next.png"/> </div>`,
              // ]}
              loop
              margin={10}
              items={2}
              autoplay
              dots={false}
              // img={}
              {...options}
              className=" d-flex  align-items-center owl-theme">
              <section >
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-0 customer">
                    <img src={hotel} alt="" />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-md-5 col-sm-12 msg customer_heading">
                    <h1>
                      {' '}
                      Customer <br /> say about us
                    </h1>
                    <div className="user_food user d-flex align-items-center">
                      <div >
                        <img src={tanni} alt="" />
                      </div>
                      <div className="profile_sec">
                        <h5>Saima Tanni</h5>
                        {/* <p>Frontend Developer</p> */}
                      </div>
                    </div>
                    <p className="cus_message">
                      The website is fantastic for everything; food, tickets and truck, parcel.
                      Treir Ticket system is very helpfull. 100% Secure, Privacy Friendly, and
                      the best resources and also best in search
                    </p>
                    <div className=" ratings d-flex align-items-center">
                      <div className="d-flex col-sm-2">
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">(5.00)</div>
                      </div>
                      <div className="col-sm-6 "></div>

                      <div className="d-flex col-sm-4 col-md-5 slide_btn ">
                        <button class="nav-btn text-right ">
                          <img src="https://i.ibb.co/Jn6GBBC/next.png" />{' '}
                        </button>
                        <button class="nav-btn text-right ">
                          <img src="https://i.ibb.co/Fn597p9/preview.png" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section >
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-0 customer">
                    <img src={hotel} alt="" />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-md-5 col-sm-12 msg customer_heading">
                    <h1>
                      {' '}
                      Customer <br /> say about us
                    </h1>
                    <div className=" user d-flex ">
                      <div className=" align-items-center">
                        <img src={picture} alt="" />
                        {/* <h5>Aman Ullah</h5> */}

                      </div>
                      <div className="profile_sec">
                        <h5>Aman Ullah</h5>
                        {/* <p>UI/UX Designer</p> */}
                      </div>
                    </div>
                    <p className="cus_message">
                      I don’t know of another website as comprehensive as this one. They do a really good job.
                      Ghuri-Ticket also leaves room for spontaneity and last minute travel changes.

                    </p>
                    <div className="ratings d-flex align-items-center">
                      <div className="col-sm-2 d-flex">
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">
                          <img src={Stary} alt="" />
                        </div>
                        <div className="star">(5.00)</div>
                      </div>
                      <div className="col-sm-6"></div>
                      <div className="d-flex col-sm-4 col-md-5 slide_btn">
                        <button class="nav-btn text-right ">
                          <img src="https://i.ibb.co/Jn6GBBC/next.png" />{' '}
                        </button>
                        <button class="nav-btn text-right ">
                          <img src="https://i.ibb.co/Fn597p9/preview.png" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </OwlCarousel>
          </section>

        </div>
      </div>
    </div>

    // </div>
    // </div>

    // </div>
  )
}

export default Tickets
