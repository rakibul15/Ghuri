import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Jobform = () => {
  return (
    <div className="Nav_overflow pt-5 pb-4">
      <div className="container ">
        <div className="row d-flex align-items-center ">
          <div className="col-sm-12">
            <div className="row d-flex align-items-center text-center justify-content-center">
              <div className="col-sm-12 JObAForm">
                <h1>Job Application Form</h1>
                <h4>Senior SQA Engineer</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-10">
                <div className="row mb-4 mt-4 JObAForm">
                  <div className="col-sm-3">
                    <h5> Personal Information</h5>
                  </div>
                </div>

                <Form className="JobForm">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Name*
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Email*
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Your Phone Number*
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" placeholder="Phone Number" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      University*
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" placeholder="University" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Cgpa*
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" placeholder="Cgpa" />
                    </Col>
                  </Form.Group>

                  <div className="row mt-5 mb-3 JObAForm">
                    <div className="col-sm-3">
                      <h5>Career quiz</h5>
                    </div>
                  </div>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Total Years of Experience
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Expertise/Interest Areas
                    </Form.Label>
                    <Col sm={9}>
                      <textarea
                        className="form-control"
                        id="sdes"
                        rows="4"
                        name="productShortDescription"
                        //   value={productInput.productShortDescription}
                        //   onChange={(e) =>
                        //     handleChangeInput("productShortDescription", e.target.value)
                        //   }
                      ></textarea>
                    </Col>
                  </Form.Group>

                  {/* <div className="row mt-3">
        <div className="col-sm-2">
          <label htmlFor="sdes">Expertise/Interest Areas</label>
        </div>
        <div className="col-sm-10">
          <div class="form-group">
        
          </div>
        </div>
      </div> */}

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Current Salary
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Expected Salary
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Notice Period
                    </Form.Label>
                    <Col sm={9}>
                      <select
                        class="form-select form-control form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select a notice period</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Resume
                    </Form.Label>
                    <Col sm={9}>
                      {/* <Form.Control type="file" /> */}
                      <input
                        type="file"
                        class="form-control o_website_form_input"
                        name="Resume"
                      ></input>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3 mt-4">
                    <Col sm={{ span: 10, offset: 3 }}>
                      <Button className="btn btn_submit_job" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobform;
