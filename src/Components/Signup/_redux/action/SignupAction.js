import * as Types from '../types/Types'

import Axios from 'axios'
import { toast } from 'react-toastify';
import { showToast } from '../../../../utils/ToastHelper';
export const InputSignupText=(name,value)=>(dispatch)=>{
    const formData={
        name:name,
        value:value
    }
    dispatch({type:Types.INPUT_SIGNUP_TEXT,payload:formData})
}

export const SubmitSignupData=(data)=>async(dispatch)=>{

   if(data && data.firstName.length === 0){
    showToast('error', "First Name Should Not Be Empty")
    return false
   }
   else if(data && data.lastName.length === 0){
    showToast('error', "Last Name Should Not Be Empty");
    return false
   }
   else if(data && data.email.length === 0){
    toast.error("Email Should Not Be Empty");
    return false
   }
   else if(data && data.phone.length === 0){
    toast.error("Phone Number Should Not Be Empty");
    return false
   }
   else if(data && data.password.length === 0){
    toast.error("Password Should Not Be Empty");
    return false
   }
   else if(data && data.password.length < 6){
    toast.error("Password Should Be At Least 5 Charater");
    return false
   }
   else if(data && data.cpassword.length === 0){
    toast.error("Confirm Password Should Not Be Empty");
    return false
   }
   else if(data && data.cpassword !== data.password){
    toast.error("Password And Confirm Password Should Be Matched");
    return false
   }
   else if(data && data.businessName.length === 0){
    toast.error("Business Name Should Not Be Empty");
    return false
   }
//    else if(data && data.businessUrl.length === 0){
//     toast.error("Business Url Should Not Be Empty");
//     return false
//    }
   else if(data && data.city.length === 0){
    toast.error("City Name Url Should Not Be Empty");
    return false
   }
   else if(data && data.area.length === 0){
    toast.error("Area Should Not Be Empty");
    return false
   }
   else if(data && data.address.length === 0){
    toast.error("Address Should Not Be Empty");
    return false
   }
   console.log(`data`, data)
   const submitData = {
    userType: 1,
    companyName: data.businessName,
    ownerName: data.firstName+" "+data.lastName,
    city: data.city,
    area: data.area,
    address: data.address,
    email: data.email,
    phone: data.phone,
    password: data.password,
    businessName:data.businessName,
    businessUrl:data.businessUrl
   }
   const smsNumber = {
    "msisdn": `88${data.phone}`
   }

const url = `https://dev.api.ghuriparcel.com/v1/merchant/send_otp`;

// const url = `${process.env.REACT_APP_API_URL}merchant/register`;
// const headersData= {
//     'Authorization': 'Basic UjJoMWNtbEZlSEJ5WlhOTVZFUTpVMk55WldOMFMwVlpaMmgxY21sRldGQlNSVk5UVEZSRQ=='
//   } 

  let response = {
    products: [],
    status: false,
    message: "",
    isLoading: true,
    errors: []
};
dispatch({ type: Types.CREATE_SUBMIT, payload: response });

try{
    await Axios.post(url,smsNumber).then(
            (res)=>{
                console.log(`res`, res)
                if(res.data.status){
                    toast.success(res.data.message)
                    if(res.status === 200){
                        localStorage.setItem('signupData',JSON.stringify(submitData))
                        localStorage.setItem('otp_id',res.data.otp_id)
                        dispatch({type:Types.REDIRECT_TO_VERIFICATION,payload:true})
                    }
                }else{
                    toast.error('Please check the file inputs and try again !');
                }
            }
        )
    }catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

//  try{
//     await Axios.post(url,submitData,{
//         headers: headersData
//         }).then(
//             (res)=>{
//                 console.log(`res`, res)
//                 if(typeof res !== 'undefined'){
//                     toast.success(res.data.message)
//                     if(res.status === 200){
//                         dispatch({type:Types.REDIRECT_TO_LOGIN,payload:true})
//                     }
//                 }else{
//                     toast.error('Please check the file inputs and try again !');
//                 }
//             }
//         )
//     }catch (error) {
//         response.message = 'Something Went Wrong !';
//         toast.error(error);
//     }

    response.isLoading = false;
    dispatch({ type: Types.CREATE_SUBMIT, payload: response });

}

export const SetRiderectMessage=()=>(dispatch)=>{
    dispatch({type:Types.REDIRECT_TO_LOGIN,payload:false})
    dispatch({type:Types.SET_EMPTY_SIGNUP_FIELD,payload:false})
}

export const RiderectVerifiCatioFalse=()=>(dispatch)=>{
    dispatch({type:Types.REDIRECT_TO_VERIFICATION,payload:false})
}


export const SubmitSmsCode=(code)=>async(dispatch)=>{
    const signupData = JSON.parse(localStorage.getItem("signupData"))
    const otp_id = localStorage.getItem("otp_id")
    console.log(`code,signupData,otp_id`, code,signupData,otp_id)
    
        const verifyData = {
            csms_id: otp_id,
            otp: code
        }
    const url = `https://dev.api.ghuriparcel.com/v1/merchant/otp_check`
    const urlReg = `${process.env.REACT_APP_API_URL}merchant/register`;
    const headersData= {
         'Authorization': 'Basic UjJoMWNtbEZlSEJ5WlhOTVZFUTpVMk55WldOMFMwVlpaMmgxY21sRldGQlNSVk5UVEZSRQ=='
                       } 

 try{
   await Axios.post(url,verifyData).then(
        (res)=>{
            console.log(`res`, res)
            if(res.data.status){
                 //Hit registration Url
                                    try{
                        Axios.post(urlReg,signupData,{
                            headers: headersData
                            }).then(
                                (res)=>{
                                    console.log(`res`, res)
                                    if(typeof res !== 'undefined'){
                                        toast.success(res.data.message)
                                        if(res.status === 200){
                                            dispatch({type:Types.REDIRECT_TO_LOGIN,payload:true})

                                        }
                                    }else{
                                        toast.error('Please check the file inputs and try again !');
                                    }
                                }
                            )
                        }catch (error) {
                            toast.error('Something Went Wrong !');
                        }
            }
        }
    )
    }catch(error){
        toast.error('Something Went Wrong');
    }

}

export const ResendOtp=()=>async(dispatch)=>{

    const signupData = JSON.parse(localStorage.getItem("signupData"))
    const smsNumber = {
        "msisdn": `88${signupData.phone}`
       }
    
    const url = `https://dev.api.ghuriparcel.com/v1/merchant/send_otp`;

    try{
        await Axios.post(url,smsNumber).then(
                (res)=>{
                    console.log(`res`, res)
                    if(res.data.status){
                        toast.success(res.data.message)
                        if(res.status === 200){
                           
                            localStorage.setItem('otp_id',res.data.otp_id)
                           
                        }
                    }else{
                        toast.error('Please check the file inputs and try again !');
                    }
                }
            )
        }catch (error) {
            toast.error('Something Went Wrong !');
        }
}