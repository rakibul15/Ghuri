import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/main.css";
import { Card } from "react-bootstrap";
import { useStopwatch } from "react-timer-hook";
import {
  ResendOtp,
  RiderectVerifiCatioFalse,
  SubmitSmsCode,
} from "./_redux/action/SignupAction";
import { showToast } from "../../utils/ToastHelper";
import { useHistory } from "react-router";

const SmsVerification = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const redirectToLogin = useSelector(
    (state) => state.signupInfo.redirectToLogin
  );
  const [smsCode, setSmsCode] = useState("");
  const [count, setCount] = useState(0);
  const { seconds, reset } = useStopwatch({ autoStart: true });
  const [resend, setResend] = useState(false);
  useEffect(() => {
    if (30 - seconds === 0) {
      setResend(true);
    }
  }, [seconds]);
  console.log(`count`, count);
  useEffect(() => {
    if (redirectToLogin) {
      window.location.assign(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`);
    }
  }, [redirectToLogin]);
  useEffect(() => {
    if (count === 3) {
      showToast("error", "Please Give Correct Phone Number");
      history.push("/merchant");
    }
  }, [count]);
  useEffect(() => {
    dispatch(RiderectVerifiCatioFalse());
  }, []);
  const handleSubmit = (code) => {
    dispatch(SubmitSmsCode(code));
  };
  const handleResend = () => {
    if (count < 3) {
      dispatch(ResendOtp());
    }
  };
  const userData = JSON.parse(localStorage.getItem("signupData"));
  const mobile = userData.phone;
  const lastTwo = mobile.slice(-2);

  return (
    <>
      <div className="sms Nav_overflow">
        <div
          style={{ minHeight: "600px" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="mt-4  bg-light">
            <Card.Body className="verification_box">
              <Card.Title>SMS VERIFICATION</Card.Title>
              <Card.Subtitle className="mb-2 verification_subtitle">
                Please enter the GHURI PARCEL registration verification code
                send to 01XXXXXXX{lastTwo}
              </Card.Subtitle>
              <Card.Text className="verification_input">
                <label>GP-</label>{" "}
                <input
                  className="mt-3 mb-1"
                  type="number"
                  name="smsVerification"
                  placeholder="Enter verification code"
                  value={smsCode}
                  onChange={(e) => setSmsCode(e.target.value)}
                />
              </Card.Text>
              <Card.Link>
                <a
                  className="btn btn-verification"
                  onClick={() => handleSubmit(smsCode)}
                >
                  Submit
                </a>
              </Card.Link>
              <Card.Link className="resend">
                <span className="text-right" >
                  <a
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
                      <span style={{ fontSize: "20px" }}>
                        00:00:{30 - seconds}
                      </span>
                    </>
                  )}
                </span>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SmsVerification;
