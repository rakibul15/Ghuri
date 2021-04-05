import * as Types from '../types/Types'

import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router';
export const InputSignupText=(name,value)=>(dispatch)=>{
    const formData={
        name:name,
        value:value
    }
    dispatch({type:Types.INPUT_SIGNUP_TEXT,payload:formData})
}

export const SubmitSignupData=(data)=>async(dispatch)=>{

   if(data && data.firstName.length === 0){
    toast.error("First Name Should Not Be Empty");
    return false
   }
   else if(data && data.lastName.length === 0){
    toast.error("Last Name Should Not Be Empty");
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
   else if(data && data.businessUrl.length === 0){
    toast.error("Business Url Should Not Be Empty");
    return false
   }
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
// const url = `https://dev.api.ghuriparcel.com/v1/merchant/register`;
const url = `https://dev.api.ghuriparcel.com/v1/merchant/send_otp`;
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
                        console.log(`yes`)
                        // dispatch({type:Types.REDIRECT_TO_,payload:true})
                    }
                }else{
                    toast.error(res.data.message);
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