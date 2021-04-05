import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import "../../css/main.css"
import {Card} from 'react-bootstrap'
import { useStopwatch } from 'react-timer-hook';
import { ResendOtp, RiderectVerifiCatioFalse, SubmitSmsCode } from './_redux/action/SignupAction';
const SmsVerification = () => {
  const dispatch = useDispatch()
  const redirectToLogin = useSelector((state) => state.signupInfo.redirectToLogin);
  const [smsCode, setSmsCode] = useState("")
    const {
        seconds,
        reset,
      } = useStopwatch({ autoStart: true });
      const [resend, setResend] = useState(false)
 useEffect(() => {
    if(10-seconds === 0){
        setResend(true)
    }
 }, [seconds])

 useEffect(() => {
  if(redirectToLogin){
    window.location.assign(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`)
  }
 }, [redirectToLogin])

useEffect(() => {
  dispatch(RiderectVerifiCatioFalse())
}, [])
const handleSubmit=(code)=>{
  dispatch(SubmitSmsCode(code))
}
const handleResend=()=>{
 
  dispatch(ResendOtp())
}
    return ( 
        <>
       <div className="sms">
       <div style={{minHeight:"600px"}} className="d-flex align-items-center justify-content-center">
       <Card style={{ width: '40rem' }} className="mt-5 ml-5 bg-light">
  <Card.Body>
    <Card.Title>SMS VERIFICATION</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Please enter the One Time Password (OTP) code here</Card.Subtitle>
    <Card.Text>
        
      <input
      className="mt-3 mb-1"
      type="number"
      name="smsVerification"
      placeholder="Enter verification code"
      value={smsCode}
      onChange={(e)=>setSmsCode(e.target.value)}
      />
    </Card.Text>
    <Card.Link >
      <a href 
      className="btn btn-success mr-3"
      onClick={()=>handleSubmit(smsCode)}  
      >
        Submit
      </a>
    </Card.Link>
    <Card.Link ><a href style={{cursor:"pointer"}} 
    onClick={()=>{
        reset();
        setResend(false);
        handleResend();
    }}>
        {resend &&(
          'resend'
        )}
        {!resend &&(<><span style={{fontSize:"20px"}} className="badge badge-secondary">00 : {10-seconds} Seconds</span></>)}
        </a>
    </Card.Link>   
  </Card.Body>
</Card>
</div>
      </div>
        </>
     );
}
 
export default SmsVerification;