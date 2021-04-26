import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import {
  InputHealthForm,
  SubmitHealthForm,
} from "../_redux/action/HealthAction";
import Modal from "react-bootstrap/Modal";
import HealthVerification from "./HealthVerification";

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
    <>
      <div className="container confirm_package_details pt-5 pb-5 Nav_overflow">
        <h5 className="text-center">Package Price :{price} TK</h5>
        <h5 className="text-center mb-4">Validity : {duration} Months</h5>
        <h4 className="text-center mb-4">Applicant Info</h4>

        <Form className="form_applicant">
          <Form.Row className="justify-content-center">
            <Form.Group className="col-sm-6">
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
          </Form.Row>

          <Form.Row className="justify-content-center">
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
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group className="col-sm-6">
              <label htmlFor="pnum">Applicant Phone Number</label>
              <Form.Control
                type="text"
                name="applicantPhone"
                placeholder="Applicant Number"
                value={healthFormInput.applicantPhone}
                onChange={(e) =>
                  handleChangeTextInput("applicantPhone", e.target.value)
                }
              />
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group className="col-sm-6">
              <label htmlFor="pass">Address</label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Address"
                value={healthFormInput.address}
                onChange={(e) =>
                  handleChangeTextInput("address", e.target.value)
                }
              />
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group className="col-sm-6">
              <label htmlFor="email">Email</label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={healthFormInput.email}
                onChange={(e) => handleChangeTextInput("email", e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
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
                <option>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group className="col-sm-6">
              <label htmlFor="nominee">Nominee Name</label>
              <Form.Control
                name="nominee"
                placeholder="Nominee Name"
                value={healthFormInput.nominee}
                onChange={(e) =>
                  handleChangeTextInput("nominee", e.target.value)
                }
              />
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group className="col-sm-6">
              <label htmlFor="nominee_rel">Relationship with Nominee</label>
              <Form.Control
                name="nomineeRelation"
                placeholder="Relationship with Nominee"
                value={healthFormInput.nomineeRelation}
                onChange={(e) =>
                  handleChangeTextInput("nomineeRelation", e.target.value)
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center mt-3">
            <Form.Group className="col-sm-6">
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

      <Modal show={show} onHide={handleClose}>
        <HealthVerification handleClose={() => handleClose()} />
      </Modal>
    </>
  );
};

export default HealthForm;
