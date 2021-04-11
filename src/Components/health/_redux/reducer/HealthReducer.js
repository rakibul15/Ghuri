import * as Types from "../type/Types";
const initialState = {
  bronzePackage1: null,
  healthFormInput:{
        name:"",
        dateOfBirth:"",
        applicantPhone:"",
        address:"",
        email:"",
        gender:"",
        nominee:"",
        nomineeRelation:""
  }
};
const HealthReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.BRONGE_PACKAGE_1:
      return {
        ...state,
        packageValue: action.payload,
      };
    case Types.BRONGE_PACKAGE_2:
      return {
        ...state,
        packageValue: action.payload,
      };
    case Types.GOLD_PACKAGE_1:
      return {
        ...state,
        packageValue: action.payload,
      };
    case Types.GOLD_PACKAGE_2:
      return {
        ...state,
        packageValue: action.payload,
      };
    case Types.GOLD_PACKAGE_3:
      return {
        ...state,
        packageValue: action.payload,
      };
      case Types.SILVER_PACKAGE_1:
        return {
          ...state,
          packageValue: action.payload,
        };
      case Types.SILVER_PACKAGE_2:
        return {
          ...state,
          packageValue: action.payload,
        };
      case Types.SILVER_PACKAGE_3:
        return {
          ...state,
          packageValue: action.payload,
        };
      //Health form
      case Types.INPUT_HEALTH_FORM:
        const healthFormInput={...state.healthFormInput}
        healthFormInput[action.payload.name] = action.payload.value
        return {
          ...state,
          healthFormInput:healthFormInput
        }
    default:
      break;
  }
  return newState;
};
export default HealthReducer;
