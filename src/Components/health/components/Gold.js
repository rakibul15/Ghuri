import React, { useEffect } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import Gold_3 from "../../../images/Health/Gold_3.png";
import Gold_6 from "../../../images/Health/Gold_6.png";
import Gold_12 from "../../../images/Health/Gold_12.png";
import dghealth from "../../../images/Health/dg_health.png";
import ghurihealth from "../../../images/logo/ghuri_health.png";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import * as Types from "../../health/_redux/type/Types";
import { SendPackage } from "../_redux/action/HealthAction";
const Gold = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goldPackage1 = {
    price: "687",
    duration: "3",
  };
  const goldPackage2 = {
    price: "1374",
    duration: "6",
  };
  const goldPackage3 = {
    price: "2748",
    duration: "12",
  };

  const handleGold = (packgeType, packageValue) => {
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
          GHURI Health <span>Gold</span> Membership Packages
        </h1>
        <CardDeck className="pb-5">
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={Gold_3} />
            <Card.Body>
              <Card.Title className="card_title">
                687 TK
                <span>
                  <i class="fa fa-circle dot_circle"></i>
                </span>
                3 Months Validity
              </Card.Title>
            </Card.Body>

            <Card.Footer className="card_footer_health">
              <h6 class="card-subtitltext-muted text-center">
                <a onClick={() => history.push(`/health:gold3`)}>
                  Buy Now <i className="fa fa-chevron-right"></i>
                </a>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={Gold_6} />
            <Card.Body>
              <Card.Title className="card_title">
                1374 TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                6 Months Validity
              </Card.Title>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
                <a onClick={() => history.push(`/health:gold6`)}>
                  Buy Now <i className="fa fa-chevron-right"></i>
                </a>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={Gold_12} />
            <Card.Body>
              <Card.Title className="card_title">
                2748 TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                12 Months Validity
              </Card.Title>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
                <a onClick={() => history.push(`/health:gold12`)}>
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
              Up-to 200,000/year (BDT 20,000/claim x 10 times) Max 1 claim/month
            </li>
          </ul>
          <p>
            <i className="fa mr-2 fa-check"></i>Hospitalization Cash Coverage
            Details
          </p>
          <ul>
            <li>BDT 20,000 - 3 Nights stay</li>
            <li>BDT 12,400 - 2 Nights stay</li>
            <li>BDT 6,000 - 1 Night Stay</li>
            <li>BDT 3,000 Daycare</li>
          </ul>
          <p>
            <i className="fa mr-2 fa-check"></i>
            Hospitalization Cash Coverage Applicable for Primary Member only
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i>Isolation Coverage BDT 8,000
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
            Life Insurance Coverage Amount N/A.
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

export default Gold;
