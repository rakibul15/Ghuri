import React from 'react'

import "../../css/mediaQuery.css";

//Owl Carousel
import OwlCarousel from "react-owl-carousel";


// images of all partners
// import airtel from "../../images/partners/airtel_logo.png";
// import robi from "../../images/partners/robi_logo.png";
import brothers from "../../images/partners/brothers_logo.png";
import fasal from "../../images/partners/fasal_logo.png";
import swan from "../../images/partners/swan_logo.png";

import lilistar from "../../images/partners/lilstar.png"
// import lodigreen from "../../images/partners/Lodi green_logo.png";
import id from "../../images/partners/id.png"
import iz from "../../images/partners/izone.png"
import "./clients.css"

const Clients = () => {

 let option= {
    responsive:{
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
    }}
  
    return (
        <div className="partners clients ">
      <div className="row">
        <div className="col-sm-12">
          <h1>GHURI CLIENTS</h1>
        </div>
      </div>
      <OwlCarousel
        loop
        margin={10}
        items={6}
        dots={false}
        autoplay
        {...option}
        className=" justify-content-center align-items-center owl-theme"
      >
        <div className="item">
          <div className=" fasal partners_logo ">
            <img src={fasal} alt="" />
          </div>
        </div>
        <div className="item">
          <div className=" brothers  partners_logo">
            <img src={brothers} alt="" />
          </div>
        </div>

        <div className="item">
          <div className="lilistar partners_logo">
            <img src={lilistar} alt="" />
          </div>
        </div>

        <div className=" item">
          <div className="partners_logo">
            <img src={id} alt="inovetive decore" />
          </div>
        </div>

        <div className=" item">
          <div className="swan  partners_logo ">
            <img src={swan} alt="" />
          </div>
        </div>
        <div className=" item ">
          <div className="swan  partners_logo">
            <img src={iz} alt="" />
          </div>
        </div>
      </OwlCarousel>
    </div>
    )
}

export default Clients;
