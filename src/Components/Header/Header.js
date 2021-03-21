import React from "react";
import "./Header.css";
import video from "./ghuri_percel.mp4"

const Header = () => {
  return (
    <>

<video className='video' autoPlay loop muted>
    <source src={video} type='video/mp4' />
    </video>

    <div className=" row d-flex align-items-center justify-content-center">
        <div className="content col-sm-10 center">
          <div className="row d-flex align-items-center">
            <div className="col-sm-6 ghuri-button">
              <a
                href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                target="_blank"
                className="btn  btn-lg mt-4 ghuriapp"
              >
                <span>
                  <i class="fa fa-mobile mobile"></i>
                </span>
                <span className="space_app">Download Ghuri App</span>
                <span>
                  <i class="fa fa-chevron-right"></i>
                </span>
              </a>{" "}
              <br />
              <a
                href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuridrive"
                target="_blank"
                className="btn earnwith btn-lg mt-4"
              >
                <span>
                  <i class="fa fa-money"></i>
                </span>
                <span className="space_fixed">Earn With Ghuri</span>
                <span>
                  <i class="fa fa-chevron-right"></i>
                </span>
              </a>
            </div>

            <div className="col-sm-6 f-size text-center">
              <h1 className="motto">Ghuri Express Limited</h1>
              <h3 className="motto">A Platform for all Needs</h3>
            </div>
          </div>
        </div>
      </div>
  
   
      
 
    </>
  );
};

export default Header;
