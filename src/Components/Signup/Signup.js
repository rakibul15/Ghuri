import React, {useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import video from "../Header/ghuri_percel.mp4";
import validate from "./FormValidationRules";
import "./Signup.css";
import "../../css/mediaQuery.css"
import useForm from "./useForm";
import { InputSignupText, SubmitSignupData } from "./_redux/action/SignupAction";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const signupTextInput = useSelector(state => state.signupInfo.signupTextInput)
  const isLoading = useSelector((state) => state.signupInfo.isLoading);
  const redirectToLogin = useSelector((state) => state.signupInfo.redirectToLogin);
  // console.log(`signupTextInput`, signupTextInput)
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
console.log(`test`)
useEffect(() => {
 if(redirectToLogin){
  window.location.assign(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`)
 }
}, [redirectToLogin])

  function login(e) {
    e.preventDefault();
    console.log(values.lname);
  }
  const handleChangeTextInput=(name,value)=>{
    dispatch(InputSignupText(name,value))
  }
const submitSignup=(data)=>{
  
  dispatch(SubmitSignupData(data))

}



return (
        <div>
        <div className="sign-top  signup_bg">
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
                      className={`input ${errors.fname && "is-danger"}`}
                      type="text"
                      name="firstName"
                      onChange={(e)=>handleChangeTextInput("firstName",e.target.value)}
                      value={signupTextInput.firstName}
                      placeholder="Enter First Name"
                    />
                  </div>
                  {/* {errors.firstName && <p className="help">{errors.firstName}</p>} */}
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.lname && "is-danger"}`}
                      type="text"
                      name="lastName"
                      onChange={(e)=>handleChangeTextInput("lastName",e.target.value)}
                      value={signupTextInput.lastName}
                      placeholder="Enter Last Name"
                      // required
                    />
                  </div> 
                  {/* {errors.lastName && <p className="help">{errors.lastName}</p>} */}
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.email && "is-danger"}`}
                      type="email"
                      name="email"
                      onChange={(e)=>handleChangeTextInput("email",e.target.value)}
                      value={signupTextInput.email}
                      placeholder="Enter Email"
                      // required
                    />
                    {/* {errors.email && <p className="help">{errors.email}</p>} */}
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.phone && "is-danger"}`}
                      type="text"
                      name="phone"
                      onChange={(e)=>handleChangeTextInput("phone",e.target.value)}
                      value={signupTextInput.phone}
                      placeholder="Enter Mobile Number"
                      // required
                    />
                    {/* {errors.phone && <p className="help">{errors.phone}</p>} */}
                  </div>
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.password && "is-danger"}`}
                      type="password"
                      name="password"
                      onChange={(e)=>handleChangeTextInput("password",e.target.value)}
                      value={signupTextInput.password}
                      placeholder="Enter Password"
                      // required
                    />
                    {/* {errors.password && (
                      <p className="help">{errors.password}</p>
                    )} */}
                  </div>
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.cpassword && "is-danger"}`}
                      type="password"
                      name="cpassword"
                      onChange={(e)=>handleChangeTextInput("cpassword",e.target.value)}
                      value={signupTextInput.cpassword}
                      placeholder="Confirm Password"
                      // required
                    />
                    {/* {errors.cpassword && (
                      <p className="help">{errors.cpassword}</p>
                    )} */}
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.businessName && "is-danger"}`}
                      type="text"
                      name="businessName"
                      onChange={(e)=>handleChangeTextInput("businessName",e.target.value)}
                      value={signupTextInput.businessName}
                      placeholder="Enter Business  Name"
                      // required
                    />
                    {/* {errors.businessName && (
                      <p className="help">{errors.businessName}</p>
                    )} */}
                  </div>

                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.businessUrl && "is-danger"}`}
                      type="text"
                      name="businessUrl"
                      onChange={(e)=>handleChangeTextInput("businessUrl",e.target.value)}
                      value={signupTextInput.businessUrl}
                      placeholder="Business  URL"
                      // required
                    />
                    {/* {errors.businessUrl && (
                      <p className="help">{errors.businessUrl}</p>
                    )} */}
                  </div>
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.city && "is-danger"}`}
                      type="text"
                      name="city"
                      onChange={(e)=>handleChangeTextInput("city",e.target.value)}
                      value={signupTextInput.city}
                      placeholder="Enter City  Name"
                      // required
                    />
                    {/* {errors.city && <p className="help">{errors.city}</p>} */}
                  </div>
               
                </div>
                <div className="row mt-4">
                <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.area && "is-danger"}`}
                      type="text"
                      name="area"
                      onChange={(e)=>handleChangeTextInput("area",e.target.value)}
                      value={signupTextInput.area}
                      placeholder="Enter Area"
                      // required
                    />
                    {/* {errors.area && <p className="help">{errors.area}</p>} */}
                  </div>
                  <div className="col-sm-8 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.address && "is-danger"}`}
                      type="text"
                      name="address"
                      onChange={(e)=>handleChangeTextInput("address",e.target.value)}
                      value={signupTextInput.address}
                      placeholder="Enter Address"
                      required
                    />
                    {/* {errors.address && <p className="help">{errors.address}</p>} */}
                  </div>
                </div>

                {/* <div className="row mt-4 text-right">
                  <div className="col-sm-12 sign-submit-btn">
                    {!isLoading && (
                    <a
                    onClick={()=>submitSignup(signupTextInput)}
                    >
                    Submit
                    </a>
                    )}
                     {isLoading && (
                    <a
                    disabled
                    >
                    Submitting...{"  "}<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </a>
                    )}
                  </div>
                </div> */}
              </form>
              {/* <a className="btn btn-success" onClick={()=>handleCheck()}>SS</a> */}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
  );
};

export default Signup;
