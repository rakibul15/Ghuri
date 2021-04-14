import React, { useEffect } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import bronze from "../../../images/Health/dh1.png";
import gold from "../../../images/Health/dh2.png";
import platinum from "../../../images/Health/dh3.png";
import dghealth from "../../../images/Health/dg_health.png";
import ghurihealth from "../../../images/logo/ghuri_health.png"
import * as Types from '../../health/_redux/type/Types'
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { SendPackage } from "../_redux/action/HealthAction";

const Silver = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const silverPackage1 = {
    price:"500",
    duration:"3"
  }
  const silverPackage2 = {
    price:"900",
    duration:"6"
  }
  const silverPackage3 = {
    price:"1800",
    duration:"12"
  }

  const handleSilver = (packgeType, packageValue)=>{
    history.push('/healthform')
    
   dispatch(SendPackage(packgeType, packageValue))
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="silver_package">
      <Container>
        <h1 className="text-center health_headline pt-5 pb-5">
          GHURI Health <span>Silver</span> Membership Packages
        </h1>
        <CardDeck className="pb-5">
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={bronze} />
            <Card.Body>
              <Card.Title className="card_title">
                {silverPackage1.price} TK
                <span>
                  <i class="fa fa-circle dot_circle"></i>
                </span>
                {silverPackage1.duration} Months Validity
              </Card.Title>
            </Card.Body>

            <Card.Footer className="card_footer_health">
              <h6 class="card-subtitltext-muted text-center">
              <a href
              onClick={()=>handleSilver(Types.SILVER_PACKAGE_1, silverPackage1)}
              >
                Buy Now <i class="fa fa-chevron-right"></i> 
              </a>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={gold} />
            <Card.Body>
              <Card.Title className="card_title">
                {silverPackage2.price} TK
                <span>
                  <i class="fa fa-circle dot_circle"></i>
                </span>
                {silverPackage2.duration} Months Validity
              </Card.Title>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 class="card-subtitltext-muted text-center">
              <a href
              onClick={()=>handleSilver(Types.SILVER_PACKAGE_2, silverPackage2)}
              >
                Buy Now <i class="fa fa-chevron-right"></i> 
              </a>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={platinum} />
            <Card.Body>
              <Card.Title className="card_title">
                {silverPackage3.price} TK
                <span>
                  <i class="fa fa-circle dot_circle"></i>
                </span>
                {silverPackage3.duration} Months Validity
              </Card.Title>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 class="card-subtitltext-muted text-center">
              <a href
              onClick={()=>handleSilver(Types.SILVER_PACKAGE_3, silverPackage3)}
              >
                Buy Now <i class="fa fa-chevron-right"></i> 
              </a>
              </h6>
            </Card.Footer>
          </Card>
        </CardDeck>
        <div className="package_content_details">
          <h2>Health Cashback </h2>
          <h4>Plan Includes</h4>
          <p>
            <i class="fa mr-2 fa-check"></i> Free Doctor Call, Video Call & Chat
          </p>
          <p>
            <i class="fa mr-2 fa-check"></i> Maximum Hospitalization Cash
            Coverage
          </p>
          <ul>
            <li>
              Up-to 100,000/year (BDT 10,000/claim x 10 times) Max 1 claim/month
            </li>
          </ul>
          <p>
            <i class="fa mr-2 fa-check"></i>Hospitalization Cash Coverage
            Details
          </p>
          <ul>
            <li>BDT 10,000 - 3 Nights stay</li>
            <li>BDT 6,000 - 2 Nights stay</li>
            <li>BDT 3,000 - 1 Night Stay</li>
            <li>BDT 1,500 Daycare</li>
          </ul>
          <p>
            <i class="fa mr-2 fa-check"></i>
            Hospitalization Cash Coverage Applicable for Primary Member only
          </p>
          <p>
            <i class="fa mr-2 fa-check"></i>Isolation Coverage BDT 5,000
          </p>
          <p>
           
            <i class="fa mr-2 fa-check"></i>Isolation Coverage Applicable for
            Primary Member
          </p>
          <p>
            <i class="fa mr-2 fa-check"></i>
            OPD Coverage of BDT 1,600 with up to 2 claims(BDT 800 per claim) for
            doctor consultation(minimum MBBS). Applicable for Primary Member
            only.
          </p>
          <p>
            <i class="fa mr-2 fa-check"></i> Maternity Coverage applicable for
            primary member only
          </p>
          <p>
            <i class="fa mr-2 fa-check"></i>
            Life Insurance Coverage Amount N/A
          </p>
          <p>
            <i class="fa mr-2 fa-check"></i> Up-to 35% Discount at over 1000
            Partner Outlets
          </p>
          <p>
            <i class="fa mr-2 fa-check"></i> Appointment Booking Facility with
            1200+ Specialist Doctors
          </p>
        </div>
        <div className="powered_by text-center mt-5">
          <img src={ghurihealth} className="img-fluid ghuri_health mr-3" alt="" />
          <img src={dghealth} className="img-fluid dg_health" alt="" />
          <h6>Powered By</h6>
        </div>
      </Container>
    </div>
  );
};

export default Silver;
