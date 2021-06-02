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
import nuraniInterior from "../../images/partners/Nurani_Interior.png";
import biddanondo from "../../images/partners/bidyanondo_foundation.png";
import ekShop from "../../images/partners/ekShop.png";
import nayabari from "../../images/partners/noyabari_logo.png";
import bkash from "../../images/partners/bakash.png"

const Partners = () => {
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
        autoplay
        dots={false}
        {...option}
        className=" d-flex  align-items-center owl-theme"
      >
        <div className="item">
          <div className=" nuraniInterior partners_logo ">
            <img src={nuraniInterior} alt="nurani Interior" />
          </div>
        </div>
        <div className="item">
          <div className=" brothers  partners_logo">
            <img src={biddanondo} alt="biddanondo" />
          </div>
        </div>

        <div className="item">
          <div className="robi partners_logo">
            <img src={robi} alt="robi" />
          </div>
        </div>

        <div className=" item">
          <div className="airtel partners_logo">
            <img src={airtel} alt="airtel" />
          </div>
        </div>

        <div className=" item">
          <div className="partners_logo ">
            <img src={bkash} alt="bkash logo" />
          </div>
        </div>

        <div className=" item">
          <div className="a2i  partners_logo ">
            <img src={ekShop} alt="ekshop" />
          </div>
        </div>
        <div className=" item ">
          <div className="nayavari  partners_logo">
            <img src={nayabari} alt="nayabari logo" />
          </div>
        </div>
        <div className=" item ">
          <div className="lodigreen  partners_logo">
            <img src={lodigreen} alt="lodigreen" />
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Partners;
