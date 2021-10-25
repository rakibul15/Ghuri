import React from 'react'
// import { Card, Nav, Container } from 'react-bootstrap'
import './Tickets.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import text1 from '../../images/tickets/ist-pic.png'
import plane from '../../images/tickets/plane.png'
import launch from '../../images/tickets/launch.png'
import bus from '../../images/tickets/bus.png'
import upperPicture from '../../images/tickets/upperPicture.png'
import glpl1 from '../../images/tickets/glpl1.png'
import glpl2 from '../../images/tickets/glpl2.png'
import glpl3 from '../../images/tickets/glpl3.png'
import BBAL1 from '../../images/tickets/BBAL1.png'
import BBAL2 from '../../images/tickets/BBAL2.png'
import BBAL3 from '../../images/tickets/BBAL3.png'
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
import smily from '../../images/tickets/smily.png'
import { Carousel } from '@trendyol-js/react-carousel';
import vector from '../../images/tickets/Vector 5.png'
import OwlCarousel from 'react-owl-carousel'


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
        <div className="col-md-1"></div>
        <div className="col-md-5 col-sm-0 order-1 order-lg-2 align-content-center">
          <div className=" upperPicture  ">
            <img src={upperPicture} />
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
          <img src={BBAL1} />
        </div>
        <div className=" airline">
          <img src={glpl1} />
        </div>
        <div className="  airline">
          <img src={BBAL2} />
        </div>
        <div className="  airline">
          <img src={glpl2} />
        </div>
        <div className="  airline">
          <img src={BBAL3} />
        </div>
        <div className="  airline">
          <img src={glpl3} />
        </div>
        </OwlCarousel>
      {/* </div> */}
        
      {/* </div> */}
      </div>
     
      </div>
      <div className="container">
      <div className="top_destination">
        <h2>Top Destination</h2>
        <h5>Made with premium ingredients.</h5>
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
      <div className=" service">
        <h1>Our Best Services</h1>
        <h5>Made with premium ingredients.</h5>
        <div className=" row service_div">
          {/* <Carousel> */}
          <div className="col-md-4  col-sm-12">
            <div className="service_card">
              <img src={bus2} alt="" />
              <div className="d-flex">
                <p>
                  Green Line provides <br />
                  the best service
                </p>
                <div className=" d-flex align-items-center">
                <div  className="star">
                  <img src={star} alt="" />
                </div>
                <div> (5.00)</div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="col-md-4  col-sm-12">
            <div className="service_card">
              <img src={plane2} alt="" />
              <div className="display">
                <p>
                  Green Line provides <br />
                  the best service
                </p>
                <div className=" d-flex align-items-center">
                <div className="star">
                  <img  src={star} alt="" />
                </div>
                <div> (5.00)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  col-sm-12">
            <div className="service_card">
              <img src={launch2} alt="" />
              <div className="display">
                <p>
                  {' '}
                  Green Line provides <br />
                  the best service
                </p>
                <div className=" d-flex align-items-center">
                <div className="star">
                  <img  src={star} alt="" />
                </div>
                <div> (5.00)</div>
                </div>
              </div>
            </div>
          </div>
          {/* </Carousel> */}
        </div>
        <button className="btn customer_btn">
          Load more <i className="fa fa-caret-right lmore"></i>
        </button>
      </div>

   
      <section className="customer_review">
        {/* <OwlCarousel
        navigation={true}
        navText={[
          `<div class='nav-btn prev-slide'><img src="https://i.ibb.co/Fn597p9/preview.png" /></div>`,
          `<div class='nav-btn next-slide'><img src="https://i.ibb.co/Jn6GBBC/next.png"/> </div>`,
        ]}
        loop
        margin={10}
        autoplay
        dots={false}
        {...options}
        className=" d-flex  align-items-center owl-theme"> */}
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
              <div className="user_food d-flex">
                <div className="user">
                  <img src={picture} alt="" />
                </div>
                <div className="profile_sec">
                  <h5>Aman Ullah</h5>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <p className="cus_message">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <div className="ratings d-flex align-items-center">
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
                <div className="d-flex slide_btn">
                  <button class="nav-btn text-right next-slide">
                    <img src="https://i.ibb.co/Jn6GBBC/next.png" />{' '}
                  </button>
                  <button class="nav-btn text-right prev-slide">
                    <img src="https://i.ibb.co/Fn597p9/preview.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </OwlCarousel> */}
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
