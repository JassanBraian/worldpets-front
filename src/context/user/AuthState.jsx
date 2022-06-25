import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import clientAxios from "../../config/axios";
import authToken from "../../config/token";

import {
    IS_LOADING,
    GET_USER,
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

    const getUser = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                authToken(token);
            }
            const response = clientAxios.get('/api/v1/auth/user');
            dispatch({type: GET_USER, payload: response.data});
        } catch (error) {
            console.log(error)
        }
    }

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
            localStorage.setItem('token', response.data.token);
            dispatch({type: FORGOT_PASS_SUCCESS, payload: response.data});
        } catch (error) {
            console.log(error)
        }
    }

    const resetPass = async (token, data) => {
        try {
            const response = await clientAxios.post (`/api/v1/auth/resetPassword/${token}`, data);  /* `/api/v1/auth/resetPassword/${token}` */
            dispatch({type: RESET_PASSWORD_SUCCESS, payload: response.data.token})
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AuthContext.Provider value={{
            ...state,
            getUser,
            updateUser,
            forgotPass,
            resetPass
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;