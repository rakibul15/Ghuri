import * as Types from "../types/Types";

const initialState = {
  candidateInput: {
    name: "",
    email: "",
    phone: "",
    gender: "",
    versity: "",
    experience: "",
    interest: "",
    notice: "",
    current: "",
    expected: "",
    cgpa: "",
    gender:"",
    cv2: "",
  },

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
      case Types.GET_CANDIDATE_INPUT:
        const candidateInput = { ...state.candidateInput };
        candidateInput[action.payload.name] = action.payload.value;
        return {
          ...state,
          candidateInput:candidateInput,
        };




    default:
      break;
  }

  return newState;
};
export default careerReducer;
