import React from "react";
//Partners css
import "./partners.css";

//Media Query Css for Responsive
import "../../css/mediaQuery.css";

//Owl Carousel
import OwlCarousel from "react-owl-carousel";

// images of all partners
import airtel from "../../images/partners/airtel_logo.png";
import robi from "../../images/partners/robi_logo.png";
import lodigreen from "../../images/partners/Lodi green_logo.png";
import nuraniInterior from "../../images/partners/Nurani_Interior.png"
import biddanondo from "../../images/partners/bidyanondo_foundation.png"
import a2i from "../../images/partners/a2i.png"
import nayabari from "../../images/partners/noyabari_logo.png";

const Partners = () => {
  return (
    <div className="partners ">
      <div className="row">
        <div className="col-sm-12 col-12">
          <h1>GHURI PARTNERS</h1>
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
            <img src={nuraniInterior} alt="" />
          </div>
        </div>
        <div className="item">
          <div className=" brothers  partners_logo">
            <img src={biddanondo} alt="" />
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
            <img src={a2i} alt="" />
          </div>
        </div>
        <div className=" item ">
          <div className="swan  partners_logo">
            <img src={nayabari} alt="" />
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Partners;
