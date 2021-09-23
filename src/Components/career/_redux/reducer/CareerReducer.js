import * as Types from "../types/Types";

const initialState = {
  careerDetails: null,
  career: null,
  isPageLoad: false,
};

const careerReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.GET_CAREER_LIST:
      return {
        ...state,
        career: action.payload,
      };

    case Types.IS_PAGE_LOAD:
      return {
        ...state,
        isPageLoad: action.payload,
      };
    case Types.GET_CAREER_DETAILS:
      return {
        ...state,
        careerDetails: action.payload,
      };

    default:
      break;
  }

  return newState;
};
export default careerReducer;
