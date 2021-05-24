import Axios from "axios";
import * as Types from "../type/Types";

export const getsearchdata = (searchdata) => (dispatch) => {
  const url = `https://dev.api.ghuriparcel.com/v1/parcel/track?track_id=${searchdata}`;

  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        console.log(` res.parcelTracking`, res.data.parcelTracking);
        dispatch({ type: Types.PARCEL_TRACKING, payload: res.parcelTracking });
      }
    });
  } catch (err) {
    console.log("error");
  }
};
