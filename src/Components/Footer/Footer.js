import React from "react";
import "./Footer.css";
import "../../css/mediaQuery.css";
import playstore from "../../images/footer/playstore.png";
import appstore from "../../images/footer/appstore.png";
import facebook from "../../images/footer/facebook.png";
import twitter from "../../images/footer/twitter.png";
import instagram from "../../images/footer/instagram.png";
import youtube from "../../images/footer/youtube.png";
import linkedin from "../../images/footer/linkedin.png";
import ssl from "../../images/footer/SSLCOMMERZ.png";
import iso from "../../images/footer/IOS & CSA.png";

const Footer = () => {
  const handleParcel = () => {
    window.scrollTo(0, 900);
  };
  const handleRedirect = () => {
    // window.open("https://ocean.ghuriexpress.com/#/login", "_blank");
    window.open(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`, "_blank");
  };

  return (
    // <div className="footer_div">
    //   <div className="row footer">
    //     <div className="col-sm-8 margin-dotted">
    //       <div className="row">
    //         <div className="col-sm-3 col-6">
    //           <p>Platform</p>

    //           <small>
    //             <Link to="/ride">
    //               <a>GHURI Ride</a>
    //             </Link>
    //           </small>

    //           <br />

    //           <small>
    //             <Link to="/food">
    //               <a>GHURI Food</a>
    //             </Link>
    //           </small>

    //           <br />
    //           <small>
    //             <Link to="/parcel" onClick={() => handleParcel()}>
    //               <a>GHURI Percel</a>
    //             </Link>
    //           </small>
    //           <br />
    //           <small>
    //             <span>
    //               <Link to="/ticket">
    //                 <a>GHURI Ticket</a>
    //               </Link>
    //             </span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>
    //               <Link to="/truck">
    //                 <a>GHURI Truck</a>
    //               </Link>
    //             </span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>
    //               <Link to="/bazar">
    //                 <a>GHURI Bazar</a>
    //               </Link>
    //             </span>
    //           </small>
    //         </div>
    //         <div className="col-sm-3 col-6">
    //           <p>Earn With Ghuri</p>
    //           <small>
    //             <span>Earn With Bike</span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>Earn With Car</span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>Earn With Cycle</span>
    //           </small>
    //         </div>
    //         <div className="col-sm-3 col-6">
    //           <p className="marchant_small">Merchant</p>
    //           <small>
    //             <span>
    //               <Link to="/merchant">Parcel Merchant Sign Up</Link>
    //             </span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>
    //               <Link>
    //                 <a onClick={() => handleRedirect()}>
    //                   Parcel Merchant Log In
    //                 </a>
    //               </Link>
    //             </span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>Restaurant Merchant Sign Up </span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>Restaurant Merchant Sign Up </span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>Restaurant Merchant Log In </span>
    //           </small>
    //         </div>
    //         <div className="col-sm-3 col-6">
    //           <p className="marchant_small">Help</p>
    //           <small>
    //             <span>Work in Support Center</span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>User Help Center</span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>Rider Help Center </span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>Merchant Help Center </span>
    //           </small>
    //           <br />
    //           <small>
    //             <span>Helpline </span>
    //           </small>
    //         </div>
    //       </div>
    //       <div className="row  mt-5">
    //         <div className="col-sm-9 col-12  ssl">
    //           <p>Payment Partner</p>
    //           <img src={ssl} alt="" className="img-fluid" />
    //         </div>
    //         <div className="col-sm-3 col-6 mt-1 csv ">
    //           <p>Member Of</p>
    //           <img src={csv} alt="" className="img-fluid" />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-sm-4">
    //       <div className="row ">
    //         <div className="col-lg-6 our_app mb-4">
    //           <div className="row mt-3 align-items-center">
    //             <div className="col-sm-12 col-6 footer_store_img">
    //               <a
    //                 href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <img src={playstore} className="img-fluid" alt="" />
    //               </a>
    //             </div>

    //             <div className="col-sm-12 col-6 app_store_img footer_store_img">
    //               <img
    //                 src={appstore}
    //                 className="img-fluid   text-right"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-6">
    //           <p>News Letter</p>
    //           <div className="input-group input-margin-top">
    //             <input
    //               className="form-control email"
    //               type="email"
    //               name=""
    //               id=""
    //               placeholder="Email"
    //             />
    //             <div className="input-group-append">
    //               <button className="btn newsletter-btn " type="button ">
    //                 <i class="fa fa-caret-right" aria-hidden="true"></i>
    //               </button>
    //             </div>
    //             <small className="mt-2">
    //               Subscribe with email address for our monthly newletter
    //             </small>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-sm-1"></div>
    //         <div className="col-sm-11 footer-address">
    //           <small>
    //             <p> GHURI Express LTD</p>
    //           </small>
    //           <p className="mt-2 address">
    //             <small>Corporate Headquarter</small>
    //           </p>
    //           <p>
    //             <small>House No : 101, Northern Road, Baridhara DOHS,</small>
    //           </p>
    //           <p>
    //             <small>Dhaka-1206, Bangladesh.</small>
    //           </p>
    //           <p>
    //             <small>Phone No : +880 28411018, +880 1309038120</small>
    //           </p>
    //           <p>
    //             <small>Email : support@ghuriexpress.com</small>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row footer-brand brand-color-bg align-items-center remove_small">
    //     <div className="col-sm-3">
    //       <div className="row">
    //         <div className="col-sm-3 col-3">
    //           <small>
    //             <Link to="/privacy">Privacy</Link>
    //           </small>
    //         </div>
    //         <div className="col-sm-3 col-3">
    //           <small>
    //             <Link to="/terms">Terms</Link>
    //           </small>
    //         </div>
    //         <div className="col-sm-3 col-3">
    //           <small>
    //             <Link to="/refund">Refund</Link>
    //           </small>
    //         </div>
    //       </div>
    //       <div className="row mt-2">
    //         <div className="col-sm-12">
    //           <small>© 2021 GHURI Express Ltd. All rights reserved.</small>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-sm-7">
    //       <div className="row text-center">
    //         <div className="col-sm-12 linklogo">
    //           <a href="https://www.facebook.com/ghuriApp" target="_blank">
    //             <img src={facebook} alt="" className="img-fluid" />
    //           </a>

    //           <a href="https://twitter.com/GHURI67793705" target="_blank">
    //             <img src={twitter} alt="" className="img-fluid" />
    //           </a>

    //           <a href="https://www.instagram.com/ghuri_app/" target="_blank">
    //             <img src={instagram} alt="" className="img-fluid" />
    //           </a>

    //           <a
    //             href="https://www.youtube.com/channel/UCLVDbjelUC0_zV6gTLF-JYQ/featured"
    //             target="_blank"
    //           >
    //             <img src={youtube} alt="" className="img-fluid" />
    //           </a>

    //           <a href="https://www.linkedin.com/company/ghuri/" target="_blank">
    //             <img src={linkedin} alt="" className="img-fluid" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-sm-2 footer-logo">
    //       <img src={ghurilogo} alt="" className="img-fluid" />
    //     </div>
    //   </div>
    //   <div className="row footer-brand brand-color-bg align-items-center appear_small d-none">
    //     <div className="Footer_fix">
    //       <div className="col-8">
    //         <div className="row">
    //           <div className=" col-3">
    //             <small>
    //               <Link to="/privacy">Privacy</Link>
    //             </small>
    //           </div>
    //           <div className="col-3">
    //             <small>
    //               <Link to="/terms">Terms</Link>
    //             </small>
    //           </div>
    //           <div className="col-3">
    //             <small>
    //               <Link to="/refund">Refund</Link>
    //             </small>
    //           </div>
    //         </div>
    //         <small>
    //           © 2021 GHURI Express Ltd. <br /> All rights reserved.
    //         </small>
    //       </div>
    //       <div className="col-4 footer-logo">
    //         <img src={ghurilogo} alt="" className="img-fluid" />
    //       </div>
    //     </div>

    //     <div className="col-sm-7 col-12">
    //       <div className="row text-center">
    //         <div className="col-sm-12 linklogo">
    //           <a href="https://www.facebook.com/ghuriApp" target="_blank">
    //             <img src={facebook} alt="" className="img-fluid" />
    //           </a>

    //           <a href="https://twitter.com/GHURI67793705" target="_blank">
    //             <img src={twitter} alt="" className="img-fluid" />
    //           </a>

    //           <a href="https://www.instagram.com/ghuri_app/" target="_blank">
    //             <img src={instagram} alt="" className="img-fluid" />
    //           </a>

    //           <a
    //             href="https://www.youtube.com/channel/UCLVDbjelUC0_zV6gTLF-JYQ/featured"
    //             target="_blank"
    //           >
    //             <img src={youtube} alt="" className="img-fluid" />
    //           </a>

    //           <a href="https://www.linkedin.com/company/ghuri/" target="_blank">
    //             <img src={linkedin} alt="" className="img-fluid" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="footer_bg brand-color-bg  margin_footer_top">
        <div className="contain footer">
          <div className="row d-flex align-items-center ">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-2 col-md-2 col-6">
                  <p className="marchant_small">Platform</p>

                  <div className="platform_margin">
                    <small>
                      <a
                        target="_blank"
                        href="  https://service.ghuriexpress.com/"
                      >
                        GHURI Parcel
                      </a>
                    </small>
                  </div>

                  <div className="platform_margin">
                    <small>
                      <a target="_blank" href="https://bazar.ghuriexpress.com/">
                        GHURI Bazar
                      </a>
                    </small>
                  </div>

                  <div className="platform_margin">
                    <small>GHURI Ride</small>
                  </div>
                  <div className="platform_margin">
                    <small>GHURI Food</small>
                  </div>
                  <div className="platform_margin">
                    <small>GHURI Ticket</small>
                  </div>
                  <div className="platform_margin">
                    <small>GHURI Truck</small>
                  </div>
                </div>
                <div className="col-sm-2 col-6 margin_reduce_small_f">
                  <p className="marchant_small">Earn With Ghuri</p>
                  <div className="platform_margin">
                    <small>
                      <a
                        target="_b"
                        href="https://play.google.com/store/apps/details?id=ghuri.express.parcelfighter"
                      >
                        Earn With Ghuri Fighter
                      </a>
                    </small>
                  </div>
                  <div className="platform_margin">
                    <small>Earn With Car</small>
                  </div>

                  <div className="platform_margin">
                    <small>Earn With Cycle</small>
                  </div>
                </div>

                <div className="col-sm-2 col-md-2 col-6">
                  <p className="marchant_small">Policy</p>
                  <div className="platform_margin">
                    <small>
                      {" "}
                      <a href="/privacy" target="_blank">
                        Privacy Policy
                      </a>{" "}
                    </small>
                  </div>

                  <div className="platform_margin">
                    <small>
                      {" "}
                      <a href="/terms" target="_blank">
                        Terms
                      </a>{" "}
                    </small>
                  </div>
                  <div className="platform_margin">
                    <small>
                      {" "}
                      <a href="/refund" target="_blank">
                        Refund
                      </a>{" "}
                    </small>
                  </div>
                </div>

                <div className="col-sm-3 col-md-3 col-6 margin_reduce_small_f">
                  <p className="marchant_small">Contact Us</p>
                  <div>
                    <small>Corporate Headquarter</small>
                  </div>
                  <div>
                    <small>
                      House #101, Northern Road, Baridhara DOHS, Dhaka-1206,
                      Bangladesh.
                    </small>
                  </div>

                  <div className="mt-2">
                    <small>Email: support@ghuriexpress.com</small>
                  </div>

                  <div className="mt-2 dn_smd">
                    <small className="phone_display">
                      <span> Contact no :</span>
                      <span className="mar_fix">
                        {" "}
                        +880 9638 222 111 <br />
                        +880 284 110 18
                      
                      </span>
                    </small>
                  </div>

                  <div className="mt-2 dn_md_all">
                    <small>
                      Contact no : <br /> +880 9638 222 111,
                      <br />
                      <span> +880 28411018</span>
                    </small>
                  </div>
                </div>

                <div className="col-12 col-sm-3 col-md-3 download_footer">
                  <p className="marchant_small">Download</p>
                  <div className="row">
                    <div className="col-5 col-sm-12 col-md-6 footer_store_img play_store_sm">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={playstore} className="" alt="" />
                      </a>
                    </div>
                    <div className="col-5 col-sm-12 col-md-6 paddingr_reduce_small_f footer_store_img ">
                      <img src={appstore} className="   text-right" alt="" />
                    </div>
                  </div>
                  <div className="row mt-3 dn_smd">
                    <div className="col-lg-12">
                      <p>News Letter</p>
                      <div className="input-group input-margin-top">
                        <input
                          className="form-control email"
                          type="email"
                          name=""
                          id=""
                          placeholder="Email"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn newsletter-btn "
                            type="button "
                          >
                            <i class="fa fa-caret-right" aria-hidden="true"></i>
                          </button>
                        </div>
                        <small className="mt-2">
                          Subscribe with email address for our monthly newletter
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer_div_t fix_footer_div">
            <div className="col-sm-6 col-lg-6 col-12 ssl join_us dn_smd">
              <p>Payment Partner</p>
              <img className="img-fluid" src={ssl} alt="" />
            </div>
            <div className="col-sm-3 col-lg-3 col-12 iso join_us">
              <p>Certification</p>
              <img className="img-fluid" src={iso} alt="" />
            </div>
            {/* <div className="col-sm-2 col-lg-2 col-6 csv join_us">
              <p>Member Of</p>
              <img className="img-fluid" src={csv} alt="" />
            </div> */}
           
            <div className="col-sm-4 col-lg-3 col-12 join_us">
              <div className="row justify-content-between">
                <div className="col-sm-12">
                  <p>Join Us</p>
                </div>
              </div>
              <div className="row justify-content-between fix_margin_issues_footer fix_padding_f image_content_small_f text-right">
                <div className="col  col-md-2 col-2  col-xl-2 mt-1">
                  <a href="https://www.facebook.com/ghuriApp" target="_blank">
                    {" "}
                    <img className="follow_us" src={facebook} alt="" />
                  </a>
                </div>
                <div className="col  col-md-2 col-2  col-xl-2 mt-1">
                  <a href="https://twitter.com/GHURI67793705" target="_blank">
                    <img className="follow_us" src={twitter} alt="" />
                  </a>
                </div>
                <div className="col col-sm-2 col-md-2 col-2 col-xl-2 mt-1 ">
                  <a
                    href="https://www.linkedin.com/company/ghuri/"
                    target="_blank" rel="noreferrer"
                  >
                    {" "}
                    <img className="follow_us" src={linkedin} alt="" />
                  </a>
                </div>
                <div className="col col-sm-2 col-md-2 col-2 col-xl-2 mt-1">
                  <a
                    href="https://www.youtube.com/channel/UCLVDbjelUC0_zV6gTLF-JYQ/featured"
                    target="_blank" rel="noreferrer"
                  >
                    {" "}
                    <img className="follow_us" src={youtube} alt="" />
                  </a>
                </div>
                <div className="col col-2 col-sm-2 col-md-2 col-xl-2 mt-1">
                  <a
                    href="https://www.instagram.com/ghuri_app/"
                    target="_blank" rel="noreferrer"
                  >
                    {" "}
                    <img className="follow_us" src={instagram} alt="" />
                  </a>
                </div>
              </div>
            </div>

            
              <div className="col-12 col-sm-12 ssl join_us dn_md_all ">
                <p>Payment Partner</p>
                <img className="img-fluid" src={ssl} alt="" />
              </div>
           
          </div>
        </div>
        <div className="footer-brand brand-color-bg align-items-center l">
          <div className="contain">
            <div className="row d-flex align-items-center">
              <div className="col-sm-12 text-center">
                <span>© 2021 GHURI Express Ltd. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
