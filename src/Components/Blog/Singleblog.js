import React from "react";
import { Link } from "react-router-dom";

const Singleblog = (props) => {
  const blog = { props };
  const title = props.sblog.haedline;
  // const des = (title) => title.length > 5 ? `${title.substring(5, )}...` : title;

  const id = props.sblog.id;
  const image = props.sblog.image;

  return (
    <div className="row d-flex align-items-center blog">
      <div className="col-sm-8">
        <h2></h2>
      </div>
      <div className="col-sm-4 single_blog">
        <Link to={`/blog/${id}`}>
          <img src={image} alt="image" />
          <h6>{title}</h6>
        </Link>
      </div>
    </div>
  );
};

export default Singleblog;
