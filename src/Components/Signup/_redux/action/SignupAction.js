import * as Types from '../types/Types'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
export const InputSignupText=(name,value)=>(dispatch)=>{
    const formData={
        name:name,
        value:value
    }
    dispatch({type:Types.INPUT_SIGNUP_TEXT,payload:formData})
}

export const SubmitSignupData=(data)=>(dispatch)=>{
// console.log(`data`, data)

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
   const submitData = {
    userType: 1,
    companyName: data.businessName,
    ownerName: data.firstName+" "+data.lastName,
    city: data.city,
    area: data.area,
    address: data.address,
    email: data.email,
    phone: data.phone,
    password: data.password
   }
// console.log(`submitData`, submitData)

const url = `http://34.117.240.175/v1/merchant/register`;

const headersData= {
    'Content-Type': 'application/json',
    'Authorization': 'Basic UjJoMWNtbEZlSEJ5WlhOTVZFUTpVMk55WldOMFMwVlpaMmgxY21sRldGQlNSVk5UVEZSRQ==',
    'Access-Control-Allow-Origin':'*',
  } 
 Axios.post(url,submitData,{
      headers: headersData
      }).then(
          (res)=>{
              console.log(`res`, res)
              if(res.data.message){
                  toast.success(res.data.message)
              }
          }
      )

}