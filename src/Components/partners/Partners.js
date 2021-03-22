import React from "react";
import "./partners.css";
import "../../css/mediaQuery.css"
import airtel from "../../images/partners/airtel_logo.png";
import robi from "../../images/partners/robi_logo.png";
import brothers from "../../images/partners/brothers_logo.png";
import fasal from "../../images/partners/fasal_logo.png";
import swan from "../../images/partners/swan_logo.png";
import nayabari from "../../images/partners/noyabari_logo.png"
import lodigreen from "../../images/partners/Lodi green_logo.png"

const Partners = () => {
  return (
    <div className="partners ">
      <div className="row">
          <div className="col-sm-12 col-12">
          <h1>GHURI PARTNERS &amp; CLIENTS</h1>
          </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-2 col-2">
          <div className=" fasal partners_logo">
            <img src={fasal} alt="" />
          </div>
        </div>
        <div className="col-lg-2 col-2">
          <div className=" brothers  partners_logo">
            <img src={brothers} alt="" />
          </div>
        </div>

        <div className="col-lg-2 col-2 ">
          <div className="  robi partners_logo">
            <img src={robi} alt="" />
          </div>
        </div>

        <div className="col-lg-2 col-2">
          <div className=" airtel partners_logo">
            <img src={airtel} alt="" />
          </div>
        </div>

        <div className="col-lg-2 col-2 ">
          <div className="swan  partners_logo">
            <img src={swan} alt="" />
          </div>
        </div>
        <div className="col-lg-2 col-2 ">
          <div className="swan  partners_logo">
            <img src={lodigreen} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
