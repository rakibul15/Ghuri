import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import team from "../../images/others/team_member.png";
import { GetCareerDetails } from "./_redux/action/CareerAction";
import { Markup } from "interweave";
const Job = () => {
  const history = useHistory();
  let {id } = useParams();

  const dispatch = useDispatch();

  var slug;

  const handleJob = (title, id) => {
    slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    history.push(`/career/application/${id}/${slug}`, {
     
    });
  };

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
        <>
          {/* {careerDetails.career.reverse().map((item, index) => ( */}
          <div className="Nav_overflow text_for_all">
            <div className="container-fluid bg_color_ash">
              <div className="container-condensed pt-5 pb-5">
                <h2 className="text-center mb-3">
                  {/* Intern Software Engineer ( Front-end ) */}
                  {careerDetails.title}
                </h2>
                <div className="job-item-meta d-flex text-muted justify-content-center align-items-center mt-2">
                  <span> {careerDetails.status} </span>
                  <span className="job-meta-divider mx-3"></span>
                  <span>No. of Vacancies: {careerDetails.vacancy} </span>
                  <span className="job-meta-divider mx-3"></span>
                  <span>Deadline: {careerDetails.deadline}</span>
                </div>
                {/* <div className="mt-3 text-center">
                  <a className="btn btnApply btn-fw-lg  mt-4" href="#apply-now">
                    Apply Now
                  </a>
                </div> */}
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
                    <p className="mt-3">{careerDetails.context}</p>

                    <h4 className="mt-5 mb-3">Job Responsibilities</h4>
                    <Markup content={careerDetails.responsibilities} />

                    <h4 className="mt-5 mb-3">Requirements</h4>

                    <Markup content={careerDetails.requirements} />

                  

                    <h4 className="mt-5 mb-3">Additional Job Requirement</h4>
                    <Markup content={careerDetails.additional} />

                    <h4 className="mt-5 mb-3">Experience</h4>
                    <Markup content={careerDetails.experience} />

                    <h4 className="mt-5 mb-3">Working Hours</h4>
                    <Markup content={careerDetails.hours} />

                    <h4 className="mt-5 mb-3">Remuneration</h4>
                    <Markup content={careerDetails.salary} />

                    <h4 className="mt-5 mb-3">Other Benefits</h4>
                    <Markup content={careerDetails.benefits} />

                    <div className="mt-5 text-center">
                      <a
                        className="btn btnApply btn-fw-lg  mt-4"
                        href
                        onClick={() =>
                          handleJob(careerDetails.title, careerDetails.ID)
                        }
                      >
                        Apply for this position
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ))} */}
        </>
      )}
    </>
  );
};

export default Job;
