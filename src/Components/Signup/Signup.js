import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 

import "./Signup.css";
import "../../css/mediaQuery.css";
import {
  InputSignupText,
  SubmitSignupData,
} from "./_redux/action/SignupAction";
import { useHistory } from "react-router";


const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const signupTextInput = useSelector(
    (state) => state.signupInfo.signupTextInput
  );
  const isLoading = useSelector((state) => state.signupInfo.isLoading);

  const redirectToVerification = useSelector(
    (state) => state.signupInfo.redirectToVerification
  );

  useEffect(() => {
    if (redirectToVerification) {
      history.push("/verification");
    }
  }, [redirectToVerification]);

  const handleChangeTextInput = (name, value) => {
    dispatch(InputSignupText(name, value));
  };
  const submitSignup = (data) => {
    dispatch(SubmitSignupData(data));
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className="sign-top  signup_bg Nav_overflow">
        <div className="row d-flex align-items-center">
          <div className="col-sm-12 sm_center_fix center">
            <form className="sign-form container">
              <div className="row">
                <div className="col-sm-12 ">
                  <h4>Marchant Sign Up</h4>
                </div>
              </div>
              <div mb={4} mt={4} className="row ">
                <div className="col-sm-2">
                  <div className="form-check form-check-inline mr-5">
                    <input
                      className="form-check-input"
                      name="option1"
                      type="radio"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="Percel">
                      Percel
                    </label>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-check form-check-inline mr-5">
                    <input
                      className="form-check-input"
                      name="option1"
                      type="radio"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="Truck">
                      Truck
                    </label>
                  </div>
                </div>

                <div className="col-sm-2">
                  <div className="form-check form-check-inline mr-5">
                    <input
                      className="form-check-input"
                      name="option1"
                      type="radio"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="Food">
                      Food
                    </label>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      name="option1"
                      type="radio"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="Ride">
                      Ride
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="firstName"
                    onChange={(e) =>
                      handleChangeTextInput("firstName", e.target.value)
                    }
                    value={signupTextInput.firstName}
                    placeholder="Enter First Name"
                  />
                </div>

                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="lastName"
                    onChange={(e) =>
                      handleChangeTextInput("lastName", e.target.value)
                    }
                    value={signupTextInput.lastName}
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="email"
                    name="email"
                    onChange={(e) =>
                      handleChangeTextInput("email", e.target.value)
                    }
                    value={signupTextInput.email}
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="phone"
                    onChange={(e) =>
                      handleChangeTextInput("phone", e.target.value)
                    }
                    value={signupTextInput.phone}
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="password"
                    name="password"
                    onChange={(e) =>
                      handleChangeTextInput("password", e.target.value)
                    }
                    value={signupTextInput.password}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="password"
                    name="cpassword"
                    onChange={(e) =>
                      handleChangeTextInput("cpassword", e.target.value)
                    }
                    value={signupTextInput.cpassword}
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="businessName"
                    onChange={(e) =>
                      handleChangeTextInput("businessName", e.target.value)
                    }
                    value={signupTextInput.businessName}
                    placeholder="Enter Business Name"
                  />
                </div>

                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="businessUrl"
                    onChange={(e) =>
                      handleChangeTextInput("businessUrl", e.target.value)
                    }
                    value={signupTextInput.businessUrl}
                    placeholder="Business  URL"
                  />
                </div>
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="city"
                    onChange={(e) =>
                      handleChangeTextInput("city", e.target.value)
                    }
                    value={signupTextInput.city}
                    placeholder="Enter City Name"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="area"
                    onChange={(e) =>
                      handleChangeTextInput("area", e.target.value)
                    }
                    value={signupTextInput.area}
                    placeholder="Enter Area"
                  />
                </div>
                <div className="col-sm-8 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="address"
                    onChange={(e) =>
                      handleChangeTextInput("address", e.target.value)
                    }
                    value={signupTextInput.address}
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-12">
                  {/* <Form.Group controlId="formBasicCheckbox" checked>
    <Form.Check type="checkbox" label="I agree the terms and conditions of GHURI  Parcel" />
  </Form.Group> */}

                  <div className="form-check terms_condition">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      I agree the
                       <Link className="terms" to="/terms">
                       <a> terms and condition </a>
                      </Link> of GHURI Parcel
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mt-4 text-right">
                <div className="col-sm-12 sign-submit-btn">
                  {!isLoading && (
                    <a href onClick={() => submitSignup(signupTextInput)}>
                      Submit
                    </a>
                  )}
                  {isLoading && (
                    <a href disabled>
                      Submitting...
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </a>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
