import * as Types from '../type/Types'
import { showToast } from '../../../../utils/ToastHelper';

import Axios from 'axios'
export const SendPackage=(packageType, packageValue)=>(dispatch)=>{
    
    dispatch({type:packageType,payload:packageValue})
    

}

export const InputHealthForm=(name,value)=>(dispatch)=>{
    const formData={
        name:name,
        value:value
    }
    dispatch({type:Types.INPUT_HEALTH_FORM,payload:formData})
}
export const SubmitHealthForm=(data)=>async(dispatch)=>{
    if(data && data.name.length === 0){
        showToast('error',"Name can`t be empty")
        return false;
    }
    else if(data && data.dateOfBirth.length === 0){
        showToast('error',"Date of birth can`t be empty")
        return false;
    }
    else if(data && data.applicantPhone.length === 0){
        showToast('error',"Phone Number can`t be empty")
        return false;
    }
    else if(data && data.address.length === 0){
        showToast('error',"Address can`t be empty")
        return false;
    }
    else if(data && data.email.length === 0){
        showToast('error',"Email can`t be empty")
        return false;
    }
    else if(data && data.gender.length === 0){
        showToast('error',"Gender can`t be empty")
        return false;
    }
    else if(data && data.nominee.length === 0){
        showToast('error',"Nominee can`t be empty")
        return false;
    }
    else if(data && data.nomineeRelation.length === 0){
        showToast('error',"Relation of nominee can`t be empty")
        return false;
    }
 const url = `${process.env.REACT_APP_API_URL}`;
    try{
     await Axios.post(url,data).then(
         (res)=>{
             console.log(`res`, res)
         }
     ).catch(
         (err)=>{
             const message = JSON.parse(err.request.response).message
             showToast('error',message)
         }
     )
    }catch(error){
        showToast('error',"Something Went Wrong !")
    }
}
   
