import React, { useState } from "react";
import parcelphone from "../../images/ParcelDetails/parcelMobile.png";
import documents from "../../images/ParcelDetails/documents.png";
import packages from "../../images/ParcelDetails/packages.png";
import accessories from "../../images/ParcelDetails/accessories.png";
import electronics from "../../images/ParcelDetails/elcetronics.png";
import giftItems from "../../images/ParcelDetails/giftItems.png";
import deliver from "../../images/ParcelDetails/deliver.png";
import playstore from "../../images/footer/playstore.png";
import appstore from "../../images/footer/appstore.png";
import box from "../../images/ParcelDetails/box.png";
import thumbsup from "../../images/ParcelDetails/thumbsup.png";
import light from "../../images/ParcelDetails/light.png";
import clock from "../../images/ParcelDetails/clock.png";
import rider from "../../images/ParcelDetails/rider.png";
import deliverearn from "../../images/ParcelDetails/deliverEarn.png";
import { Accordion, Button, Card, useAccordionToggle } from "react-bootstrap";

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
    console.log(eventKey);
  });

  return (
    <div className="card-header" type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const ParcelDetails = () => {
  const [activeKey, setActiveKey] = useState();

  const data = [
    { name: "mike", age: 22 },
    { name: "clive", age: 25 },
    { name: "morgan", age: 82 },
  ];

  return (
    <div>
      <div className="parcel_main">
        <div className="Nav_overflow">
          <div className="row parcel_main_content">
            <div className="col-sm-1"></div>
            <div className="col-sm-7">
            <div className="parcel_main_content_small">
            <h5>Ghuri Parcel</h5>
              <h2>On Demand Delivery at Your Doorstep</h2>
              <p>
                Need to send something on an emergency basis? Parcel is what you
                nedd!
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
                <span className="papp_fixes">Download Ghuri App</span>
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
                <span className="Play_fixed">Earn With Ghuri</span>
                <span>
                  <i className="fa fa-chevron-right"></i>
                </span>
              </a>
            </div>
            </div>
            <div className="col-sm-3 text-right">
              <img
                src={parcelphone}
                className="img-fluid"
                alt="Parcel Phone Image"
              />
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
      {/* Parcel Details Header End */}

      <section className="what_we_deliver">
        <h2 className="text-center mb-5">What We Deliver</h2>
        <div>
          <div className="row mt-4 mb-5 d-flex justify-content-center deliver">
            <div className="col-sm-2 text-center">
              <img src={documents} className="img-fluid" alt="" />
              <p>Documents</p>
            </div>
            <div className="col-sm-2  text-center">
              <img src={packages} className="img-fluid" alt="" />
              <p>Packages</p>
            </div>
            <div className="col-sm-2  text-center">
              <img src={accessories} className="img-fluid" alt="" />
              <p>Accessories</p>
            </div>
            <div className="col-sm-2  text-center">
              <img src={electronics} className="img-fluid" alt="" />
              <p>Electronics</p>
            </div>
            <div className="col-sm-2  text-center">
              <img src={giftItems} className="img-fluid" alt="" />
              <p>GiftItems</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to deliver Parcel */}
      <div className="row mt-5 mb-5 how_to_deliver_main">
        <div className="col-sm-12  text-center">
          <h2 className="mb-4">How to Deliver Parcel</h2>
        </div>
      </div>
      <div className="container-fluid how_to_container_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-5 ">
              <div className="card  download_app parcel_view_step ">
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
              </div>

              <div className="card custom_card  mt-4 parcel_view_step ">
                <div className="card-body">
                  <div class="card-text how_to_deliver">
                    <p>
                      <span>2</span> Download Ghuri App from
                    </p>
                  </div>
                </div>
              </div>

              <div className="card custom_card  mt-4 parcel_view_step">
                <div className="card-body">
                  <div class="card-text how_to_deliver">
                    <p>
                      <span>3</span> Download Ghuri App from
                    </p>
                  </div>
                </div>
              </div>

              <div className="card custom_card  mt-4 parcel_view_step">
                <div className="card-body ">
                  <div class="card-text how_to_deliver">
                    <p>
                      <span>4</span> Download Ghuri App from
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-right howdeliver">
              <img src={deliver} className="img-fluid" alt="" />
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
              <h6 className="mt-2">On Demand Delivery</h6>
              <small>
                You can deliver anything legal,from your charger to office
                documents with us without any hassle.
              </small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="content_info_box">
              <img src={thumbsup} className="img-fluid" alt="" />
              <h6 className="mt-2">We Are Reliable</h6>
              <small>
                You can keep your trust in us.Your product is safe to us as a
                child to it's mother.
              </small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="content_info_box">
              <img src={clock} className="img-fluid" alt="" />
              <h6 className="mt-2">Delivery On Time</h6>
              <small>
                We know time is valuable. We try our best to deliver your parcel
                in the quickest time.
              </small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="content_info_box">
              <img src={light} className="img-fluid" alt="" />
              <h6 className="mt-2">One-stop Solution</h6>
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
                <h2>Available right now</h2>
                <h4 className="mt-7">
                  Only inside Dhaka city. With the love & support of our
                  ambitious clients, we are constantly expanding to more places.{" "}
                </h4>
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
              <h2>Deliver And Earn</h2>
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
              <i class="fa fa-circle"></i> Work When You Want
              </div>
            </div>
          </div>

          <div className="left_bottom">
            <div className="card">
              <div className="card-body card_custom_attach">
              <i class="fa fa-circle"></i> Less work earn More <br/> within <br/> a short time
              </div>
            </div>
          </div>

          <div className="right_bottom">
            <div className="card">
              <div className="card-body card_custom_attach">
              <i class="fa fa-circle"></i> Extra earning with extra <br/> keeps you smilling 
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="Parcel_Faq">
        <div className="row text-center">
          <div className="col-sm-12">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5 mb-4">
          <div className="col-sm-4  col-md-2 col-6">
            <button className="btn  btn_Faq_active">
              <strong> I am a Marchent</strong>
            </button>
          </div>
          <div className="col-sm-4 col-md-2 col-6">
            <button className="btn btn_Faq">
              <strong> I am a fighter</strong>
            </button>
          </div>
        </div>
        <div className="row  d-flex justify-content-center mt-5 mb-4">
          <div className="col-sm-8">
            <Accordion defaultActiveKey="0">
              <div className="accordion_faq">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <i class="fa fa-plus"></i> How do I contact the deliverer?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body className="collapse_body">
                    Hello! I'm the body
                  </Card.Body>
                </Accordion.Collapse>
              </div>

              <div className="accordion_faq">
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <i class="fa fa-plus"></i> How do I cancel request
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <Card.Body className="collapse_body">
                    Hello! I'm another body
                  </Card.Body>
                </Accordion.Collapse>
              </div>
              <div className="accordion_faq">
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <i class="fa fa-plus"></i> How do I track my delivery?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="2">
                  <div className="collapse_body">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>

            {/* <Accordion defaultActiveKey={activeKey} activeKey={activeKey}>
        {data.map((item, index) => (
         
          <Card key={index}>
            <CustomToggle
              as={Card.Header}
              eventKey={index}
              handleClick={() => {
                if (activeKey === index) {
                  setActiveKey(-1);
                } else {
                  setActiveKey(index);
                }
                console.log(index)
              }}
            >
              {activeKey === index ? "-" : "+"}
              {item.name}
              
            </CustomToggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{item.age}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion> */}
          </div>
        </div>
      </section>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-4 col-md-2">
          <button className="btn btn_Faq btn_outline view_all_btn">
            <strong>
              View All FAQ <i class="fa fa-arrow-right"></i>
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetails;
