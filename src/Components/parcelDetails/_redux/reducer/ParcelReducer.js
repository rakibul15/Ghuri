import * as Types from "../type/Types";
const initialState = {
  parcelTracking: null,
};
const ParcelReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.PARCEL_TRACKING:
      console.log(`action.payload`, action.payload);
      return {
        ...state,
        parcelTracking: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default ParcelReducer;
