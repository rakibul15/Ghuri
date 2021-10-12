import React, { useEffect } from "react";
import "./career.css";
import "../../assets/css/Custom.css";
import { GetCareerInfo } from "./_redux/action/CareerAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const Career = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const careerList = useSelector((state) => state.careerInfo.career);
  useEffect(() => {
    dispatch(GetCareerInfo(1));
  }, []);
  var slug;
  var id;
  const handleCareerInfo = (title, id) => {
    slug = title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      ;

    history.push(`/career/details/${id}/${slug}`, {
      id: id
    });

  };


  return (
    <div className="Nav_overflow mt-4 pt-4">
      <div className="join_hero">
        <div className="container">
          <div className="row ">
            <div className="col-sm-6 join_us_sec">
              <h1>Join Us</h1>
              <p>
                Join us, we offer you an extraordinary chance to learn, to
                develop and to be part of an exciting experience and team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container page-content">
        <h2>Jobs</h2>

        {careerList && careerList.career.length === 0 && (
          <>
            <div class="alert alert-success text-center mt-5 mt-5" role="alert">
              Sorry ! No Job Post Found.
            </div>
          </>
        )}

        {careerList && careerList !== null && careerList.career.length > 0 && (
          <div className="job-list">
            {careerList.career.reverse().map((item, index) => (
              <div
                onClick={() => handleCareerInfo(item.title, item.ID)}
                className="job-list-item"
              >
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center mb-3">
                      <span className={item.department.substring(0,1).toLowerCase()==='i'? 'badge badge-success  mr-2' : 'badge badge-primary  mr-2'}>{item.department[0]}</span>{" "}
                      <strong>{item.department}</strong>
                    </div>
                    <div className="flex">
                      <span class="job-title h6 line-height-1 m-0">
                        {item.title}
                      </span>
                      <span class="badge badge-soft-primary ml-2">Open</span>
                    </div>
                    <div class="job-item-meta d-none d-lg-flex text-muted align-items-center mt-2">
                      <span>Job Type: {item.status}</span>
                      <span class="job-meta-divider mx-3"></span>
                      <span>Vacancy: {item.vacancy}</span>
                      <span class="job-meta-divider mx-3"></span>
                      <span>Deadline: {item.deadline}</span>
                    </div>
                  </div>
                  <div class="align-self-end ">
                    <div class="iconic-avatar iconic-avatar-sm">
                      <span class="fa fa-chevron-right"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
