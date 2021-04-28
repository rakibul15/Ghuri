import React, { forwardRef, useEffect, useState } from "react";
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
import DatePicker from "react-datepicker";

const HealthForm = () => {
  //Date
  const [date, setDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="form_applicant" onClick={onClick} ref={ref}>
      {value}
    </div>
  ));
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
      <div className="container confirm_package_details pt-4 pb-5 Nav_overflow">
        {/* <div className="row">
          <div className="col-sm-6">
            <h4 className="text-center mb-4">Applicant Info</h4>
          </div>
        </div> */}

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
                      <InputGroup.Text>+88</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="number"
                      name="applicantPhone"
                      placeholder="01xxxxxxxx"
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

                  <div className="form_applicant date_applicant">
                    <DatePicker
                      className="form-control date_pick"
                      name="dateOfBirth"
                      selected={healthFormInput.dateOfBirth}
                      onChange={(e) =>
                        handleChangeTextInput("dateOfBirth", e)
                      }
                      value={healthFormInput.dateOfBirth}
                      customInput={<ExampleCustomInput />}
                      showYearDropdown
                      showMonthDropdown
                    />
                  </div>
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
                
                  <Form.Control
                    className="form_control_select"
                    as="select"
                    defaultValue="Choose..."
                    name="nomineeRelation"
                    placeholder="Relationship with Nominee"
                    value={healthFormInput.nomineeRelation}
                    onChange={(e) =>
                      handleChangeTextInput("nomineeRelation", e.target.value)
                    }
                  >
                    <option>Please Select</option>
                    <option value="Parents">Parents</option>
                    <option value="Spouse">Spouse</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row className="health_form_row">
                <div className="col-sm-12 package_confirm_details">
                  <p>
                    This Package contains <span> {duration} MONTHS</span> of
                    validity at cost of <span>{price} BDT</span>only
                  </p>
                </div>
              </Form.Row>

              <Form.Row>
                <div className="col-sm-12  checkbox">
                 
                  <div class="squaredThree mt-1">
                    <input
                      type="checkbox"
                      name="optionsRadios"
                      id="checkOther"
                      value="other"
                      checked
                    />
                    <label for="checkOther"></label>
                  </div>
                  <label class="label-text ml-4">
                    {" "}
                    I agree with all the
                    <a href="/HealthTerms" target="_blank">
                      {" "}
                      terms and condition{" "}
                    </a>
                  </label>
                </div>
              </Form.Row>
              <Form.Row className="mt-3">
                <Form.Group className="col-sm-12 text-right">
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

          <div className="col-sm-6 health_form_image">
            <img
              src={healthform}
              className="img-fluid health_form_image"
              alt=""
            />
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
