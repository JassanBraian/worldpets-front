import { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clientAxios from '../../config/axios';
import authToken from '../../config/token';

import {
  IS_LOADING,
  GET_USER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_SUCCESS,
  FORGOT_PASS_SUCCESS,
  RESET_PASSWORD_SUCCESS
} from '../../types/auth';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: false,
    user: null,
    loading: true,
    successMsg: ''
  }
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (data) => {
    try {
      const response = await clientAxios.post('/api/v1/auth/signup', data);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      localStorage.setItem('token', response.data.token);
      console.log(response);
    } catch (error) {
      console.log(error);

    }
  }
  const getUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) { authToken(token); }
      const response = await clientAxios.get('/api/v1/auth/user');
      dispatch({ type: GET_USER, payload: response.data })
    } catch (error) {
      console.log(error)
    }
  }
  const login = async (data) => {
    try {
      const response = await clientAxios.post('/api/v1/auth/login', data);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error);
    }
  }
  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT })
  };

  const forgotPassword = async (data) => {
    try {
      const response = await clientAxios.post('/api/v1/auth/forgotPassword', data);
      localStorage.setItem('token', response.data.token); //VER SI ESTO ES NECESARIO LUEGO !!!
      dispatch({ type: FORGOT_PASS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  const resetPassword = async (token, data) => {
    try {
      const response = await clientAxios.post(`/api/v1/auth/resetPassword/${token}`, data);
      localStorage.setItem('token', response.data.token);
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider value={{
      ...state,
      registerUser,
      getUser,
      logout,
      login,
      forgotPassword,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;