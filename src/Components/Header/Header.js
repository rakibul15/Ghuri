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
                        <a href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"  target="_blank" className="btn  btn-lg mt-4 ghuriapp"><span><i class="fa fa-mobile mobile"></i></span><span className="space_app">Download Ghuri App</span><span><i class="fa fa-chevron-right"></i></span></a> <br />
                        <a href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuridrive"  target="_blank" className="btn earnwith btn-lg mt-4"><span><i class="fa fa-money"></i></span><span className="space_fixed">Earn With Ghuri</span><span><i class="fa fa-chevron-right"></i></span></a>

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
