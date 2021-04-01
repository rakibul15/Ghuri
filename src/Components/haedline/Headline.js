import React, { useState } from "react";
import "./headline.css";


//Media Query Css for Responsive
import "../../css/mediaQuery.css";


import newsdata from "../news/news";

//Owl Carousel
import OwlCarousel from "react-owl-carousel";

//Images
import headline from "../../images/others/headline.png";
import Singlenews from "../singlenews/Singlenews";

export default function Headline() {
  const [news, setNews] = useState(newsdata);
  // console.log(newsdata);

  return (
    <div className="headline">
      <h1 className="text-center mt-3 mb-5">GHURI HEADLINES</h1>
      <OwlCarousel loop margin={10} items={1} autoplay={true} dots={false} lazyLoad={true}>
        {news.map((snews) => (
          <Singlenews
            // handleEnroll={handleEnroll}
            snews={snews}
          ></Singlenews>
        ))}

        {/* <div className="p-4 item ">
          <div className="row  d-flex align-items-center headline_box">
            <div className="col-sm-4 col-4 ">
                <div className=" ">
                  <img src={headline} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-sm-8 col-8">
             
                <div className="headline_text">
                  <p className="">
                    <b>GHURI launches new app</b>
                  </p>
                  <h5 className="mt-2">
                    This multipurpose super app is also working towards a goal
                    of employment 2100+ people by the end of 2021.
                  </h5>
                  <a href="">
                    View Article{" "}
                    <i class="fa fa-arrow-right headline_arrow"></i>
                  </a>
                </div>
             
            </div>
          </div>
        </div> */}
      </OwlCarousel>
    </div>
  );
}
