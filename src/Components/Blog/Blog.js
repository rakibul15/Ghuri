import React, { useState } from "react";
import "./Blog.css";
import blogdata from "./blogContent";
import Pagination from "./Pagination";

const Blog = () => {
  const [postsPerPage] = useState(3);
  const [blog, setBlog] = useState(blogdata);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const [state, setstate] = useState(blogdata[indexOfFirstPost]);

  const currentPosts = blogdata.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ghuri_blog container Nav_overflow">
      <div className="row mt-2 mb-5">
        <div className="col-sm-12 mt-5">
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
            <div className="col-sm-3">
              <small>{state.date}</small>
            </div>
            <div className="col-sm-3 text-right">
              <small>Author :Rakib</small>
            </div>
          </div>
          <div className="row mt-4 mb-4 blog_main">
            <div className="col-sm-12">
              <h1 className="text-center">{state.haedline}</h1>
              <p>{state.description}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 all_blogs">
          {currentPosts.map((currentPosts) => (
            <div className="mb-4 " key={currentPosts.id}>
              <div onClick={() => setstate(currentPosts)}>
                <div className="single_blog_sideNav">
                  <img src={currentPosts.image} alt="" className="img-fluid" />
                  <div className="row justify-content-between pl-2 pr-2 mt-2">
                    <div className="col-sm-6">
                      <small>{currentPosts.date}</small>
                    </div>
                    <div className="col-sm-6 text-right">
                      <small>Author :Rakib</small>
                    </div>
                  </div>
                  <h6>{currentPosts.haedline}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPost={blog.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

export default Blog;
