import React from "react";
import "./Home.css";
import platformImage from "../../images/Homepage/platformMobile.png";
import premium from "../../images/Homepage/premium.png";
import pstore from "../../images/Homepage/pStore.png";
import cod from "../../images/Homepage/cod.png";
import cod2 from "../../images/Homepage/cod2.png";
import aboutGhuri from "../../images/Homepage/aboutGhuri.png";
import mobile from "../../images/Homepage/Mobile.png";
const Home = () => {
  return (
    <div>
      <div className="Nav_overflow">
        <section className="homepageLanding">
          <div className="container">
            <div className="col-sm-5 mt-127">
              <h1>A Platform For Every Need</h1>
              <p>
                Save your time Ease your Life With One - Stop - Solution Ghuri
              </p>

              <button className="btn btnGhuri-primary">
                Create Partnership <i class="fa fa-caret-right ml-17"></i>
              </button>
              <button className="btn btnGhuri-download">
                Download App <i class="fa fa-caret-right ml-17"></i>
              </button>
            </div>
          </div>
        </section>

        <section className="ghuri_platform">
          <div className="container">
            <div className="platFormText">
              <h1>Ghuri Platform</h1>
              <p>A Platform For Every Need</p>
            </div>
          </div>
          <div className="container">
            <div className="row platForm_content d-flex align-items-center">
              <div className="col-sm-6">
                <div className="platformMobile">
                  <img src={platformImage} alt="" />
                </div>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-5">
                <div className="platformBazar">
                  <h2>
                    {" "}
                    <img src={premium} alt="" /> Ghuri Bazar
                  </h2>

                  <div className="d-flex mar-70">
                    <div className="iconImage">
                      <img src={pstore} alt="" />
                    </div>
                    <div className="platformDetails">
                      <h4>Premium Store</h4>
                      pLorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="d-flex mt-40">
                    <div className="iconImage">
                      <img src={cod} alt="" />
                    </div>
                    <div className="platformDetails">
                      <h4>Ghuri Express</h4>
                      pLorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="d-flex mt-40">
                    <div className="iconImage">
                      <img src={cod2} alt="" />
                    </div>
                    <div className="platformDetails">
                      <h4>Cash On DElivery</h4>
                      pLorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>

                  <button className="btn btnGhuri-primary mar-70">
                    See More <i class="fa fa-caret-right ml-17"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutGhuri">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="aboutGhuriTxt">
                  <h1>About Ghuri</h1>
                  <p>
                    GHURI is the fastest growing tech-based startup company in
                    Bangladesh. GHURI Super App service as a single portal is
                    connecting every general people to local businesses,
                    providing a wide range of products and services. As a
                    technology-based company, we want to develop tech-driven
                    solutions for the everyday challenges of Bangladeshi people.
                  </p>
                  <p>
                    In this age of technology and advancement, every aspect of
                    life has been getting improvements. To further improve the
                    daily life standard, Ghuri express Ltd. started its service
                    to join in this advanced life as daily life-oriented service
                    provider. It launched its android app with 6 special
                    features, three more will be coming soon.
                  </p>
                  <button className="btn btnGhuri-primary mar-60">
                    Learn More <i class="fa fa-caret-right ml-17"></i>
                  </button>
                </div>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-6">
                <div className="aboutGhuriImg">
                  <img src={aboutGhuri} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="download">
<div className="container">
<div className="row">
    <div className="col-sm-7">
      <div className="ghuriMobile">
        <img src={mobile} alt="" />
      </div>
    </div>
    <div className="col-sm-1"></div>
    <div className="col-sm-4 downloadTxt">
      <h2>Download the app</h2>
    </div>
  </div>
</div>
</section>


      </div>
    </div>
  );
};

export default Home;
