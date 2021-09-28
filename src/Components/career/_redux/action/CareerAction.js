import Axios from "axios";
import * as Types from "../types/Types";

import { showToast } from "../../../../utils/ToastHelper";

export const GetCandidateInput = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({
    type: Types.GET_CANDIDATE_INPUT,
    payload: formData,
  });
};

export const SubmitCandidateInput = (data, id) => async (dispatch) => {
  console.log(`data`, data);
  if (data && data.name.length === 0) {
    showToast("error", "Name shouldn't be empty");

    return 0;
  } else if (data.email.length === 0) {
    showToast("error", "Email shouldn't be empty");
    return 0;
  } else if (data && data.phone.length === 0) {
    showToast("error", "Phone Number Shouldn't be empty");
    return 0;
  } else if (data && data.versity.length === 0) {
    showToast("error", " University Shouldn't be empty");
    return 0;
  } else if (data && data.cgpa.length === 0) {
    showToast("error", " Cgpa Shouldn't be empty");
    return 0;
  } else if (data && data.gender.length === 0) {
    showToast("error", "Please select gender");
    return 0;
  } 
  else if (data && data.cv2.length === 0) {
    showToast("error", "Select Your CV");
    return 0;
  }
  else if (data && data.experience.length === 0) {
    showToast("error", "experience shouldn't be empty");
    return 0;
  } else if (data && data.interest.length === 0) {
    showToast("error", "Expertise/interest shouldn't be empty");
    return 0;
  } else if (data && data.current.length === 0) {
    showToast("error", "Current salary shouldn't be empty");
    return 0;
  } else if (data && data.expected.length === 0) {
    showToast("error", "Expected salary shouldn't be empty");
    return 0;
  } 
  const formData = new FormData();
  formData.append("cv", data.cv2);

  const url = `${process.env.REACT_APP_BAZAR_URL}user/career/submit?id=${id}`;

  try {
    await Axios.post(url, data)
      .then(async (res) => {
        console.log(res);
        if (res.data.status) {
          const cvurl = `${process.env.REACT_APP_BAZAR_URL}user/career/cv?id=${res.data.CandidateID}`;
          dispatch({ type: Types.IS_LOADING, payload: true });
          await Axios.put(cvurl, formData).then((cvdata) => {
            if (cvdata.data.status) {
              showToast("success", res.data.message);
            }
            dispatch({ type: Types.IS_LOADING, payload:false });
          });
        } else {
          showToast("error", res.data.message);
        }
        window.location.href = "/career";
      
      })
      .catch((err) => {
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};

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
  const url = `${process.env.REACT_APP_BAZAR_URL}user/career/details?id=${id}`;
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
