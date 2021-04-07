import * as Types from '../type/Types'
export const SendPackage=(packageType, packageValue)=>(dispatch)=>{
    
    dispatch({type:packageType,payload:packageValue})
    

}



