import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import bronze from "../../images/Health/dh1.png";
import gold from "../../images/Health/dh2.png";
import platinum from "../../images/Health/dh3.png";
import users from "../../images/Health/users.png";
import money from "../../images/Health/money.png";
import video from "../../images/Health/video.png";
import call from "../../images/Health/call.png";
import chat from "../../images/Health/chat.png";
import dghealth from "../../images/Health/dg_health.png";
import ghurihealth from "../../images/logo/ghuri_health.png";

import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { passData } from "./_redux/action/HealthAction";

const Health = (props) => {
  const dispatch = useDispatch()

  return (
    <div className="m_color Nav_overflow">
    
      <Container>
        <h1 className="text-center health_headline pt-5 pb-5">
          GHURI Health Membership Packages
        </h1>
        <CardDeck className="pb-5">
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={bronze} />
            <Card.Body>
              <Card.Title className="card_title">
                ghuri health Bronze{" "}
              </Card.Title>
              <h6 className="card-subtitle mb-2 text-muted package_price">
                948 TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                12 Months Validity
              </h6>
              <Card.Text>
                <img src={users} className="img-fluid img_users" alt="" />
                <img src={money} className="img-fluid img_users" alt="" />
                <br />
                <br />

                <h6 className="card-subtitle mb-2 text-muted body_text_info">
                  Up to BDT 40,000 Health Cashback for Primary Member
                </h6>
                <img
                  src={video}
                  className="img-fluid img_comunication"
                  alt=""
                />
                <img src={call} className="img-fluid img_comunication" alt="" />
                <img src={chat} className="img-fluid img_comunication" alt="" />
                <br />
                <br />
                <h6 className="card-subtitle mb-2 text-muted body_text_info">
                  Unlimited Doctor Call, Video Call & Chat
                </h6>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
                <Link to="/bronze">
                  Subscribe <i className="fa fa-chevron-right"></i>
                </Link>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={gold} />
            <Card.Body>
              <Card.Title className="card_title">
                ghuri health Silver{" "}
              </Card.Title>
              <h6 className="card-subtitle mb-2 text-muted package_price">
                1788 TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>{" "}
                12 Months Validity
              </h6>
              <Card.Text>
                <img src={users} className="img-fluid img_users" alt="" />
                <img src={money} className="img-fluid img_users" alt="" />
                <br />
                <br />

                <h6 className="card-subtitle mb-2 text-muted body_text_info">
                  Up to BDT 100,000 Health Cashback for Primary Member
                </h6>
                <img
                  src={video}
                  className="img-fluid img_comunication"
                  alt=""
                />
                <img src={call} className="img-fluid img_comunication" alt="" />
                <img src={chat} className="img-fluid img_comunication" alt="" />
                <br />
                <br />
                <h6 className="card-subtitle mb-2 text-muted body_text_info">
                  Unlimited Doctor Call, Video Call & Chat
                </h6>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
                <Link to="/silver">
                  Subscribe <i className="fa fa-chevron-right"></i>
                </Link>
              </h6>
            </Card.Footer>
          </Card>
          <Card className="card_color">
            <Card.Img variant="top" className="img-fluid" src={platinum} />
            <Card.Body>
              <Card.Title className="card_title">ghuri health Gold</Card.Title>
              <h6 className="card-subtitle mb-2 text-muted package_price">
                2748 TK
                <span>
                  <i className="fa fa-circle dot_circle"></i>
                </span>
                12 Months Validity
              </h6>
              <Card.Text>
                <img src={users} className="img-fluid img_users" alt="" />
                <img src={money} className="img-fluid img_users" alt="" />
                <br />
                <br />

                <h6 className="card-subtitle mb-2 text-muted body_text_info">
                  Up to BDT 200,000 Health Cashback for Primary Member
                </h6>
                <img
                  src={video}
                  className="img-fluid img_comunication"
                  alt=""
                />
                <img src={call} className="img-fluid img_comunication" alt="" />
                <img src={chat} className="img-fluid img_comunication" alt="" />
                <br />
                <br />
                <h6 className="card-subtitle mb-2 text-muted body_text_info">
                  Unlimited Doctor Call, Video Call & Chat
                </h6>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card_footer_health">
              <h6 className="card-subtitltext-muted text-center">
                <Link to="/gold">
                  Subscribe <i className="fa fa-chevron-right"></i>
                </Link>
              </h6>
            </Card.Footer>
          </Card>
        </CardDeck>
        <div className="powered_by text-center">
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

export default Health;
