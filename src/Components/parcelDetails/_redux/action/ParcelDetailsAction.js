import * as Types from "../type/Types";
import { showToast } from "../../../../utils/ToastHelper";

import Axios from "axios";

export const getsearchdata = (searchdata) => async (dispatch) => {
  if (searchdata.length === 0) {
    showToast("error", "Please give me a tracking number");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}parcel/track?track_id=${searchdata}`;
  dispatch({ type: Types.IS_TRACKING, payload: true });
  try {
    await Axios.get(url)
      .then((res) => {
        if (res.data.status) {
          console.log(` res.parcelTracking`, res.data.parcelTracking);
          dispatch({
            type: Types.PARCEL_TRACKING,
            payload: res.data.parcelTracking,
          });
          dispatch({ type: Types.IS_TRACKING, payload: false });
        }
      })
      .catch((err) => {
        console.log(`err`, err);
      });
  } catch (err) {
    showToast("error", "Something went wrong");
  }
  dispatch({ type: Types.IS_TRACKING, payload: false });
};

export const Progress = (status) => {
  switch (status) {
    case 0:
      return 5;
    case 1:
      return 23;
    case 2:
      return 42;
    case 3:
      return 60;
    case 4:
      return 80;
    case 5:
      return 100;
    case 6:
      return 100;
    default:
      return 0;
  }
};
export const IconProgress = (status) => {
  switch (status) {
    case 0:
      return "2%";
    case 1:
      return "20%";
    case 2:
      return "38%";
    case 3:
      return "57%";
    case 4:
      return "75%";
    case 5:
      return "94%";
    case 6:
      return "94%";
    default:
      return "0%";
  }
};
