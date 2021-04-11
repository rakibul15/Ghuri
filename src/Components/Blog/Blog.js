import React, { useState } from "react";
import "./Blog.css";
import image from "../../images/Health/bronze.jpg";
import blogdata from "./blogContent";
import Singleblog from "./Singleblog";
import { Col } from "react-bootstrap";

const Blog = () => {
  const [state, setstate] = useState(blogdata[0]);
  console.log(state.haedline);

  return (
    <div className="ghuri_blog container">
      <div className="row mt-2 mb-5">
        <div className="col-sm-12">
          <h1 className="text-center">Ghuri Blogs</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-12 show_image">
              <img src={state.image} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row justify-content-between mt-2">
            <div className="col-sm-3"><small>{state.date}</small></div>
            <div className="col-sm-3 text-right"><small>Author :Rakib</small></div>
          </div>
          <div className="row mt-4 mb-4 blog_main">
            <div className="col-sm-12">
              <h1 className="text-center">{state.haedline}</h1>
              <p>{state.description}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 all_blogs">
          {blogdata.map((blog) => (
            <div className="mb-4 " key={blog.id}>
              <div onClick={() => setstate(blog)}>
                  <div className="single_blog_sideNav">
                  <img src={blog.image} alt="" className="img-fluid" />
                  <div className="row justify-content-between pl-2 pr-2 mt-2">
            <div className="col-sm-6"><small>{state.date}</small></div>
            <div className="col-sm-6 text-right"><small>Author :Rakib</small></div>
          </div>
                    <h6 >{blog.haedline}</h6>
                  </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
