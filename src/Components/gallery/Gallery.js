import React from 'react'
import "./gallery.css"
import "../../css/mediaQuery.css"
import ghuri_ticket from "../../images/gallery/gallery_3.png"
import image1 from "../../images/gallery/ghuri_ride_news.png"
import image2 from "../../images/gallery/ghuri_truck.png"
import image3 from "../../images/gallery/gallery_bg.png"
import ghuri_ride from "../../images/gallery/image_ride.png"
import mobile from "../../images/gallery/mobile.png"
import parcel2 from "../../images/gallery/parcel_2.png"
import interior from "../../images/gallery/interior.jpg"
import news from "../../images/gallery/news.jpg"

const Gallery = () => {
    return (
        <div className="ghuri_gallery mt-5 ">
            <div className="row text-center gallery_bg_caontainer">
                <div className="col-sm-12  gallery_bg">
                        <div className="gallery_head center text-center">
                            <h1>GHURI GALLERY</h1>
                            {/* <h3>Ghuri for everyone for every needs</h3> */}
                        </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-3 col-6 small_size_fix fixing">
                       <div className="gallery_cover_img">
                       <img src={image1} className="img-fluid" alt=""/>
                        <p>Ghuri Parcel</p>
                       
                       </div>
                </div>
                <div className="col-sm-3 col-6 small_size_fix_right second_fix">
                       <div className="gallery_cover_img">
                       <img src={ghuri_ride} className="img-fluid" alt=""/>
                        <p>Ghuri Ride</p>
                       
                       </div>
                </div>
                <div className="col-sm-3 col-6 small_size_fix third_fix">
                      <div className="gallery_cover_img">
                      <img src={parcel2} className="img-fluid" alt=""/>
                        <p>Ghuri Food</p>
                     
                      </div>
                </div>
                <div className="col-sm-3 col-6 small_size_fix_right fixing small_size_fourth ">
                      <div className="gallery_cover_img">
                      <img src={image2} className="img-fluid" alt=""/>
                        <p>Ghuri Truck</p>
                      </div>
                </div>
                
            </div>
            <div className="row mt-1">
                <div className="col-sm-3 col-6 small_size_fix fixing">
                       <div className="gallery_cover_img">
                       <img src={mobile} className="img-fluid" alt=""/>
                        <p>Ghuri Bazar</p>
                       
                       </div>
                </div>
                <div className="col-sm-3 col-6 small_size_fix_right second_fix">
                       <div className="gallery_cover_img">
                       <img src={ghuri_ticket} className="img-fluid" alt=""/>
                        <p>Ghuri Ticket</p>
                       </div>
                </div>
                <div className="col-sm-3 col-6 small_size_fix third_fix">
                      <div className="gallery_cover_img">
                      <img src={news} className="img-fluid" alt=""/>
                        <p>Ghuri News</p>
                      </div>
                </div>
                <div className="col-sm-3 col-6 small_size_fix_right fixing small_size_fourth ">
                      <div className="gallery_cover_img">
                      <img src={interior} className="img-fluid" alt=""/>
                        <p>Ghuri Interior</p>
                      </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Gallery;
