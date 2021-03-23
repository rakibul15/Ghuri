import React from "react";
import "./headline.css";
import headline from "../../images/others/headline.png";
export default function Headline() {
  return (
    <div className="headline">
      <h1 className="text-center mt-3 mb-5">GHURI HEADLINES</h1>
      <div className="row justify-content-center d-flex align-items-center">
        <div className="col-sm-4 col-4">
          <div className="headline_content">
            {/* Lorem, ipsum dolor. */}
            <div className="headline_img ">
              <img src={headline} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-8">
          <div className="headline_content">
            <div className="headline_text mt-3">
              <p className="mt-4"><b>GHURI launches new app</b></p>
              <h5 className="mt-2">
                This multipurpose super app is also working towards a goal of
                employment 2100+ people by the end of 2021.
              </h5>
              {/* <a href="">
                View Article <i class="fa fa-arrow-right headline_arrow"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
