import { combineReducers } from "redux";
import SignupReducer from "../../Components/Signup/_redux/reducer/SignupReducer";



// combine all of the reducers here
const rootReducer = combineReducers({
    // CounterReducer: CounterReducer,
    // TaskReducer: TaskReducer,
    signupInfo: SignupReducer
});

export default rootReducer;