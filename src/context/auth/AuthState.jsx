import { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clientAxios from '../../config/axios';
import authToken from '../../config/token';

import {
  IS_LOADING,
  GET_USER,
  UPDATE_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_SUCCESS,
  FORGOT_PASS_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  GET_PUBLICATION,
  GET_PUBLICATIONS
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
      const response = await clientAxios.post('http://localhost:4000/api/v1/auth/signup', data);
      console.log(response.data.token)
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
  const updateUser = async (data) => {
    try {
        const response = await clientAxios.put('/api/v1/users', data);
        dispatch({type: UPDATE_SUCCESS, payload: response.data.data});
    } catch (error) {
        console.log(error)
    }
  }
  const login = async (data) => {
    try {
      const response = await clientAxios.post('http://localhost:4000/api/v1/auth/login', data); 
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('emailUser', response.data.data.user.userEmail )
    } catch (error) {
      console.log(error);
    } 
  }
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('emailUser');
    dispatch({ type: LOGOUT })
  };

  const forgotPassword = async (data) => {
    try {
      const response = await clientAxios.post('http://localhost:4000/api/v1/auth/forgotPassword', data);
      console.log(response)
      /* localStorage.setItem('token', response.data.token);  *///VER SI ESTO ES NECESARIO LUEGO !!!
      dispatch({ type: FORGOT_PASS_SUCCESS, payload: response.data });
      console.log("paso")
    } catch (error) {
      console.log(error);
    }
  }
  const resetPassword = async (token, data) => {
    try {
      const response = await clientAxios.post(`http://localhost:4000/api/v1/auth/resetPassword/${token}`, data);
      console.log(response)
      localStorage.setItem('token', response.data.token);
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  const getPublication = async () => {
    try {
      const response = await clientAxios.get('/api/v1/'); /* COMPLETAR */
      dispatch({ type: GET_PUBLICATION, payload: response.data })
    } catch (error) {
      console.log(error)
    }
  }

  const getPublications = async () => {
    try {
      const response = await clientAxios.get('/api/v1/'); /* COMPLETAR */
      dispatch({ type: GET_PUBLICATIONS, payload: response.data })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      registerUser,
      getUser,
      updateUser,
      logout,
      login,
      forgotPassword,
      resetPassword,
      getPublication,
      getPublications
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;