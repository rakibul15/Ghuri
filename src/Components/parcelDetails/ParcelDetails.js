import React, { useState } from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import documents from "../../images/ParcelDetails/documents.png";
import packages from "../../images/ParcelDetails/packages.png";
import accessories from "../../images/ParcelDetails/accessories.png";
import electronics from "../../images/ParcelDetails/elcetronics.png";
import giftItems from "../../images/ParcelDetails/giftItems.png";
import deliver from "../../images/ParcelDetails/deliver.png";
import deliver4 from "../../images/ParcelDetails/deliver4.png";
import deliver2 from "../../images/ParcelDetails/deliver2.png";
import box from "../../images/ParcelDetails/box.png";
import thumbsup from "../../images/ParcelDetails/thumbsup.png";
import light from "../../images/ParcelDetails/light.png";
import clock from "../../images/ParcelDetails/clock.png";
import rider from "../../images/ParcelDetails/rider.png";
import deliverearn from "../../images/ParcelDetails/deliverEarn.png";
import pending from "../../images/ParcelDetails/pending.png";
import onpickup from "../../images/ParcelDetails/on_pickup.png";
import pickedup from "../../images/ParcelDetails/Pickedup.png";
import inhub from "../../images/ParcelDetails/Inhub.png";
import ondelivery from "../../images/ParcelDetails/Ondelivery.png";
import delivered from "../../images/ParcelDetails/delivered.png";
import cancel_icon from "../../images/ParcelDetails/cancel.png";
import returnparcel from "../../images/ParcelDetails/return.png";

import IamMerchant from "./IamMerchant";
import IamFighter from "./IamFighter";
import { FormControl } from "react-bootstrap";

import logo from "../../images/ParcelDetails/logo7.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getsearchdata,
  IconProgress,
  Progress,
} from "./_redux/action/ParcelDetailsAction";

const ParcelDetails = () => {
  const dispatch = useDispatch();
  const parcelTracking = useSelector(
    (state) => state.parcelInfo.parcelTracking
  );
  const isTracking = useSelector((state) => state.parcelInfo.isTracking);
  const [show, setShow] = useState(false);
  const [allFaq, setAllFaq] = useState(false);
  const [changeimage, setchangeImage] = useState(
    <img src={deliver} className="img-fluid" alt="" />
  );
  const [active1, setActive1] = useState("btn_Faq_active");
  const [active2, setActive2] = useState("btn_Faq");
  const [active3, setActive3] = useState("btn_Faq");

  const [isshow, issetShow] = useState(false);
  const handleClose = () => issetShow(false);
  const handleShow = (data) => {
    dispatch(getsearchdata(data));
    if (data.length > 0) {
      issetShow(true);
    }
  };

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="bgg ">
        <div className="Nav_overflow container">
          <div className="row parcel_main_content">
            <div className="col-sm-7">
              <div className="parcel_tracker">
                <h5>Enter parcel tracking number to track your parcel</h5>
                <div className="track_search">
                  <FormControl
                    type="text"
                    placeholder="parcel tracking number"
                    className="mr-sm-3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        handleShow(search);
                      }
                    }}
                  />
                  {!isTracking && (
                    <button
                      className="btn btn-parcelTrack"
                      onClick={() => handleShow(search)}
                    >
                      Track
                    </button>
                  )}
                  {isTracking && (
                    <button className="btn btn-parcelTrack">
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="col-sm-7 parcel_main_section">
              <div className="parcel_main_content_small">
                <h2>On Demand Delivery at Your Doorstep</h2>
                <p>
                  Need to send something on an emergency basis? GHURI Parcel is
                  what you need!
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
                  href="https://play.google.com/store/apps/details?id=ghuri.express.parcelfighter"
                  target="_blank"
                  className="btn app_store_btn  mt-3 btn_box_shadow"
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
            <div className="col-sm-3 text-right"></div>
          </div>
        </div>
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
            <div className="col-sm-6 text-right howdeliver">{changeimage}</div>
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
                <i class="fa fa-circle"></i> Extra earning keeps <br /> you
                smilling
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

      {/* Modal On click track*/}
      {parcelTracking && (
        <Modal
          show={isshow}
          centered
          onHide={handleClose}
          size="xl"
          className="parcel_details_modal"
        >
          <Modal.Body className="modal_color">
            <div className="modal_design  delivery_details_header">
              <div className="row mt-2 mb-4 pb-4 status_header ">
                <div className="col-sm-12">
                  <h5>
                    <span className="black_color">
                      Delivery on Progress by GHURI
                    </span>
                  </h5>
                </div>
              </div>
              {/* Progressbar */}
              <div className="row d-flex justify-content-center">
                <div className="col-sm-11">
                  <ProgressBar>
                    <ProgressBar
                      className="p_color"
                      now={Progress(parcelTracking.status)}
                      key={1}
                    />
                    {/* Ghuri Images */}
                    <img
                      className="p_images"
                      style={{ left: IconProgress(parcelTracking.status) }}
                      src={logo}
                      alt=""
                    />
                  </ProgressBar>
                </div>
              </div>

              <div className="row d-flex justify-content-between mt-4 delivery_progress_status_icon">
                <div
                  className="col-sm-2 col-2"
                  style={{
                    boxShadow:
                      parcelTracking.status === 0
                        ? "5px 10px 16px 0 rgba(0,0,0,0.3)"
                        : "",
                    transform:
                      parcelTracking.status === 0 ? "scale(1.2, 1.2)" : "",
                  }}
                >
                  <img className="img-fluid" src={pending} alt="" />
                  <h6>Pending</h6>
                  <small>{parcelTracking.parcelCreateDateTime}</small>
                  <small>
                    {" "}
                    <p>Parcel Added by Merchant</p>
                  </small>
                </div>
                <div
                  className="col-sm-2 col-2"
                  style={{
                    opacity: parcelTracking.status >= 1 ? "1" : "0.4",
                    boxShadow:
                      parcelTracking.status === 1
                        ? "5px 10px 16px 0 rgba(0,0,0,0.3)"
                        : "",
                    transform:
                      parcelTracking.status === 1 ? "scale(1.2, 1.2)" : "",
                  }}
                >
                  <img className="img-fluid" src={onpickup} alt="" />
                  <h6>On Pick up</h6>
                  <small>
                    {parcelTracking.pickUpAssign.pickUpAssignDateTime}
                  </small>
                  <small>
                    {parcelTracking.status >= 1 && (
                      <p>Waiting for pick up by GHURI</p>
                    )}
                    {parcelTracking.status < 1 && <p>Waiting</p>}
                  </small>
                </div>
                <div
                  className="col-sm-2 col-2"
                  style={{
                    opacity: parcelTracking.status >= 2 ? "1" : "0.4",
                    boxShadow:
                      parcelTracking.status === 2
                        ? "5px 10px 16px 0 rgba(0,0,0,0.3)"
                        : "",
                    transform:
                      parcelTracking.status === 2 ? "scale(1.2, 1.2)" : "",
                  }}
                >
                  <img className="img-fluid" src={pickedup} alt="" />
                  <h6>Picked Up</h6>
                  <small>{parcelTracking.pickedUp.pickedUpDateTime}</small>
                  <small>
                    {parcelTracking.status >= 2 && <p>Picked Up by GHURI</p>}
                    {parcelTracking.status < 2 && <p>Waiting</p>}
                  </small>
                </div>
                <div
                  className="col-sm-2 col-2"
                  style={{
                    opacity: parcelTracking.status >= 3 ? "1" : "0.4",
                    boxShadow:
                      parcelTracking.status === 3
                        ? "5px 10px 16px 0 rgba(0,0,0,0.3)"
                        : "",
                    transform:
                      parcelTracking.status === 3 ? "scale(1.2, 1.2)" : "",
                  }}
                >
                  <img className="img-fluid" src={inhub} alt="" />
                  <h6>In hub</h6>
                  <small>
                    {parcelTracking.hubReceived.hubReceivedDateTime}
                  </small>
                  <small>
                    {parcelTracking.status >= 3 && <p>Parcel in Ghuri Hub</p>}
                    {parcelTracking.status < 3 && <p>Waiting</p>}
                  </small>
                </div>
                <div
                  className="col-sm-2 col-2"
                  style={{
                    opacity: parcelTracking.status >= 4 ? "1" : "0.4",
                    boxShadow:
                      parcelTracking.status === 4
                        ? "5px 10px 16px 0 rgba(0,0,0,0.3)"
                        : "",
                    transform:
                      parcelTracking.status === 4 ? "scale(1.2, 1.2)" : "",
                  }}
                >
                  <img className="img-fluid" src={ondelivery} alt="" />
                  <h6>On delivery</h6>
                  <small>
                    {parcelTracking.deliveryAssign.assignedDateTime}
                  </small>
                  <small>
                    {parcelTracking.status >= 4 && (
                      <p>Delivery on Progress by GHURI</p>
                    )}
                    {parcelTracking.status < 4 && <p>Waiting</p>}
                  </small>
                </div>
                {parcelTracking.status === 6 && (
                  <div
                    className="col-sm-2 col-2"
                    style={{
                      opacity: parcelTracking.status >= 6 ? "1" : "0.4",
                      boxShadow:
                        parcelTracking.status === 6
                          ? "5px 10px 16px 0 rgba(0,0,0,0.3)"
                          : "",
                      transform:
                        parcelTracking.status === 6 ? "scale(1.2, 1.2)" : "",
                      backgroundColor:
                        parcelTracking.status === 6 ? "#dc3545" : "",
                    }}
                  >
                    <img className="img-fluid" src={returnparcel} alt="" />
                    <div
                      className={parcelTracking.status === 6 ? "bg-danger" : ""}
                    ></div>
                    <h6>Return</h6>
                    <small>
                      {" "}
                      {parcelTracking.deliveryReturn.returnDateTime}
                    </small>
                    <small>
                      {" "}
                      <p>Return To Merchant</p>
                    </small>
                  </div>
                )}
                {parcelTracking.status <= 5 && (
                  <div
                    className="col-sm-2 col-2"
                    style={{
                      opacity: parcelTracking.status >= 5 ? "1" : "0.4",
                      boxShadow:
                        parcelTracking.status === 5
                          ? "5px 10px 16px 0 rgba(0,0,0,0.3)"
                          : "",
                      transform:
                        parcelTracking.status === 5 ? "scale(1.2, 1.2)" : "",
                      backgroundColor:
                        parcelTracking.status === 5 ? "#28a745" : "",
                    }}
                  >
                    <img className="img-fluid" src={delivered} alt="" />
                    <h6>Delivered</h6>
                    <small> {parcelTracking.delivered.deliveredDateTime}</small>
                    <small>
                      {parcelTracking.status >= 5 && (
                        <p>Delivered To Customer</p>
                      )}
                      {parcelTracking.status < 5 && <p>Waiting</p>}
                    </small>
                  </div>
                )}
              </div>
              <div className="cross_fa_times" onClick={handleClose}>
                {/* <i class="fa fa-times"></i> */}
                <img src={cancel_icon} alt="" />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ParcelDetails;
