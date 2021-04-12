import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { showToast } from "../../../utils/ToastHelper";
import { useStopwatch } from "react-timer-hook";
import {
  ResendHealthOtp,
  SubmitHealthOtp,
} from "../_redux/action/HealthAction";

const HealthVerification = (props) => {
  const { handleClose } = props;
  // const history = useHistory()
  const dispatch = useDispatch();
  //   const redirectToLogin = useSelector((state) => state.signupInfo.redirectToLogin);
  const healthFormInput = useSelector(
    (state) => state.healthInfo.healthFormInput
  );
  const healthOtpId = useSelector((state) => state.healthInfo.healthOtpId);
  const isSubmittedHealth = useSelector(
    (state) => state.healthInfo.isSubmittedHealth
  );
  console.log(`healthFormInput`, healthFormInput);
  const [smsCode, setSmsCode] = useState("");
  const [count, setCount] = useState(0);
  const { seconds, reset } = useStopwatch({ autoStart: true });
  const [resend, setResend] = useState(false);
  const duration = 5 - seconds;
  const mobile = healthFormInput.applicantPhone;
  const lastTwo = mobile.slice(-2);
  useEffect(() => {
    if (duration === 0) {
      setResend(true);
    }
  }, [seconds]);
  // useEffect(() => {

  // }, [healthOtpId])

  //  useEffect(() => {
  //   if(redirectToLogin){
  //     window.location.assign(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`)
  //   }
  //  }, [redirectToLogin])

  useEffect(() => {
    if (count === 3) {
      showToast("error", "Please Give Correct Phone Number");
      handleClose();
    }
  }, [count]);
  useEffect(() => {
    if (isSubmittedHealth) {
      handleClose();
    }
  }, [isSubmittedHealth]);

  // useEffect(() => {
  //   dispatch(RiderectVerifiCatioFalse())

  //   }, [])

  // const handleSubmit=(code)=>{
  //   dispatch(SubmitSmsCode(code))
  // }
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
      <Modal.Header closeButton>
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
          onClick={() => {
            handleSubmitVerification(healthFormInput, smsCode, healthOtpId);
            // handleClose();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </>
  );
};

export default HealthVerification;
