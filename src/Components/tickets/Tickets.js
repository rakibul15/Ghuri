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
import vector from '../../images/tickets/Vector 5.png'
import OwlCarousel from "react-owl-carousel";

const Tickets = () => {
  return (
    <div className="ticket-body">
      <div className="row">
        <div className="col-md-6  first-box text">
          <div className="text-box">
            <h5>
              <img src={text1} alt="" /> Easy Way to Book your Ticket
            </h5>
            <h1>Find Your <br />
             Tickets Now!</h1>
          </div>

          <div className="row">
            <div className=" col-md-3 card_size ">
              <img className="plane_img" src={plane} />
              <h4>Flight</h4>
            </div>
            <div className=" col-md-3 card_size ">
              <img className="plane_img" src={launch} />
              <h4>Launch</h4>
            </div>
            <div className=" col-md-3 card_size ">
              <img className="plane_img" src={bus} />
              <h4>Bus</h4>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" upperPicture ">
            <img src={upperPicture} />
          </div>
        </div>
      </div>
      <div className=" row middle-row ">
        <div className="col-md-2 airline">
          <img src={BBAL1} />
        </div>
        <div className="col-md-2 airline">
          <img src={glpl1} />
        </div>
        <div className="col-md-2 airline">
          <img src={BBAL2} />
        </div>
        <div className="col-md-2 airline">
          <img src={glpl2} />
        </div>
        <div className="col-md-2 airline">
          <img src={BBAL3} />
        </div>
        <div className="col-md-2 airline">
          <img src={glpl2} />
        </div>
      </div>
      <div className="top_destination">
      <h1>Top Destination</h1>
      <h5>Made with premium ingredients.</h5>
      <div className=" row destination ">
        <div className="col-md-8 destination_text">
        <h4>M A R I N E  D R I V E</h4>
        <h1>C O X’ S   B A Z A R</h1>
          <img src={cox} alt="" />
        </div>
        <div className="col-md-4 destination_text2">
        <p>M A R I N E  D R I V E</p>
        <h1>C O X’ S   B A Z A R</h1>
          <img src={cox2} alt="" />
        </div>
     </div>
      <div className=" row destination destination2">
        <div className="col-md-4 destination_text3 "> 
        <p>M A R I N E  D R I V EE</p>
        <h1>C O X’S   B A Z A R</h1>
          <img src={cox3} alt=""/>
        </div>
        <div className="col-md-4 destination_text3">
        <p>M A R I N E  D R I V E</p>
        <h1>C O X’ S   B A Z A R</h1>
          <img src={cox4} alt="" />
        </div>
        <div className="col-md-4 destination_text3">
        <p>M A R I N E  D R I V E</p>
        <h1>C O X’ S   B A Z A R</h1>
          <img src={cox5} alt="" />
        </div>
        </div>
      </div>
      <div className=" service">
      <h1>Our Best Services</h1>
      <h5>Made with premium ingredients.</h5>
      <div className=" row">
      <div className="col-sm-4">
      <div className="service_card">
      <img src={bus2} alt="" />
      <div className="display">
      <p>Green Line provides <br/>  
        the best service</p>
        <h5><img className="star" src={star} alt="" /> (5.00)</h5>
      </div>
      </div>
     
      
      </div>
      <div className="col-sm-4 ">
      <div className="service_card">
      <img src={plane2} alt="" />
      <div className="display">
      <p>Green Line provides <br/>  
        the best service</p>
        <h5><img className="star" src={star} alt="" /> (5.00)</h5>
      </div>
      </div>
      </div>
      <div className="col-sm-4 ">
      <div className="service_card">
      <img src={launch2} alt="" />
      <div className="display">
      <p>  Green Line provides <br/>  
        the best service</p>
        <h5><img className="star" src={star} alt="" /> (5.00)</h5>
      </div>
      </div>
     
      </div>

      </div>
      <button className="btn customer_btn" >
        Load more <i className="fa fa-caret-right lmore"></i>
      </button>
      </div>
     
      {/* <div className="row customer ">
      <div className="col-sm-6 ">
      <img src={hotel} alt="" />
      </div>
      <div className="col-sm-6 "> */}
      {/* <div className="about">
      <h1>Customer <br/>say  about us</h1>
      <div className="user">
        <img src={picture }alt="" />
        <div className="user_text">
        <h3>Aman Ullah</h3>
        <h5>UI/UX Designer</h5>
        </div>
        <div className="review">
          <p>
          Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled
          </p>
        </div>
        
      </div>
      </div> */}
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
             
              className=" d-flex  align-items-center owl-theme"
            > */}
      <section className="customer_say   pb-5">
                <div className="row align-items-center">
                  <div className="col-sm-6 customer">
                    <img src={hotel} alt="" />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-5 customer_heading">
                    <h1>
                      {" "}
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
                    Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled
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
                    <button class='nav-btn next-slide'><img src="https://i.ibb.co/Jn6GBBC/next.png"/> </button>
                    <button class='nav-btn prev-slide'><img src="https://i.ibb.co/Fn597p9/preview.png" /></button>
                
                    </div>
                    </div>
                   
                    
                  </div>
                 
                </div>
                
              </section>
        {/* </OwlCarousel> */}
              
      </section>
      
     
      </div>
      // </div>
    // </div>
  )
}

export default Tickets
