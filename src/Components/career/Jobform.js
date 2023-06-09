import React, { useEffect } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  GetCandidateInput,
  GetCareerDetails,
  SubmitCandidateInput,
} from "./_redux/action/CareerAction";

const Jobform = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const careerDetails = useSelector((state) => state.careerInfo.careerDetails);
  const isPageLoad = useSelector((state) => state.careerInfo.isPageLoad);
  const isLoading = useSelector((state) => state.careerInfo.isLoading);

  const handleChangeInput = (name, value) => {
    dispatch(GetCandidateInput(name, value));
    // console.log(name, value);
  };
  useEffect(() => {
    dispatch(GetCareerDetails(id));
  }, []);

  const candidateInput = useSelector(
    (state) => state.careerInfo.candidateInput
  );
  console.log(` job form id`,id)
  const handleSubmit = (data) => {
    dispatch(SubmitCandidateInput(data,id));
    // dispatch(GetCareerDetails(id));
  };

  return (
    <>
      {isPageLoad && (
        <>
          <div className="Nav_overflow">
            <div className="container mt-5 pt-5 mb-5 pb-5">
              <div className="d-flex justify-content-center  mt-5">
                <div className="spinner-border mt-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!isPageLoad && careerDetails !== null && (
        <div className="Nav_overflow jobs_aplication pt-5 pb-4">
          <div className="container ">
            <div className="row d-flex align-items-center ">
              <div className="col-sm-12">
                <div className="row d-flex align-items-center text-center justify-content-center">
                  <div className="col-sm-12 JObAForm">
                  

                    <h4>{careerDetails.title}</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-10">
                    <div className="row mb-4 mt-4 JObAForm">
                      <div className="col-sm-3">
                        <h5> Personal Information</h5>
                      </div>
                    </div>

                    <div className="JobForm">
                      <div className="row mt-3 d-flex align-items-center">
                        <div className="col-sm-3 text-right">
                          <label>
                            Name*<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            autoComplete="off"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={GetCandidateInput.title}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            Email*<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            autoComplete="off"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={GetCandidateInput.email}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            Phone*<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            autoComplete="off"
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={GetCandidateInput.phone}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            University*<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            autoComplete="off"
                            type="text"
                            name="versity"
                            placeholder="University"
                            value={GetCandidateInput.versity}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            CGPA*<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            autoComplete="off"
                            type="number"
                            name="cgpa"
                            placeholder="CGPA"
                            value={GetCandidateInput.cgpa}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            Gender*<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <div>
                            <select
                              className="form-control"
                              name="gender"
                              value={GetCandidateInput.gender}
                              onChange={(e) =>
                                handleChangeInput(e.target.name, e.target.value)
                              }
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row  d-flex JObAForm">
                        <div className="col-sm-3">
                          <h5>Career quiz</h5>
                        </div>
                      </div>

                      <div className="row mt-3  d-flex align-items-center">
                        <div className="col-sm-3 text-right">
                          <label>
                            Resume*
                            <span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            type="file"
                            name="cv2"
                            accept=".pdf"
                            placeholder="cv"
                            value={GetCandidateInput.cv}
                            onChange={(e) =>
                              handleChangeInput("cv2", e.target.files[0])
                            }
                          />
                        </div>
                      </div>

                      <div className="row mt-3  d-flex align-items-center">
                        <div className="col-sm-3 text-right">
                          <label>
                            Experience<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            type="text"
                            name="experience"
                            placeholder="Experience"
                            value={GetCandidateInput.experience}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            Expertise/Interest Areas
                            <span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            type="text"
                            name="interest"
                            placeholder="Interest"
                            value={GetCandidateInput.interest}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            Current Salary<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            type="number"
                            name="current"
                            placeholder="Current salary"
                            value={GetCandidateInput.current}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            Expected Salary<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <FormControl
                            className="edit_form_control"
                            type="number"
                            name="expected"
                            placeholder="Expected salary"
                            value={GetCandidateInput.current}
                            onChange={(e) =>
                              handleChangeInput(e.target.name, e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row  d-flex align-items-center mt-3">
                        <div className="col-sm-3 text-right">
                          <label>
                            Notice Period<span className="text-danger"></span>
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <div>
                            <select
                              className="form-control"
                              name="notice"
                              // value={careerInput.expected}
                              onChange={(e) =>
                                handleChangeInput(e.target.name, e.target.value)
                              }
                            >
                              <option value="">Select a notice period</option>
                              <option value="7days">7 days</option>
                              <option value="15days">15 days</option>
                              <option value="1 month">1 Month</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row  d-flex align-items-center">
                        <div className="col-sm-12 text-right mt-5 ">
                          {!isLoading && (
                            <Button
                              onClick={() => handleSubmit(candidateInput)}
                              className="btn btn_submit_job point p-2"
                              type="submit"
                            >
                              Submit
                            </Button>
                          )}

                          {isLoading && (
                            <Button
                              disabled
                              onClick={() => handleSubmit(candidateInput)}
                              className="btn btn_submit_job poin p-2"
                              type="submit"
                            >
                              Submitting.....
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Jobform;
