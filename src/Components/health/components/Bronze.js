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

const Bronze = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const bronzePackage1 = {
    price:"300",
    duration:"3"
  }
  const bronzePackage2 = {
    price:"500",
    duration:"6"
  }
  const bronzePackage3 = {
    price:"1000",
    duration:"12"
  }

  const handleBronze = (packgeType, packageValue)=>{
    history.push(`/healthform:1`)
    
   dispatch(SendPackage(packgeType, packageValue))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  return (
    <div className="silver_package">
      <Container>
        <h1 className="text-center health_headline pt-5 pb-5">
          GHURI Health <span>bronze</span> Membership Packages
        </h1>
        <CardDeck className="pb-5">
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={bronze} />
            <Card.Body>
              <Card.Title className="card_title">
              
                300 TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
               3 Months Validity
              </Card.Title>
            </Card.Body>

            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
              <a href
              onClick={()=>history.push('/healthform:1')}
              >
                Buy Now <i className="fa fa-chevron-right"></i> 
              </a>  
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={gold} />
            <Card.Body>
              <Card.Title className="card_title">
               
                500 TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                6 Months Validity
              </Card.Title>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
              <a href
               onClick={()=>history.push('/healthform:2')}
              >
                Buy Now <i className="fa fa-chevron-right"></i> 
              </a>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={platinum} />
            <Card.Body>
              <Card.Title className="card_title">
                1000 TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                12 Months Validity
              </Card.Title>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
              <a href
              onClick={()=>history.push('/healthform:3')}
              >
                Buy Now <i clasclassNames="fa fa-chevron-right"></i> 
              </a>
              </h6>
            </Card.Footer>
          </Card>
        </CardDeck>
        <div className="package_content_details">
          <h2>Health Cashback </h2>
          <h4>Plan Includes</h4>
          <p>
           
            <i className="fa mr-2 fa-check"></i> Free Doctor Call, Video Call & Chat
          </p>
          <p>
      
            <i className="fa mr-2 fa-check"></i> Maximum Hospitalization Cash
            Coverage
          </p>
          <ul>
            <li>
              Up-to 40,000/year (BDT 4,000/claim x 10 times) Max 1 claim/month
            </li>
          </ul>
          <p>
            <i className="fa mr-2 fa-check"></i>Hospitalization Cash Coverage
            Details
          </p>
          <ul>
            <li>BDT 4,000 - 3 Nights stay</li>
            <li>BDT 2,400 - 2 Nights stay</li>
            <li>BDT 1,200 - 1 Night Stay</li>
            <li>No Daycare</li>
          </ul>
          <p>
        
            <i className="fa mr-2 fa-check"></i>
            Hospitalization Cash Coverage Applicable for Primary Member only
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i>Isolation Coverage BDT 2,000
          </p>
          <p>
          
            <i className="fa mr-2 fa-check"></i>Isolation Coverage Applicable for
            Primary Member
          </p>
          <p>

            <i className="fa mr-2 fa-check"></i>
            OPD Coverage of BDT 1,600 with up to 2 claims(BDT 800 per claim) for
            doctor consultation(minimum MBBS). Applicable for Primary Member
            only.
          </p>
          <p>
         
            <i className="fa mr-2 fa-check"></i> Maternity Coverage applicable for
            primary member only
          </p>
          <p>
            {" "}
            <i className="fa mr-2 fa-check"></i>
            Life Insurance Coverage Amount BDT 10,000. Applicable for Primary
            Member only.
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i> Up-to 35% Discount at over 1000
            Partner Outlets
          </p>
          <p>
            <i className="fa mr-2 fa-check"></i> Appointment Booking Facility with
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

export default Bronze;
