import React from 'react'
import "./count.css"
import "../../css/mediaQuery.css"

const Count = () => {
    return (
        <div>
            <div className="container">
                    <div className="total Count ">
                            <div className="row sm_liline">
                                <div className="col-sm-4 info">
                                    <h2>1000+</h2>
                                    <p>App Download</p>
                                </div>
                                <div className="col-sm-4 info">
                                    <h2>10000+</h2>
                                    <p>Parcel Delivered</p>
                                </div>
                                <div className="col-sm-4 info">
                                    <h2>50000+</h2>
                                    <p>Lives Impacted</p>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Count;
