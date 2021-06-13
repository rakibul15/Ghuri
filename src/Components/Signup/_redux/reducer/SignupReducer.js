import * as Types from "../types/Types";
const initialState = {
  signupTextInput: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    shopName: "",
    shopUrl: "",
    city: "",
    area: "",
    address: "",
  },
  addStatus: false,
  addMessage: "",
  isLoading: false,
  errors: [],
  redirectToLogin: false,
  redirectToVerification: false,
  hubList: null,
  allDistrictList: null,
};
const SignupReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.INPUT_SIGNUP_TEXT:
      const signupTextInput = { ...state.signupTextInput };
      signupTextInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        signupTextInput: signupTextInput,
      };
    case Types.CREATE_SUBMIT:
      return {
        ...state,
        addMessage: action.payload.message,
        addStatus: action.payload.status,
        isLoading: action.payload.isLoading,
        errors: action.payload.errors,
      };
    case Types.REDIRECT_TO_LOGIN:
      return {
        ...state,
        redirectToLogin: action.payload,
      };
    case Types.REDIRECT_TO_VERIFICATION:
      return {
        ...state,
        redirectToVerification: action.payload,
      };
    case Types.SET_EMPTY_SIGNUP_FIELD:
      return {
        ...state,
        signupTextInput: initialState.signupTextInput,
      };
    case Types.ALL_HUB_LIST:
      return {
        ...state,
        hubList: action.payload,
      };
    case Types.GET_DISTRICT_LIST:
      return {
        ...state,
        allDistrictList: makeDistrictList(action.payload),
      };
    default:
      break;
  }
  return newState;
};
export default SignupReducer;

const makeDistrictList = (data) => {
  const option = [];
  if (data) {
    data.forEach((item) => {
      const dist = {
        label: item,
        value: item,
      };
      option.push(dist);
    });
  }
  return option;
};
