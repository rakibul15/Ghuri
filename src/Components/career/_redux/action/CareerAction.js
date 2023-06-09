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
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const validPhone = new RegExp(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/);
  const validName = new RegExp(/^[a-zA-Z ]{2,70}$/);
  const positiveNumber = new RegExp(/^[0-9]*[1-9][0-9]*$/)


  if (data && data.name.length === 0) {
    showToast("error", "Name shouldn't be empty");
    return 0;
  }

  else if (!validName.test(data.name)) {
    showToast("error", "Please input a valid name");
    return 0;
  }

  else if (data.email.length === 0) {
    showToast("error", "Email shouldn't be empty");
    return 0;
  } else if (!validEmail.test(data.email)) {
    showToast("error", "Email invalid");
    return 0;
  } else if (data && data.phone.length === 0) {
    showToast("error", "Phone Number shouldn't be empty");
    return 0;
  } else if (!validPhone.test(data.phone)) {
    showToast("error", "Please input a valid phone number");
    return 0;
  } else if (data && data.versity.length === 0) {
    showToast("error", " University shouldn't be empty");
    return 0;
  }
  else if (!validName.test(data.versity)) {
    showToast("error", "Please input a valid university name");
    return 0;
  }


  else if (data && data.cgpa.length === 0) {
    showToast("error", " Cgpa shouldn't be empty");
    return 0;
  }


  else if ((parseFloat(data.cgpa)) > 4 || parseFloat(data.cgpa) <= 0) {
    showToast("error", "Please input a valid Cgpa");
    return 0;
  }

  else if (data && data.gender.length === 0) {
    showToast("error", "Please select gender");
    return 0;
  } else if (data && data.cv2.length === 0) {
    showToast("error", "Select Your CV");
    return 0;
  }

  else if (data && data.current.length > 0 && (!positiveNumber.test(data.current))) {
    showToast("error", "Please input valid current salary");
    return 0;
  }


  else if (data && data.expected.length > 0 && (!positiveNumber.test(data.expected))) {
    showToast("error", "Please input valid expected salary");
    return 0;
  }





  // } else if (data && data.experience.length === 0) {
  //   showToast("error", "experience shouldn't be empty");
  //   return 0;
  // } else if (data && data.interest.length === 0) {
  //   showToast("error", "Expertise/interest shouldn't be empty");
  //   return 0;
  // }



  //else if (data && data.expected.length === 0) {
  //   showToast("error", "Expected salary shouldn't be empty");
  //   return 0;
  // }
  const formData = new FormData();
  formData.append("cv", data.cv2);

  const url = `${process.env.REACT_APP_BAZAR_URL}user/career/submit?id=${id}`;
  console.log(`id career action page`, id);
  console.log(`Sumit URL`, url);
  try {
    await Axios.post(url, data)
      .then(async (res) => {
        console.log(res.data);
        if (res.data.status) {
          const cvurl = `${process.env.REACT_APP_BAZAR_URL}user/career/cv?id=${res.data.CandidateID}`;
          console.log(`CandidateID`, res.data.CandidateID);
          dispatch({ type: Types.IS_LOADING, payload: true });
          await Axios.put(cvurl, formData).then((cvdata) => {
            if (cvdata.data.status) {
              showToast("success", "Successfully Submitted");
            }
            dispatch({ type: Types.IS_LOADING, payload: false });
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
  let url = `${process.env.REACT_APP_BAZAR_URL}user/career/list?page=1&size=100`;

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
  } catch (error) { }
};
