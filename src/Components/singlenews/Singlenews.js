import React from 'react'


const Singlenews = (props) => {
    console.log(props.snews.image);
    return (
        //     <div className="p-4 item ">
        //   <div className="row  d-flex align-items-center headline_box">
        //     <div className="col-sm-4 col-4 ">
        //         <div className=" ">
        //           <img src={props.snews.image} className="img-fluid" alt="" />
        //         </div>
        //     </div>
        //     <div className="col-sm-8 col-8">
             
        //         <div className="headline_text">
        //           <p className="">
        //             <b>{props.snews.haedline}</b>
        //           </p>
        //           <h5 className="mt-2">
        //            {props.snews.description}
        //           </h5>
        //           <a href={props.snews.link}>
        //             View Article
        //             <i class="fa fa-arrow-right headline_arrow"></i>
        //           </a>
        //         </div>
             
        //     </div>
        //   </div>
        // </div> 

        <div className="row justify-content-center d-flex align-items-center">
        <div className="col-sm-4 col-6">
          <div className="">
            {/* Lorem, ipsum dolor. */}
            <div className="headline_img center headline_content ">
              <img src={props.snews.image} className="img-fluid mt-5" alt="" />
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-6">
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

    )
}

export default Singlenews;
