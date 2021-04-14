import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form } from "react-bootstrap";

import "../../css/main.css";
import { useHistory } from "react-router";

const Healthform = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const packageValue = useSelector((state) => state.healthInfo.packageValue);
  console.log(`packageValue`, packageValue);

  // const [price, setPrice] = useState('');
  // const [duration, setDuration] = useState('');

  // if (typeof packageValue !== undefined) {
  //   history.push("/healthform");
  //  }
  //  else  {
  //   history.push("/health");
  //  }
localStorage.setItem('price',packageValue.price);
localStorage.setItem('duration',packageValue.duration);

  
const price= localStorage.getItem('price');
const duration= localStorage.getItem('duration');



  return (
    <div className="container confirm_package_details pt-5 pb-5">
      <h5 className="text-center">Package Price : {packageValue.price} TK</h5>
      <h5 className="text-center mb-4">Validity : {packageValue.duration} Months</h5>
      <h4 className="text-center mb-4">Applicant Info</h4>

      <Form className="form_applicant">
        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="name">Name</label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Applicant Name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="dob">Date of Birth</label>
            <Form.Control type="date" name="dob" placeholder="date" />
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="pnum">Applicant Number</label>
            <Form.Control
              type="number"
              name="pnum"
              placeholder="Applicant Number"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="pass">Password</label>
            <Form.Control type="password" name="pass" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="email">Email</label>
            <Form.Control type="email" name="pass" placeholder="Email" />
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="gender">Gender</label>
            <Form.Control className="form_control_select" as="select" defaultValue="Choose...">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="nominee">Nominee Name</label>
            <Form.Control name="nominee" placeholder="Nominee Name" />
          </Form.Group>
        </Form.Row>
        
        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="nominee_rel">Relationship with Nominee</label>
            <Form.Control name="nominee_rel" placeholder="Relationship with Nominee" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-center mt-3">
          <Form.Group className="col-sm-6">
            <Button className="ghuri_btn" variant="primary" type="submit" disabled>
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Healthform;
