import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';

const HealthForm = () => {
  const history = useHistory();
  const {id}  = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

//   const packageValue = useSelector((state) => state.healthInfo.packageValue);

let price = 0
let duration = 0
if(id === ":1"){
   price = 300
   duration= 3
}
else if(id === ":2"){
   price = 500
   duration= 6
}
else{
    price = 1000
   duration= 12
}
  return (
    <div className="container confirm_package_details pt-5 pb-5">
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

export default HealthForm;
