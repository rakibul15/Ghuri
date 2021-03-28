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
    addStatus: false,
    addMessage: '',
    isLoading: false,
    errors: [],
    redirectToLogin:false
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
                redirectToLogin:action.payload
            }
        case Types.SET_EMPTY_SIGNUP_FIELD:
            return{
                ...state,
                signupTextInput:initialState.signupTextInput
            }
        default:
            break;
    }
    return newState;
};
export default SignupReducer;