import Axios from "axios"
export const getsearchdata = (searchdata) => (dispatch) => {
const url=`https://dev.api.ghuriparcel.com/v1/parcel/track?track_id=${searchdata}`

try{
    Axios.get(url)
.then((res) =>{
    console.log(res)
}
)

}
catch(err){
    console.log("error")
}
}
