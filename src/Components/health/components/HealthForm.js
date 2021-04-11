import React, { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { Button, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';
import { InputHealthForm, SubmitHealthForm } from "../_redux/action/HealthAction";
import Modal from 'react-bootstrap/Modal'
import HealthVerification from "./HealthVerification";

const HealthForm = () => {
    const healthFormInput = useSelector((state) => state.healthInfo.healthFormInput);
    const dispatch = useDispatch()
    const history = useHistory();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
  const {id}  = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
const handleChangeTextInput=(name,value)=>{
dispatch(InputHealthForm(name,value))
}
const handleSubmit=(data)=>{
    dispatch(SubmitHealthForm(data))
}
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
      <>
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
              value={healthFormInput.name}
              onChange={(e)=>handleChangeTextInput("name",e.target.value)}
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
            onChange={(e)=>handleChangeTextInput("dateOfBirth",e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="pnum">Applicant Phone Number</label>
            <Form.Control
              type="number"
              name="applicantPhone"
              placeholder="Applicant Number"
              value={healthFormInput.applicantPhone}
              onChange={(e)=>handleChangeTextInput("applicantPhone",e.target.value)}
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
            onChange={(e)=>handleChangeTextInput("address",e.target.value)}
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
            onChange={(e)=>handleChangeTextInput("email",e.target.value)}
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
            onChange={(e)=>handleChangeTextInput("gender",e.target.value)}
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
            onChange={(e)=>handleChangeTextInput("nominee",e.target.value)}
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
            onChange={(e)=>handleChangeTextInput("nomineeRelation",e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-center mt-3">
          <Form.Group className="col-sm-6">
            <Button 
            className="ghuri_btn" 
            variant="primary" 
            onClick={()=>{
                handleShow();
                // handleSubmit(healthFormInput);
            }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>

    <Modal show={show} onHide={handleClose}>
       <HealthVerification handleClose={()=>handleClose()}/>
      </Modal>
    </>
  );
};

export default HealthForm;
