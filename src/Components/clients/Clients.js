import React from 'react'
//Media Query Css for Responsive
import "../../css/mediaQuery.css";

//Owl Carousel
import OwlCarousel from "react-owl-carousel";


// images of all partners
import airtel from "../../images/partners/airtel_logo.png";
import robi from "../../images/partners/robi_logo.png";
import brothers from "../../images/partners/brothers_logo.png";
import fasal from "../../images/partners/fasal_logo.png";
import swan from "../../images/partners/swan_logo.png";
import nayabari from "../../images/partners/noyabari_logo.png";
import lodigreen from "../../images/partners/Lodi green_logo.png";
import "./clients.css"

const Clients = () => {
    return (
        <div className="partners clients ">
      <div className="row">
        <div className="col-sm-12 col-12">
          <h1>GHURI CLIENTS</h1>
        </div>
      </div>
      <OwlCarousel
        loop
        margin={10}
        items={6}
        nav
        autoplay
        className="row justify-content-center align-items-center owl-theme"
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
          <div className="robi partners_logo">
            <img src={robi} alt="" />
          </div>
        </div>

        <div className=" item">
          <div className="airtel partners_logo">
            <img src={airtel} alt="" />
          </div>
        </div>

        <div className=" item">
          <div className="swan  partners_logo ">
            <img src={swan} alt="" />
          </div>
        </div>
        <div className=" item ">
          <div className="swan  partners_logo">
            <img src={lodigreen} alt="" />
          </div>
        </div>
      </OwlCarousel>
    </div>
    )
}

export default Clients;
