import React from 'react'
import "./count.css"
import "../../css/mediaQuery.css"

const Count = () => {
    return (
        <div>
            <div className="container">
                    <div className="total Count ">
                            <div className="row sm_liline">
                                <div className="col-sm-3 info">
                                    <h2>7828+</h2>
                                    <p>Total Products</p>
                                </div>
                                <div className="col-sm-3 info">
                                    <h2>6950+</h2>
                                    <p>Product Delivered</p>
                                </div>
                                <div className="col-sm-3 info">
                                    <h2>13350+</h2>
                                    <p>Parcel Delivered</p>
                                </div>
                                <div className="col-sm-3 info">
                                    <h2>57848+</h2>
                                    <p>Live Impact</p>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Count;
