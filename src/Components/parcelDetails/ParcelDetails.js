import React, { useState } from "react";
import parcelphone from "../../images/ParcelDetails/parcelMobile.png";
import documents from "../../images/ParcelDetails/documents.png";
import packages from "../../images/ParcelDetails/packages.png";
import accessories from "../../images/ParcelDetails/accessories.png";
import electronics from "../../images/ParcelDetails/elcetronics.png";
import giftItems from "../../images/ParcelDetails/giftItems.png";
import deliver from "../../images/ParcelDetails/deliver.png";
import deliver4 from "../../images/ParcelDetails/deliver4.png";
import deliver2 from "../../images/ParcelDetails/deliver2.png";
import deliver3 from "../../images/ParcelDetails/deliver3.png";

import playstore from "../../images/footer/playstore.png";
import appstore from "../../images/footer/appstore.png";
import box from "../../images/ParcelDetails/box.png";
import thumbsup from "../../images/ParcelDetails/thumbsup.png";
import light from "../../images/ParcelDetails/light.png";
import clock from "../../images/ParcelDetails/clock.png";
import rider from "../../images/ParcelDetails/rider.png";
import deliverearn from "../../images/ParcelDetails/deliverEarn.png";
import IamMerchant from "./IamMerchant";
import IamFighter from "./IamFighter";

const ParcelDetails = () => {
  const [show, setShow] = useState(false);
  const [allFaq, setAllFaq] = useState(false);
  const [changeimage, setchangeImage] = useState(
    <img src={deliver} className="img-fluid" alt="" />
  );
  const [active1, setActive1] = useState("btn_Faq_active");
  const [active2, setActive2] = useState("btn_Faq");
  const [active3, setActive3] = useState("btn_Faq");

  return (
    <div>
      <div className="bgg ">
        <div className="Nav_overflow container">
          <div className="row parcel_main_content">
            {/* <div className="col-sm-1"></div> */}
            <div className="col-sm-7 parcel_main_section">
              <div className="parcel_main_content_small">
                {/* <h5>Ghuri Parcel</h5> */}
                <h2>On Demand Delivery at Your Doorstep</h2>
                <p>
                  Need to send something on an emergency basis? GHURI Parcel is
                  what you nedd!
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                  target="_blank"
                  className="btn Parecl_app  parcel_first_app btn_box_shadow"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa fa-mobile mobile"></i>
                  </span>
                  <span className="papp_fixes">Download GHURI App</span>
                  <span>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                </a>{" "}
                <br />
                <a
                  href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuridrive"
                  target="_blank"
                  className="btn app_store_btn   mt-4 btn_box_shadow"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa fa-money"></i>
                  </span>
                  <span className="Play_fixed">Earn With GHURI</span>
                  <span>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-sm-3 text-right">
              {/* <img
                src={parcelphone}
                className="img-fluid"
                alt="Parcel Phone Image"
              /> */}
            </div>
            {/* <div className="col-sm-1"></div> */}
          </div>
        </div>
        {/* <img src={curvelink} alt="" className="img-fluid curve_img" /> */}
      </div>

      {/* Parcel Details Header End */}

      <section className="what_we_deliver">
        <h2 className="text-center mb-5">
          <strong>What we deliver</strong>
        </h2>
        <div>
          <div className="row mt-4 mb-5 d-flex justify-content-center deliver">
            <div className="col-sm-2 col-4 text-center">
              <img src={documents} className="img-fluid" alt="" />
              <p>Documents</p>
            </div>
            <div className="col-sm-2 col-4 text-center">
              <img src={packages} className="img-fluid" alt="" />
              <p>Packages</p>
            </div>
            <div className="col-sm-2 col-4  text-center">
              <img src={accessories} className="img-fluid" alt="" />
              <p>Accessories</p>
            </div>
            <div className="col-sm-2 col-4 text-center">
              <img src={electronics} className="img-fluid" alt="" />
              <p>Electronics</p>
            </div>
            <div className="col-sm-2 col-4 text-center">
              <img src={giftItems} className="img-fluid" alt="" />
              <p>Gift Items</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to deliver Parcel */}
      <div className="row mt-5 how_to_deliver_main">
        <div className="col-sm-12  text-center">
          <h2>
            <strong>How to deliver parcel</strong>
          </h2>
        </div>
      </div>
      <div className="container-fluid how_to_container_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-5 ">
              {/* <div className="card  download_app parcel_view_step "  onClick={() => {setchangeImage( <img src={deliver} className="img-fluid" alt="" />)}}>
                <div className="card-body ">
                  <div class="card-text how_to_deliver">
                    <p>
                      <span>1</span> Download Ghuri App from
                    </p>

                    <img
                      src={playstore}
                      className="img-fluid"
                      alt="PlayStore store"
                    />
                    <img src={appstore} className="img-fluid" alt="App store" />
                  </div>
                </div>
              </div> */}
              <div
                className="card custom_card  mt-4 parcel_view_step "
                onClick={() => {
                  setchangeImage(
                    <img src={deliver} className="img-fluid" alt="" />
                  );
                }}
              >
                <div className="card-body">
                  <div class="card-text how_to_deliver">
                    <p>
                      <span>1</span>Download GHURI App
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card custom_card  mt-4 parcel_view_step "
                onClick={() => {
                  setchangeImage(
                    <img src={deliver2} className="img-fluid" alt="" />
                  );
                }}
              >
                <div className="card-body">
                  <div class="card-text how_to_deliver">
                    <p>
                      <span>2</span>Track your parcel
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card custom_card  mt-4 parcel_view_step"
                onClick={() => {
                  setchangeImage(
                    <img src={deliver4} className="img-fluid" alt="" />
                  );
                }}
              >
                <div className="card-body">
                  <div class="card-text how_to_deliver">
                    <p>
                      <span>3</span>Become a merchant
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card custom_card  mt-4 parcel_view_step"
                onClick={() => {
                  setchangeImage(
                    <img src={deliver2} className="img-fluid" alt="" />
                  );
                }}
              >
                <div className="card-body ">
                  <div class="card-text how_to_deliver">
                    <p>
                      <span>4</span>Manage your parcel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-right howdeliver">
              {/* <img src={changeimage} className="img-fluid" alt="" /> */}
              {changeimage}
            </div>
          </div>
        </div>
      </div>
      {/* Parcel Info */}

      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6 col-md-3">
            <div className="content_info_box">
              <img src={box} className="img-fluid" alt="" />
              <h6 className="mt-3">On Demand Delivery</h6>
              <small>
                You can deliver anything legal,from your charger to office
                documents with us without any hassle.
              </small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="content_info_box">
              <img src={thumbsup} className="img-fluid" alt="" />
              <h6 className="mt-3">We Are Reliable</h6>
              <small>
                You can keep your trust in us.Your product is safe to us as a
                child to it's mother.
              </small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="content_info_box">
              <img src={clock} className="img-fluid" alt="" />
              <h6 className="mt-3">Delivery On Time</h6>
              <small>
                We know time is valuable. We try our best to deliver your parcel
                in the quickest time.
              </small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="content_info_box">
              <img src={light} className="img-fluid" alt="" />
              <h6 className="mt-3">One-stop Solution</h6>
              <small>
                Ghuri Parcel Delivery is the one stop solution for all your
                delivery needs.{" "}
              </small>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid combained_sec">
        <div className="container mb-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-7">
              <div>
                <h2 className="mb-4">
                  <strong>Available right now</strong>
                </h2>
                <h5 className="mt-7">
                  Only inside Dhaka city. With the love & support of our
                  ambitious clients, we are constantly expanding to more places.{" "}
                </h5>
              </div>
            </div>
            <div className="col-sm-5 rider">
              <img src={rider} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <section className="delivery_and_earn">
          <div className="row text-center">
            <div className="col-sm-12">
              <h2>
                <strong>Deliver and Earn</strong>
              </h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-4 mt-5">
            <div className="col-sm-8 deliverearn text-center">
              <img src={deliverearn} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="left_top">
            <div className="card">
              <div className="card-body card_custom_attach">
                <i class="fa fa-circle"></i> Work when you want
              </div>
            </div>
          </div>

          <div className="left_bottom">
            <div className="card">
              <div className="card-body card_custom_attach">
                <i class="fa fa-circle"></i> Less work earn more <br /> within a
                short time
              </div>
            </div>
          </div>

          <div className="right_bottom">
            <div className="card">
              <div className="card-body card_custom_attach">
                <i class="fa fa-circle"></i> Extra earning {" "}
                keeps <br /> you smilling
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="Parcel_Faq">
        <div className="row text-center">
          <div className="col-sm-12">
            <h2>
              <strong>Frequently asked questions</strong>
            </h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5 mb-4">
          <div className="col-sm-4  col-md-2 col-6">
            <button
              className={"btn  btn-left " + active1}
              onClick={() => {
                setShow(false);
                setAllFaq(false);
                setActive1("btn_Faq_active");
                setActive2("btn_Faq");
                setActive3("btn_Faq");
              }}
            >
              I am Merchant
            </button>
          </div>
          <div className="col-sm-4 col-md-2 col-6">
            <button
               className={"btn  btn-right " + active2}
              onClick={() => {
                setShow(true);
                setAllFaq(false);
                setActive2("btn_Faq_active");
                setActive1("btn_Faq");
                setActive3("btn_Faq");
              }}
            >
              I am fighter
            </button>
          </div>
        </div>
        <div className="row  d-flex justify-content-center mt-5 mb-4">
          <div className="col-sm-8">
            {!allFaq && !show && <IamMerchant />}
            {!allFaq && show && <IamFighter />}
            {allFaq && (
              <>
                <IamMerchant />
                <IamFighter />
              </>
            )}
          </div>
        </div>
      </section>
      {/* <div className="row d-flex justify-content-center">
        <div className="col-sm-4 col-md-2">
          <button
            className={" btn_outline view_all_btn btn " + active3}
           
            onClick={() =>{setAllFaq(true);
              setActive3("btn_Faq_active");
                setActive2("btn_Faq");
                setActive1("btn_Faq");
            }} 
          >
            view all FAQ
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ParcelDetails;
