import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import {
  InputHealthForm,
  SubmitHealthForm,
} from "../_redux/action/HealthAction";
import Modal from "react-bootstrap/Modal";
import HealthVerification from "./HealthVerification";
import healthform from "../../../images/Health/healthFrom.png";

const HealthForm = () => {
  const healthFormInput = useSelector(
    (state) => state.healthInfo.healthFormInput
  );
  const healthOtpId = useSelector((state) => state.healthInfo.healthOtpId);
  const isHealthSubmitting = useSelector(
    (state) => state.healthInfo.isHealthSubmitting
  );
  console.log(`isHealthSubmitting`, isHealthSubmitting);
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (healthOtpId && healthOtpId !== null && healthOtpId.length > 0) {
      handleShow();
    }
  }, [healthOtpId]);

  const handleChangeTextInput = (name, value) => {
    console.log(`value`, value);
    dispatch(InputHealthForm(name, value));
  };
  const handleSubmit = (data) => {
    dispatch(SubmitHealthForm(data));
  };
  let price = 0;
  let duration = 0;
  if (id === ":1") {
    price = 237;
    duration = 3;
  } else if (id === ":2") {
    price = 474;
    duration = 6;
  } else if (id === ":3") {
    price = 948;
    duration = 12;
  } else if (id === ":4") {
    price = 447;
    duration = 3;
  } else if (id === ":5") {
    price = 894;
    duration = 6;
  } else if (id === ":6") {
    price = 1788;
    duration = 12;
  } else if (id === ":7") {
    price = 687;
    duration = 3;
  } else if (id === ":8") {
    price = 1374;
    duration = 6;
  } else if (id === ":9") {
    price = 2748;
    duration = 12;
  }
  return (
    <div className="cover_healthform">
      <div className="container confirm_package_details pt-5 pb-5 Nav_overflow">
        <div className="row">
          <div className="col-sm-6">
            <h4 className="text-center mb-4">Applicant Info</h4>
          </div>
        </div>

        <div className="row d-flex align-items-center edit-form-control">
          <div className="col-sm-6">
            <Form className="form_applicant">
              <Form.Row className="health_form_row">
                <Form.Group className="col-sm-6 ">
                  <label htmlFor="name">Name</label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Applicant Name"
                    value={healthFormInput.nameShow}
                    onChange={(e) => {
                      handleChangeTextInput(
                        "name",
                        e.target.value +
                          "(Package: " +
                          duration +
                          " M, Price: " +
                          price +
                          "Tk)"
                      );
                      handleChangeTextInput("nameShow", e.target.value);
                    }}
    
                  />
                </Form.Group>

                <Form.Group className="col-sm-6">
                  <label htmlFor="pnum">Applicant Phone Number</label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>+880</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    type="number"
                    name="applicantPhone"
                    placeholder="1xxxxxxxx"
                    value={healthFormInput.applicantPhone}
                    onChange={(e) =>
                      handleChangeTextInput("applicantPhone", e.target.value)
                    }
                  />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row className="health_form_row">
                <Form.Group className="col-sm-6">
                  <label htmlFor="dob">Date of Birth</label>
                  <Form.Control
                    type="date"
                    name="dateOfBirth"
                    placeholder="date"
                    value={healthFormInput.dateOfBirth}
                    onChange={(e) =>
                      handleChangeTextInput("dateOfBirth", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="col-sm-6">
                  <label htmlFor="gender">Gender</label>
                  <Form.Control
                    className="form_control_select"
                    as="select"
                    defaultValue="Choose..."
                    name="gender"
                    value={healthFormInput.gender}
                    onChange={(e) =>
                      handleChangeTextInput("gender", e.target.value)
                    }
                  >
                    <option>Please Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              {/* <Form.Row className="justify-content-center">
               
              </Form.Row> */}

              <Form.Row className="health_form_row">
                <Form.Group className="col-sm-12">
                  <label htmlFor="pass">Address</label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter Applicant Address"
                    value={healthFormInput.address}
                    onChange={(e) =>
                      handleChangeTextInput("address", e.target.value)
                    }
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row className="health_form_row">
                <Form.Group className="col-sm-12">
                  <label htmlFor="email">Email</label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Please enter Email"
                    value={healthFormInput.email}
                    onChange={(e) =>
                      handleChangeTextInput("email", e.target.value)
                    }
                  />
                </Form.Group>
              </Form.Row>

              {/* <Form.Row className="justify-content-center">
                
              </Form.Row> */}

              <Form.Row className="health_form_row">
                <Form.Group className="col-sm-6">
                  <label htmlFor="nominee">Nominee Name</label>
                  <Form.Control
                    name="nominee"
                    placeholder="Enter Nominee Name"
                    value={healthFormInput.nominee}
                    onChange={(e) =>
                      handleChangeTextInput("nominee", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group className="col-sm-6">
                  <label htmlFor="nominee_rel">Relationship with Nominee</label>
                  {/* <Form.Control
                    name="nomineeRelation"
                    placeholder="Relationship with Nominee"
                    value={healthFormInput.nomineeRelation}
                    onChange={(e) =>
                      handleChangeTextInput("nomineeRelation", e.target.value)
                    }
                  /> */}
                  <Form.Control
                    className="form_control_select"
                    as="select"
                    defaultValue="Choose..."
                    name="gender"
                   
                  >
                    <option>Please Select</option>
                    <option value="Male">Parents</option>
                    <option value="Female">Spouse</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row className="health_form_row">
                <div className="col-sm-12 package_confirm_details">
                  <p>This Package contains <span> {duration} MONTHS</span> of validity at cost of <span>{price} BDT</span>only</p>
                  
                </div>
              </Form.Row >

              <Form.Row className="health_form_row">
                <div className="col-sm-12">
                  {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check className="checkbox"
                      type="checkbox"
                      label="I agree with all the terms and conditions"
                    />
                  </Form.Group> */}
                  <div className="form-check terms_condition">
                    <input
                      className="form-check-input checkbox"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label  " for="flexCheckChecked">
                   
                     
                      I agree with all the 
                      <Link className="checkbox" to="/HealthTerms">
                        <a> terms and condition </a>
                      </Link>{" "}
                   
                    </label>
                  </div>
                  
                </div>
              </Form.Row >
              <Form.Row className="justify-content-center mt-5 ">
                <Form.Group className="col-sm-12 text-center">
                  {!isHealthSubmitting && (
                    <Button
                      className="ghuri_btn"
                      onClick={() => {
                        handleSubmit(healthFormInput);
                      }}
                    >
                      Submit
                    </Button>
                  )}
                  {isHealthSubmitting && (
                    <Button className="btn btn-danger">
                      Submitting{" "}
                      <span class="spinner-border spinner-border-sm" role="">
                        {" "}
                      </span>
                    </Button>
                  )}
                </Form.Group>
              </Form.Row>
            </Form>
          </div>

          <div className="col-sm-6">
            <img src={healthform} className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <HealthVerification handleClose={() => handleClose()} />
      </Modal>
    </div>
  );
};

export default HealthForm;
