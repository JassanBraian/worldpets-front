import {
    IS_LOADING,
    GET_USER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGOUT,
    LOGIN_SUCCESS,
    FORGOT_PASS_SUCCESS,
    RESET_PASSWORD_SUCCESS
} from '../../types/auth';

const AuthReducer = (state, action) => {
    switch (action.type) {
        case (REGISTER_SUCCESS || LOGIN_SUCCESS):
            return {
                ...state,
                isAuth: true,
                user: action.payload.data.user,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload.user,
                isAuth: true,
                loading: false
            }
        case FORGOT_PASS_SUCCESS:
            return {
                ...state,
                successMsg: action.payload.msg
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isAuth: true,
                loading: false
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                isAuth: false,
                loading: false
            }
        default:
            return state;
    }
}

export default AuthReducer;