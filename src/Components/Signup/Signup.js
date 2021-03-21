import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../Header/ghuri_percel.mp4";
import validate from "./FormValidationRules";
import "./Signup.css";
import useForm from "./useForm";

const Signup = () => {
  //   const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login(e) {
    e.preventDefault();
    // console.log("Hi")
    console.log(values.lname);
  }

  // let firstName, lastName, email, mobileNumber, password, confarmPass, businessName,city, businessType, address, refCode, typeOfProduct,area;
  // let Onchangefname = (event) => {
  //     firstName = event.target.value;
  //     console.log(firstName);

  // }
  // let Onchangelname = (event) => {
  //     lastName = event.target.value;

  // }
  // let Onchangemail = (event) => {
  //     email = event.target.value;

  // }
  // let Onchangenumber = (event) => {
  //     mobileNumber = event.target.value;

  // }
  // let Onchangepass = (event) => {
  //     password = event.target.value;

  // }
  // let Onchangecpass = (event) => {
  //     confarmPass = event.target.value;

  // }

  // let Onchangebname = (event) => {
  //     businessName = event.target.value;

  // }

  // let Onchangecity = (event) => {
  //     city = event.target.value;

  // }
  // let Onchangebtype = (event) => {
  //     businessType = event.target.value;

  // }
  // let Onchangeaddress = (event) => {
  //     address = event.target.value;

  // }
  // let Onchangerefcode = (event) => {
  //     refCode = event.target.value;

  // }
  // let Onchangearea = (event) => {
  //    area= event.target.value;
  //     console.log()

  // }
  // console.log(password);

  // let registration={
  //     userType:"",
  //     companyName:businessName,
  //     ownerName:firstName+lastName,
  //     city:city,
  //     area:area,
  //     address:address,
  //     email:email,
  //     phone:mobileNumber,
  //     password:password,
  // }
  // const [state, setstate] = useState({})
  // if (password!=confarmPass){
  //     alert("Password & Confarm Password Doesn't match")
  // }
  //   var name=firstName+lastName;
  //   console.log("name"+name);
  //     var data = new FormData();
  //     const registration = {
  //         userType:"",
  //         companyName:businessName,
  //         ownerName:firstName+lastName,
  //         city:city,
  //         area:area,
  //         address:address,
  //         email:email,
  //         phone:mobileNumber,
  //         password:password,

  //     };
  //     data.append("myjsonkey", JSON.stringify(data));

  let getData = (event) => {
    //   event.preventDefault();
    // if(password.match(confarmPass)){
    //   alert("Password Doesn't match")
    // }
    // if(password !=confarmPass){
    //     confarmPass.
    //     alert("")
    // }
    // console.log("FisrtName: " + firstName);
    // console.log("lastName: " + lastName);
    // console.log("email: " + email);
    // console.log("mobileNumber: " + mobileNumber);
    // console.log("password: " + password);
    // console.log("confarmPass: " + confarmPass);
    // // console.log('businessName: ' + businessName);
    // // console.log('businessUrl: ' + businessUrl);
    // console.log("businessType: " + businessType);
    // console.log("address: " + address);
    // console.log("refCode: " + refCode);
  };
  return (
  
      <div>
        <div className="sign-top  signup_bg">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12   ">
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
                      type="fname"
                      name="fname"
                      onChange={handleChange}
                      value={values.fname || ""}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  {errors.fname && <p className="help">{errors.fname}</p>}
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.lname && "is-danger"}`}
                      type="lname"
                      name="lname"
                      onChange={handleChange}
                      value={values.lname || ""}
                      placeholder="Last Name"
                      required
                    />
                  </div> 
                  {errors.lname && <p className="help">{errors.lname}</p>}
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.email && "is-danger"}`}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email || ""}
                      placeholder="Email"
                      required
                    />
                    {errors.email && <p className="help">{errors.email}</p>}
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.phone && "is-danger"}`}
                      type="phone"
                      name="phone"
                      onChange={handleChange}
                      value={values.phone || ""}
                      placeholder="Mobile Number"
                      required
                    />
                    {errors.phone && <p className="help">{errors.phone}</p>}
                  </div>
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.password && "is-danger"}`}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password || ""}
                      placeholder="Password"
                      required
                    />
                    {errors.password && (
                      <p className="help">{errors.password}</p>
                    )}
                  </div>
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.cpassword && "is-danger"}`}
                      type="password"
                      name="cpassword"
                      onChange={handleChange}
                      value={values.cpassword || ""}
                      placeholder="Confirm Password"
                      required
                    />
                    {errors.cpassword && (
                      <p className="help">{errors.cpassword}</p>
                    )}
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.businessName && "is-danger"}`}
                      type="businessName"
                      name="businessName"
                      onChange={handleChange}
                      value={values.businessName || ""}
                      placeholder="Business  Name"
                      required
                    />
                    {errors.businessName && (
                      <p className="help">{errors.businessName}</p>
                    )}
                  </div>

                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.businessUrl && "is-danger"}`}
                      type="businessUrl"
                      name="businessUrl"
                      onChange={handleChange}
                      value={values.businessUrl || ""}
                      placeholder="Business  URL"
                      required
                    />
                    {errors.businessUrl && (
                      <p className="help">{errors.businessUrl}</p>
                    )}
                  </div>
                  <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.city && "is-danger"}`}
                      type="city"
                      name="city"
                      onChange={handleChange}
                      value={values.city || ""}
                      placeholder="City  Name"
                      required
                    />
                    {errors.city && <p className="help">{errors.city}</p>}
                  </div>
               
                </div>
                <div className="row mt-4">
                <div className="col-sm-4 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.area && "is-danger"}`}
                      type="area"
                      name="area"
                      onChange={handleChange}
                      value={values.area || ""}
                      placeholder="Area"
                      required
                    />
                    {errors.area && <p className="help">{errors.area}</p>}
                  </div>
                  <div className="col-sm-8 fullwidth">
                    <input
                      autoComplete="off"
                      className={`input ${errors.address && "is-danger"}`}
                      type="address"
                      name="address"
                      onChange={handleChange}
                      value={values.address || ""}
                      placeholder="Address"
                      required
                    />
                    {errors.address && <p className="help">{errors.address}</p>}
                  </div>
                  {/* <div className="col-sm-4 fullwidth">
                                        <input type="text" name="rcode" id="" placeholder="Referal Code" onChange={Onchangerefcode} />
                                    </div> */}
                  {/* <div className="col-sm-4 fullwidth">

                                        <select className="select-box required">
                                            <option value="0">Select Type Of Products:</option>
                                            <option value="fashion">Fashion</option>
                                            <option value="dress">Dress</option>
                                            <option value="frozen">Frozen</option>
                                        </select>

                                    </div> */}
                </div>

                <div className="row mt-4 text-right">
                  <div className="col-sm-12 sign-submit-btn">
                    <input type="submit" value="Comming Soon" />
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
