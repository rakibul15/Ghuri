import React, { useEffect } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import Silver_3 from "../../../images/Health/Silver_3.png";
import Silver_6 from "../../../images/Health/Silver_6.png";
import  Silver_12 from "../../../images/Health/Silver_12.png";
import dghealth from "../../../images/Health/dg_health.png";
import ghurihealth from "../../../images/logo/ghuri_health.png";
import * as Types from "../../health/_redux/type/Types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SendPackage } from "../_redux/action/HealthAction";

const Silver = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const silverPackage1 = {
    price: "447",
    duration: "3",
  };
  const silverPackage2 = {
    price: "894",
    duration: "6",
  };
  const silverPackage3 = {
    price: "1788",
    duration: "12",
  };

  const handleSilver = (packgeType, packageValue) => {
    history.push("/healthform");

    dispatch(SendPackage(packgeType, packageValue));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="silver_package Nav_overflow">
      <Container>
        <h1 className="text-center health_headline pt-5 pb-5">
          GHURI Health <span>Silver</span> Membership Packages
        </h1>
        <CardDeck className="pb-5">
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={Silver_3} />
            <Card.Body>
              <Card.Title className="card_title">
                {silverPackage1.price} TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                {silverPackage1.duration} Months Validity
              </Card.Title>
            </Card.Body>

            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
                <a
                  onClick={() =>
                    handleSilver(Types.SILVER_PACKAGE_1, silverPackage1)
                  }
                >
                  Buy Now <i className="fa fa-chevron-right"></i>
                </a>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={Silver_6} />
            <Card.Body>
              <Card.Title className="card_title">
                {silverPackage2.price} TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                {silverPackage2.duration} Months Validity
              </Card.Title>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
                <a
                  onClick={() =>
                    handleSilver(Types.SILVER_PACKAGE_2, silverPackage2)
                  }
                >
                  Buy Now <i className="fa fa-chevron-right"></i>
                </a>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={Silver_12} />
            <Card.Body>
              <Card.Title className="card_title">
                {silverPackage3.price} TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                {silverPackage3.duration} Months Validity
              </Card.Title>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
                <a
                
                  onClick={() =>
                    handleSilver(Types.SILVER_PACKAGE_3, silverPackage3)
                  }
                >
                  Buy Now <i className="fa fa-chevron-right"></i>
                </a>
              </h6>
            </Card.Footer>
          </Card>
        </CardDeck>
        <div className="package_content_details">
          <h2>Health Cashback </h2>
          <h4>Plan Includes</h4>
          <p>
            <i className="fa mr-2 fa-check"></i> Free Doctor Call, Video Call &
            Chat
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i> Maximum Hospitalization Cash
            Coverage
          </p>
          <ul>
            <li>
              Up-to 100,000/year (BDT 10,000/claim x 10 times) Max 1 claim/month
            </li>
          </ul>
          <p>
            <i className="fa mr-2 fa-check"></i>Hospitalization Cash Coverage
            Details
          </p>
          <ul>
            <li>BDT 10,000 - 3 Nights stay</li>
            <li>BDT 6,000 - 2 Nights stay</li>
            <li>BDT 3,000 - 1 Night Stay</li>
            <li>BDT 1,500 Daycare</li>
          </ul>
          <p>
            <i className="fa mr-2 fa-check"></i>
            Hospitalization Cash Coverage Applicable for Primary Member only
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i>Isolation Coverage BDT 5,000
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i>Isolation Coverage Applicable
            for Primary Member
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i>
            OPD Coverage of BDT 1,600 with up to 2 claims(BDT 800 per claim) for
            doctor consultation(minimum MBBS). Applicable for Primary Member
            only.
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i> Maternity Coverage applicable
            for primary member only
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i>
            Life Insurance Coverage Amount N/A
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i> Up-to 35% Discount at over 1000
            Partner Outlets
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i> Appointment Booking Facility
            with 1200+ Specialist Doctors
          </p>
        </div>
        <div className="powered_by text-center mt-5">
          <img
            src={ghurihealth}
            className="img-fluid ghuri_health mr-3"
            alt=""
          />
          <img src={dghealth} className="img-fluid dg_health" alt="" />
          <h6>Powered By</h6>
        </div>
      </Container>
    </div>
  );
};

export default Silver;
