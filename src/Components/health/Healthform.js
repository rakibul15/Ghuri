import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import "../../css/main.css"


const Healthform = () => {
  return (
    <div className="container pt-5 pb-5">
        
        <h4 className="text-center mb-4">Applicant Info</h4>

      <Form className="form_applicant">
    
       
        <Form.Row className="justify-content-center">
             <Form.Group  className="col-sm-6" >
                <label htmlFor="name">Name</label>
              <Form.Control type="text" name="name"  placeholder="Applicant Name"/>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group className="col-sm-6">
            <label htmlFor="dob">Date of Birth</label>
              <Form.Control type="date" name="dob" placeholder="date"/>
            </Form.Group>
          </Form.Row>
 
          <Form.Row className="justify-content-center">
           <Form.Group className="col-sm-6">
           <label htmlFor="pnum">Applicant Number</label>
             <Form.Control type="number" name="pnum"  placeholder="Applicant Number"/>
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
            <Form.Control as="select" defaultValue="Choose...">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
            </Form.Group>
          </Form.Row>
          

        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
            <label htmlFor="nominee"></label>
            <Form.Control name="nominee" placeholder="Nominee Info"/>
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Form.Group className="col-sm-6">
          <Button variant="primary" type="submit">
          Submit
        </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Healthform;
