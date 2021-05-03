import * as Types from "../type/Types";
import { showToast } from "../../../../utils/ToastHelper";

import Axios from "axios";
export const SendPackage = (packageType, packageValue) => (dispatch) => {
  dispatch({ type: packageType, payload: packageValue });
};

export const InputHealthForm = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.INPUT_HEALTH_FORM, payload: formData });
};
export const SubmitHealthForm = (data) => async (dispatch) => {
  if (data && data.name.length === 0) {
    showToast("error", "Name can`t be empty");
    return false;
  } else if (data && data.dateOfBirth.length === 0) {
    showToast("error", "Date of birth can`t be empty");
    return false;
  } else if (data && data.applicantPhone.length === 0) {
    showToast("error", "Phone Number can`t be empty");
    return false;
  } else if (data && data.address.length === 0) {
    showToast("error", "Address can`t be empty");
    return false;
  } else if (data && data.email.length === 0) {
    showToast("error", "Email can`t be empty");
    return false;
  } else if (data && data.gender.length === 0) {
    showToast("error", "Gender can`t be empty");
    return false;
  } else if (data && data.nominee.length === 0) {
    showToast("error", "Nominee can`t be empty");
    return false;
  } else if (data && data.nomineeRelation.length === 0) {
    showToast("error", "Relation of nominee can`t be empty");
    return false;
  }
  dispatch({ type: Types.IS_HEALTH_SUBMITTING, payload: true });
  const url = `${process.env.REACT_APP_API_URL}admin/health_otp`;
  const phoneNumber = {
    msisdn: "88" + data.applicantPhone,
  };
  try {
    await Axios.post(url, phoneNumber)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.HEALTH_OTP_ID, payload: res.data.otp_id });
          dispatch({ type: Types.IS_SUBMITED_HEALTH, payload: false });
          dispatch({ type: Types.IS_HEALTH_SUBMITTING, payload: false });
        } else {
          showToast("error", res.data.message);
        }
      })
      .catch((err) => {
        let message = JSON.parse(err.request.response).message;
        if (message === "Invalid MSISDN") {
          message = "Phone Number Invalid";
        }
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something Went Wrong !");
  }
  dispatch({ type: Types.IS_HEALTH_SUBMITTING, payload: false });
};

export const SubmitHealthOtp = (
  healthFormInput,
  smsCode,
  healthOtpId
) => async (dispatch) => {
  const verifyData = {
    csms_id: healthOtpId,
    otp: smsCode,
  };
  const url = `${process.env.REACT_APP_API_URL}admin/health_otp_check`;
  const urlReg = `${process.env.REACT_APP_API_URL}admin/health/applicant_info`;

  try {
    await Axios.post(url, verifyData).then((res) => {
      if (res.data.status) {
        //Hit registration Url
        try {
          Axios.post(urlReg, healthFormInput).then((res) => {
            if (typeof res !== "undefined") {
              showToast("success", res.data.message);
              if (res.status === 200) {
                dispatch({ type: Types.IS_SUBMITED_HEALTH, payload: true });
                dispatch({ type: Types.EMPTY_HEALTH_INPUT, payload: "" });
              }
            } else {
              showToast(
                "error",
                "Please check the file inputs and try again !"
              );
            }
          });
        } catch (error) {
          showToast("error", "Something went wrong");
        }
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};

export const ResendHealthOtp = (mobile) => async (dispatch) => {
  const smsNumber = {
    msisdn: `88${mobile}`,
  };

  const url = `${process.env.REACT_APP_API_URL}admin/health_otp`;

  try {
    await Axios.post(url, smsNumber)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          if (res.status === 200) {
            dispatch({ type: Types.HEALTH_OTP_ID, payload: res.data.otp_id });
          }
        } else {
          showToast("error", res.data.message);
        }
      })
      .catch((err) => {
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const EmptyHealthOtp = () => (dispatch) => {
  dispatch({ type: Types.HEALTH_OTP_ID, payload: null });
};
