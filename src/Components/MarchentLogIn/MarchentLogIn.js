import React from 'react'
import './MarchentLogIn.css'
import { Link } from 'react-router-dom'


const MarchentLogIn = () => {
    return (
        <div className="bg_marchent">
            <div className="p-4 container">
                <div className="row d-flex align-items-center p-5 ">

                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="motto">Ghuri Express Limited</h1>
                                <h3 className="motto">A Platform for all Needs</h3>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 f-size text-center">
                        <form className="mt-form" action="">
                            <div className="row">
                                <div className="col-sm-12  text-center">
                                    <h4>Marchant Login</h4>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-12 fullwidth">
                                    <input type="email" name="email" id="" placeholder="Email" />
                                </div>
                            </div>



                            <div className="row mt-4">
                                <div className="col-sm-12 fullwidth">
                                    <input type="password" name="password" placeholder="Password" id="" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-12 text-right mt-forgetpass">
                                    <a><small>Forget Password</small></a>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-sm-12 mt-submit-btn">
                                    <input type="submit" value="Login" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-12  mt-signup text-center">
                                <small>Not A Member yet!  &nbsp;</small> <span><a><Link to="/signup" href="/signup"><small><strong>Sign Up</strong></small></Link></a></span>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarchentLogIn
