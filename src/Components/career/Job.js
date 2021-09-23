import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import team from "../../images/others/joomshaper-collage.jpg";
import { GetCareerDetails } from "./_redux/action/CareerAction";

const Job = () => {
  const history = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();

  const careerDetails = useSelector((state) => state.careerInfo.careerDetails);
  const isPageLoad = useSelector((state) => state.careerInfo.isPageLoad);

  useEffect(() => {
    dispatch(GetCareerDetails(id));
  }, []);


  return (
    <>
      {isPageLoad && (
        <>
          <div className="Nav_overflow">
            <div className="container mt-5 pt-5">
              <div class="d-flex justify-content-center  mt-5">
                <div class="spinner-border mt-5" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!isPageLoad && careerDetails && careerDetails !== null && (
        <>
          <div className="Nav_overflow">
            <div className="container-fluid bg_color_ash">
              <div className="container-condensed pt-5 pb-5">
                <h2 className="text-center mb-3">
                  Intern Software Engineer ( Front-end )
                </h2>
                <div className="job-item-meta d-flex text-muted justify-content-center align-items-center mt-2">
                  <span>Job Type: Trainee </span>
                  <span class="job-meta-divider mx-3"></span>
                  <span>No. of Vacancies: 4</span>
                  <span className="job-meta-divider mx-3"></span>
                  <span>Deadline: September 15, 2021</span>
                </div>
                <div className="mt-3 text-center">
                  <a className="btn btnApply btn-fw-lg  mt-4" href="#apply-now">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="container-fluid pt-5 pb-5">
              <div className="container-considered">
                <div className="row justify-content-center">
                  <div>
                    <img className="img-fluid" src={team} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid pt-5 pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm-11 jobs_ul">
                    <h4 className="mt-4"> What We Are Looking For?</h4>
                    <p className="mt-3">
                      We are looking for a few software engineers (interns) to
                      join the engineering team. Interested candidates are
                      invited to submit CVs after reading the following job
                      description.
                    </p>

                    <h4 className="mt-5">Requirements</h4>
                    <ul>
                      <li>
                        Strong proficiency in JavaScript, including DOM
                        manipulation and the JavaScript object model.
                      </li>
                      <li>
                        Thorough understanding of React.js and its core
                        principles.
                      </li>
                      <li>
                        Experience with popular React.js workflows (such as
                        Redux).
                      </li>
                      <li>A knack for benchmarking and optimization.</li>
                      <li>
                        Familiarity with newer specifications of EcmaScript.
                      </li>
                      <li>
                        Familiarity with code versioning tools (such as Git).
                      </li>
                      <li>
                        Experience with common front-end development tools such
                        as Babel, Webpack, NPM, etc. is a plus.
                      </li>
                    </ul>

                    <h4 className="mt-5">Additional Job Requirement</h4>
                    <p className="mt-2">Energetic, confident, and proactive.</p>

                    <h4 className="mt-5">Working Hours</h4>
                    <ul>
                      <li>Sunday – Thrusday</li>
                      <li>9 AM to 6 PM </li>
                      <li>Friday and Saturday are weekly holidays</li>
                    </ul>

                    <h4 className="mt-5">Salary/Remuneration</h4>
                    <ul>
                      <li>15,000 BDT/Month</li>
                      <li>
                        Starting salary will be 25,000 BDT/Month after the
                        successful completion of the internship period.
                      </li>
                    </ul>

                    <h4 className="mt-5">Other Benefits</h4>
                    <ul>
                      <li>Free Lunch & Snacks</li>
                      <li>Excellent Culture and Working Environment.</li>
                    </ul>

                    <div className="mt-5 text-center">
                      <a
                        className="btn btnApply btn-fw-lg  mt-4"
                        href="#apply-now"
                      >
                        Apply for this position
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Job;
