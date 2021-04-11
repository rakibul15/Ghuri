import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";
import { showToast } from '../../../utils/ToastHelper';
import { useStopwatch } from 'react-timer-hook';

const HealthVerification=(props)=> {
    const {handleClose} = props
    // const history = useHistory()
//   const dispatch = useDispatch()
//   const redirectToLogin = useSelector((state) => state.signupInfo.redirectToLogin);
  const [smsCode, setSmsCode] = useState("")
  const [count, setCount] = useState(0)
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
// console.log(`count`, count)

//  useEffect(() => {
//   if(redirectToLogin){
//     window.location.assign(`${process.env.REACT_APP_OCEAN_GHURIPARCEL}`)
//   }
//  }, [redirectToLogin])

useEffect(() => {
  
  if(count === 3){
    showToast('error',"Please Give Correct Phone Number")
    // history.push('/marchent')
  }
}, [count])

// useEffect(() => {
//   dispatch(RiderectVerifiCatioFalse())
  
//   }, [])

// const handleSubmit=(code)=>{
//   dispatch(SubmitSmsCode(code))
// }
const handleResend=()=>{
 if(count < 3){
    //  dispatch(ResendOtp())
  }
 
}
// const userData =JSON.parse(localStorage.getItem("signupData")) 
//   const mobile = userData.phone
//   const lastTwo = mobile.slice(-2)

    return (
        <>
        <Modal.Header closeButton>
        <Modal.Title>SMS VERIFICATION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
               
            <label>GP-</label> <input
            className="mt-3 mb-1"
            type="number"
            name="smsVerification"
            placeholder="Enter verification code"
            value={smsCode}
            // onChange={(e)=>setSmsCode(e.target.value)}
            />
        </Modal.Body>
        <Modal.Footer>
        <span className="text-right" style={{marginLeft:"0px"}}>
      <a href 
      style={{cursor:"pointer"}}
      
      onClick={()=>{
        reset();
        setResend(false);
        handleResend();
        setCount(count+1)
    }}>
        {resend &&(
          'Resend?'
        )}
       
        </a>
        {!resend &&(<><span  style={{fontSize:"20px"}} >00:00:{30-seconds}</span></>)}
        </span>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
        </>
    )
}

export default HealthVerification
