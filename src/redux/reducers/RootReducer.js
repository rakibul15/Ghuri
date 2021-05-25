import { combineReducers } from "redux";
import HealthReducer from "../../Components/health/_redux/reducer/HealthReducer";
import ParcelDeailsReducer from "../../Components/parcelDetails/_redux/reducer/ParcelDetailsReducer";

import SignupReducer from "../../Components/Signup/_redux/reducer/SignupReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  // CounterReducer: CounterReducer,
  // TaskReducer: TaskReducer,
  signupInfo: SignupReducer,
  healthInfo: HealthReducer,
  parcelInfo: ParcelDeailsReducer,
});

export default rootReducer;
