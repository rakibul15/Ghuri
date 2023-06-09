import React, { useEffect } from "react";
import "./Header.css";
import "../../css/mediaQuery.css"


const Header = () => {

    useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>

<video className='video' autoPlay loop muted>
    <source src="https://i.imgur.com/34rVUuP.mp4" type='video/mp4' />
    </video>

    <div className=" row d-flex align-items-center justify-content-center remove_small">
        <div className="content col-sm-10 center">
          <div className="row d-flex align-items-center">
            <div className="col-sm-6 ghuri-button">
              <a
                href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                target="_blank"
                className="btn  btn-lg mt-4 ghuriapp"
                rel="noreferrer"
              >
                <span>
                  <i className="fa fa-mobile mobile"></i>
                </span>
                <span className="space_app">Download Ghuri App</span>
                <span>
                  <i className="fa fa-chevron-right"></i>
                </span>
              </a>{" "}
              <br />
              <a
                href="https://play.google.com/store/apps/details?id=ghuri.express.parcelfighter"
                target="_blank"
                className="btn earnwith btn-lg mt-4"
                rel="noreferrer"
              >
                <span>
                  <i className="fa fa-money"></i>
                </span>
                <span className="space_fixed">Earn With Ghuri</span>
                <span>
                  <i className="fa fa-chevron-right"></i>
                </span>
              </a>
            </div>

            <div className="col-sm-6 f-size text-center">
              <h1 className="motto">Ghuri Express Limited</h1>
              <h3 className="motto">A Platform for Every Needs</h3>
            </div>
          </div>
        </div>
      </div>




      <div className=" row  align-items-center justify-content-center appear_small d-none">
        <div className="content col-sm-10 center">
          <div className="row d-flex align-items-center">

          <div className="col-sm-6 f-size text-center">
              <h1 className="motto">Ghuri Express Limited</h1>
              <h3 className="motto">A Platform for Every Needs</h3>
            </div>


            <div className="col-sm-6 ghuri-button">
              <a
                href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                target="_blank"
                className="btn  btn-lg mt-4 ghuriapp"
                rel="noreferrer"
              >
                <span>
                  <i className="fa fa-mobile mobile"></i>
                </span>
                <span className="space_app">Download Ghuri App</span>
                <span>
                  <i className="fa fa-chevron-right"></i>
                </span>
              </a>
              <br />
              <a
                href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuridrive"
                target="_blank"
                className="btn earnwith btn-lg mt-4"
                rel="noreferrer"
              >
                <span>
                  <i className="fa fa-money"></i>
                </span>
                <span className="space_fixed">Earn With Ghuri</span>
                <span>
                  <i className="fa fa-chevron-right"></i>
                </span>
              </a>
            </div>

           
          </div>
        </div>
      </div>
  
   
      
 
    </>
  );
};

export default Header;
