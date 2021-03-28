import React from "react";
import "./Singlenews.css";

const Singlenews = (props) => {
  // console.log(props.snews.image);
  return (
    <>
      {/* <div className="p-4 item appear_small">
        <div className="row  headline_box">
          <img src={props.snews.image} className="img-fluid" alt="" />
          <br/>
          <p className="mt-4">
            <b>{props.snews.haedline}</b>
          </p>
          <h5 className="mt-2">{props.snews.description}</h5>
          <a href={props.snews.link}>
            View Article
            <i class="fa fa-arrow-right headline_arrow"></i>
          </a>
        </div>
      </div> */}
       
      <div className="row justify-content-center d-flex align-items-center">
        <div className="col-sm-4 col-6">
          <div className="">
           
            <div className="headline_img center headline_content ">
              <img src={props.snews.image} className="img-fluid mt-5" alt="" />
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-6 ">
          <div className="headline_content">
            <div className="headline_text haedline_atag">
              <p className=""><b>{props.snews.haedline}</b></p>
              <h5 className="">
                {
                    props.snews.description
                }
              </h5>
              <a target="_blank" href={props.snews.link}>
                View Article  <i className="ml-4"  class="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="single_grid">
        <div className="gird_news headline_content headline_img">
          <img src={props.snews.image} className="img-fluid mt-5" alt="" />
        </div>
        <div className="grid_news headline_content headline_text  haedline_atag">
          <h5 className="">{props.snews.description}</h5>
          <a target="_blank" href={props.snews.link}>
            View Article <i className="ml-4" class="fa fa-chevron-right"></i>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default Singlenews;
