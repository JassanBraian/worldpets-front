import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import clientAxios from "../../config/axios";
import authToken from "../../config/token";

import {
    IS_LOADING,
    UPDATE_SUCCESS,
    FORGOT_PASS_SUCCESS,
    RESET_PASSWORD_SUCCESS
} from '../../types'

const AuthState = ({children}) => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuth: false,
        user: null,
        loading: true,
        successMsg: ''
    }

    const {state, dispatch} = useReducer(AuthReducer, initialState)

    const updateUser = async (data) => {
        try {
            const response = await clientAxios.put('/api/v1/users', data);
            dispatch({type: UPDATE_SUCCESS, payload: response.data.data});
        } catch (error) {
            console.log(error)
        }
    }

    const forgotPass = async (data) => {
        try {
            const response = await clientAxios.post ('/api/v1/auth/forgotPassword', data);
            dispatch({type: FORGOT_PASS_SUCCESS, payload: response.data});
            dispatch({type: RESET_PASSWORD_SUCCESS, payload: response.data.token})
        } catch (error) {
            console.log(error)
        }
    }

    const resetPass = async (data) => {
        try {
            const response = await clientAxios.post ("/api/v1/auth/resetPassword" /* ${token} */, data);
            dispatch({type: RESET_PASSWORD_SUCCESS, payload: response.data.token})
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AuthContext.Provider value={{
            ...state,
            updateUser,
            forgotPass,
            resetPass
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;