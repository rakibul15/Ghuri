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
                <div className="row center d-flex align-items-center text-center">
                    <div className="col-sm-6 f-size">
                        <h1 className="motto">Ghuri Express Limited</h1>
                        <h3 className="motto">Ride | Food |Percel | Ticket |Truck |Bazar</h3>
                    </div>
                        <div className="col-sm-6">
                    <button className="btn  btn-lg mt-4 playstore">GHURI <span>PERCEL</span></button> <br/>
                     <button className="btn appStore btn-lg mt-3">GHURI <span>TRUCK</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
