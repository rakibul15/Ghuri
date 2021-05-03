import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { showToast } from "../../../utils/ToastHelper";
import { useStopwatch } from "react-timer-hook";
import {
  EmptyHealthOtp,
  ResendHealthOtp,
  SubmitHealthOtp,
} from "../_redux/action/HealthAction";
import { useHistory } from "react-router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const HealthVerification = (props) => {
  const { handleClose } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const healthFormInput = useSelector(
    (state) => state.healthInfo.healthFormInput
  );
  const healthOtpId = useSelector((state) => state.healthInfo.healthOtpId);
  const isSubmittedHealth = useSelector(
    (state) => state.healthInfo.isSubmittedHealth
  );

  const [smsCode, setSmsCode] = useState("");
  const [count, setCount] = useState(0);
  const { seconds, reset } = useStopwatch({ autoStart: true });
  const [resend, setResend] = useState(false);
  const duration = 59 - seconds;
  const mobile = healthFormInput.applicantPhone;
  const lastTwo = mobile.slice(-2);
  useEffect(() => {
    if (duration === 0) {
      setResend(true);
    }
  }, [seconds]);

  useEffect(() => {
    if (count === 3) {
      dispatch(EmptyHealthOtp());
      showToast("error", "Please Give Correct Phone Number");
      handleClose();
    }
  }, [count]);
  useEffect(() => {
    if (isSubmittedHealth) {
      handleClose();
      //alert to user
      confirmAlert({
        title: "Welcome",
        message: `We receive your application for ghuri health purchase. Ghuri health team will contact with you shortly.`,
        buttons: [
          {
            label: "Ok",
          },
          // {
          //   label: "No",
          // },
        ],
      });

      history.push("/health");
    }
  }, [isSubmittedHealth]);

  const handleResend = () => {
    if (count < 3) {
      dispatch(ResendHealthOtp(mobile));
    }
  };
  const handleSubmitVerification = (healthFormInput, smsCode, healthOtpId) => {
    dispatch(SubmitHealthOtp(healthFormInput, smsCode, healthOtpId));
  };

  return (
    <>
      <Modal.Header closeButton className="Nav_overflow">
        <Modal.Title>SMS VERIFICATION</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Enter verification code send to 01XXXXXXX{lastTwo}</h6>
        <div className="row mt-3">
          <div className="col-sm-9">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">GP-</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                placeholder="XXXXXX"
                aria-label="verification"
                aria-describedby="basic-addon1"
                value={smsCode}
                onChange={(e) => setSmsCode(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="col-sm-3">
            <span className="text-right">
              <a
                href
                style={{ cursor: "pointer" }}
                onClick={() => {
                  reset();
                  setResend(false);
                  handleResend();
                  setCount(count + 1);
                }}
              >
                {resend && "Resend?"}
              </a>
              {!resend && (
                <>
                  <span style={{ fontSize: "20px" }}>00:00:{duration}</span>
                </>
              )}
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() =>
            handleSubmitVerification(healthFormInput, smsCode, healthOtpId)
          }
        >
          Save
        </Button>
      </Modal.Footer>
    </>
  );
};

export default HealthVerification;
