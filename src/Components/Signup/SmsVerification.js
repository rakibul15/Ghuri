import React, { useState, useEffect } from 'react'
import "../../css/main.css"
import {Card} from 'react-bootstrap'
import { useStopwatch } from 'react-timer-hook';
const SmsVerification = () => {

    const {
        seconds,
        reset,
      } = useStopwatch({ autoStart: true });
      const [resend, setResend] = useState(false)
 useEffect(() => {
    if(30-seconds === 0){
        setResend(true)
    }
 }, [seconds])


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
      type="text"
      name="smsVerification"
      placeholder="Enter verification code"
      />
    </Card.Text>
    <Card.Link ><a href className="btn btn-success mr-3">Submit</a></Card.Link>
    <Card.Link ><a href style={{cursor:"pointer"}} 
    onClick={()=>{
        reset();
        setResend(false)
    }}>
        {resend &&("Resend?")}
        {!resend &&(<><span style={{fontSize:"20px"}} className="badge badge-secondary">00 : {30-seconds} Seconds</span></>)}
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