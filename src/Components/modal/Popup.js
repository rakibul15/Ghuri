import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import logo from "../../images/logo/logo.svg";
import playstore from "../../images/footer/playstore.png";
import appstore from "../../images/footer/appstore.png";
import model from "../../images/others/POPUP.png";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      className="pop_up iXVEnI"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body className="modal_custom_body">
        {/* <div className="row">
          <div className="col-sm-4 col-md-6 col-4 ">
            <div className="row">
              <div className="col-sm-12 popup_modal">
              <img src={logo} alt="" className="img-fluid"/>
            <h2 className="mt-3">
              Download The App Now
            </h2>
              </div>
            </div>
            <div className="row mt-2 google_play_icon">
              <div className="col-sm-4 col-6">
              <a
                    href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={playstore} className="img-fluid" alt="" />
                  </a>
              </div>

              <div className="col-sm-4 col-6 text-left">
              <a
                    href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                    src={appstore}
                    className="img-fluid"
                    alt=""
                  />
                  </a>
              </div>

            </div>
          </div>
          <div className="col-sm-8 col-md-6 col-8">
           <img src={model} alt="" className="img-fluid" />
          </div>
         <div className="cross">
         <a onClick={props.onHide}><i class="fa fa-times"></i></a>
         </div>
        </div> */}

        <img src={model} alt="" className="img-fluid" />
        <div className="cross">
          <a onClick={props.onHide}>
            <i class="fa fa-times"></i>
          </a>
        </div>
{/* 
        <div className="playstore_popup">
          <a
            href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
            target="_blank"
            rel="noreferrer"
          >
            <img src={playstore} className="img-fluid" alt="" />
          </a>
        </div>
        <div className="appstore_popup">
          <a
            // href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appstore} className="img-fluid" alt="" />
          </a>
        </div> */}
      </Modal.Body>
    </Modal>
  );
}

const Popup = () => {
  let counter = 0;
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Popup;
