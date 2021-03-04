import React from 'react'
import './Header.css'
import video from './ghuri_percel.mp4'

const Header = () => {
    return (
        <div>
            <video className="videostyle"
                autoPlay
                loop
                muted
            >
                <source src={video} type="video/mp4" />
            </video>
            <div className="content overlay">
                <div className="row center d-flex align-items-center">
                   
                    <div className="col-sm-6 ghuri-button align-items-center">
                        <button className="btn  btn-lg mt-4 ghuriapp"><span><i class="fa fa-mobile mobile"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download Ghuri App&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-chevron-right"></i></span></button> <br />
                        <button className="btn earnwith btn-lg mt-4"><span><i class="fa fa-money"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earn With Ghuri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-chevron-right"></i></span></button>

                    </div>

                    <div className="col-sm-6 f-size text-center">
                        <h1 className="motto">Ghuri Express Limited</h1>
                        <h3 className="motto">Ride | Food |Percel | Ticket |Truck |Bazar</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
