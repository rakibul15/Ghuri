import * as Types from "../type/Types";
const initialState = {
  parcelTracking: null,
  isTracking: false,
};
const ParcelDeailsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.PARCEL_TRACKING:
      return {
        ...state,
        parcelTracking: action.payload,
      };
    case Types.IS_TRACKING:
      return {
        ...state,
        isTracking: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default ParcelDeailsReducer;
