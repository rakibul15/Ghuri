import Axios from "axios";
import * as Types from "../types/Types";

export const GetCareerInfo = () => (dispatch) => {
  let url = `${process.env.REACT_APP_BAZAR_URL}user/career/list?page=1&size=50`;

  try {
    Axios.get(url).then((res) => {
      console.log(res);

      if (res.data.status) {
        dispatch({
          type: Types.GET_CAREER_LIST,
          payload: res.data,
        });
      }
    });
  } catch (error) {
    // showToast("error", "Something went wrong");
    console.log("error");
  }
};

export const GetCareerDetails = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_BAZAR_URL}user/career/details?id=${id}`
  dispatch({ type: Types.IS_PAGE_LOAD, payload: true });
  try {
    Axios.get(url).then((res) => {
    
      if (res.data.status) {
        dispatch({
          type: Types.GET_CAREER_DETAILS,
          payload: res.data.career[0],
        });
      }
      dispatch({ type: Types.IS_PAGE_LOAD, payload: false });
    });
  } catch (error) {}
};
