import * as Types from "../types/Types";
const initialState = {
    signupTextInput: {
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        password:"",
        cpassword:"",
        businessName:"",
        businessUrl:"",
        city:"",
        area:"",
        address:""
    },
    
};
const SignupReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.INPUT_SIGNUP_TEXT:
            const signupTextInput = { ...state.signupTextInput };
            signupTextInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                signupTextInput: signupTextInput
            };
        default:
            break;
    }
    return newState;
};
export default SignupReducer;