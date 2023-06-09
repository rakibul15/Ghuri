import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./Signup.css";
import "../../css/mediaQuery.css";
import {
  GetArea,
  GetDistrictList,
  GetHubList,
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
  const hubList = useSelector((state) => state.signupInfo.hubList);

  const redirectToVerification = useSelector(
    (state) => state.signupInfo.redirectToVerification
  );
  const allDistrictList = useSelector(
    (state) => state.signupInfo.allDistrictList
  );

  useEffect(() => {
    if (redirectToVerification) {
      // history.push("/verification");
      window.location.assign(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`);
    }
  }, [redirectToVerification]);

  const handleChangeTextInput = (name, value) => {
    dispatch(InputSignupText(name, value));
  };
  const submitSignup = (data) => {
    dispatch(SubmitSignupData(data));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    // dispatch(GetHubList());
    dispatch(GetDistrictList());
  }, []);
  console.log(`signupTextInput`, signupTextInput);
  console.log(`allDistrictList`, allDistrictList);
  return (
    <div>
      <div className="sign-top  signup_bg Nav_overflow">
        <div className="row  center sm_center_fix">
          <div className="col-sm-12  ">
            <form className="sign-form container ">
              <div className="row">
                <div className="col-sm-12 ">
                  <h5>Merchant Sign Up</h5>
                </div>
              </div>
              <div className="row sign_margin_top d-flex align-items-center ">
                <div className="col-sm-2 col-6">
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
                <div className="col-sm-2 col-6">
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

                <div className="col-sm-2 col-6">
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
                <div className="col-sm-2 col-6">
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
              <div className="row sign_margin_top ">
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

              <div className="row sign_margin_top">
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
                    placeholder="Enter Mobile (01XXXXXXXXX)"
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
              <div className="row sign_margin_top">
                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="shopName"
                    onChange={(e) =>
                      handleChangeTextInput("shopName", e.target.value)
                    }
                    value={signupTextInput.shopName}
                    placeholder="Enter Business Name"
                  />
                </div>

                <div className="col-sm-4 fullwidth">
                  <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="shopUrl"
                    onChange={(e) =>
                      handleChangeTextInput("shopUrl", e.target.value)
                    }
                    value={signupTextInput.shopUrl}
                    placeholder="Business  URL"
                  />
                </div>
                <div className="col-sm-4 fullwidth">
                  {/* <input
                    autoComplete="off"
                    className="input"
                    type="text"
                    name="city"
                    onChange={(e) =>
                      handleChangeTextInput("city", e.target.value)
                    }
                    value={signupTextInput.city}
                    placeholder="Enter City Name"
                  /> */}
                  <div className="row">
                    <div className="col-sm-3">
                      <span className="select-dis">City</span>
                    </div>
                    <div className="col-sm-9">
                      <Select
                        className="react-select"
                        options={allDistrictList}
                        value={{ label: signupTextInput.city }}
                        placeholder={"Hi"}
                        name="city"
                        onChange={(option) => {
                          handleChangeTextInput("city", option.value);
                          if (option.value !== "Dhaka") {
                            handleChangeTextInput("area", option.value);
                          }
                          // handleChangeTextInput("strPaymentMethod", option.label);//
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row sign_margin_top">
                {signupTextInput.city === "Dhaka" && (
                  <div className="col-sm-4 fullwidth">
                    {/* <input
       autoComplete="off"
       className="input"
       type="text"
       name="area"
       onChange={(e) =>
         handleChangeTextInput("area", e.target.value)
       }
       value={signupTextInput.area}
       placeholder="Enter Area" ///
     /> */}
                    <select
                      className="form-control"
                      name="area"
                      onChange={(e) =>
                        handleChangeTextInput("area", e.target.value)
                      }
                      value={signupTextInput.area}
                    >
                      <option>Select Area</option>
                      {GetArea().map((item, index) => (
                        <option value={item.value}>{item.value}</option>
                      ))}
                    </select>
                  </div>
                )}

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
              <div className="row sign_margin_top ">
                <div className="col-sm-12">
                  <div className="form-check terms_condition checkbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      I agree the
                      <a href="/terms" target="_Blank">
                        {" "}
                        terms and condition{" "}
                      </a>
                      of GHURI Parcel
                    </label>
                  </div>
                </div>
              </div>

              <div className="row sign_margin_top text-right">
                <div className="col-sm-12 sign-submit-btn">
                  {!isLoading && (
                    <a onClick={() => submitSignup(signupTextInput)}>Submit</a>
                  )}
                  {isLoading && (
                    <a disabled>
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
