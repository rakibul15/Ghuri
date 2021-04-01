import React from "react";
import "./Singlenews.css";

const Singlenews = (props) => {
  const description = props.snews.description;
  const headline= props.snews.haedline;
  
  const des = (description) => description.length > 5 ? `${description.substring(0, 5)}...` : description;
  // console.log(props.snews.image);
  console.log(description.length);
  return (
    <>

      <div className=" grid_warp">
       <div className="single_grid">
       <div className="gird_news headline_content headline_img">
          <img src={props.snews.image} className="img-fluid mt-5" alt="" />
        </div>
        <div className="grid_news headline_content   haedline_atag">
        <p className=""><b>{props.snews.haedline}</b></p>
          <h5 className="">{

         (description.length> 100) ? `${description.substring(0, 100)}...` : description
          }</h5>
          <a target="_blank" href={props.snews.link}>
            View Article <i className="ml-4" class="fa fa-chevron-right"></i>
          </a>
        </div>
       </div>
      </div>
    </>
  );
};

export default Singlenews;
