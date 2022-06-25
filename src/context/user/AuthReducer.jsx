import {
    UPDATE_SUCCESS,
    FORGOT_PASS_SUCCESS,
    RESET_PASSWORD_SUCCESS
} from '../../types'

const  authReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_SUCCESS:
          return {
            ...state,
            user: action.payload.user,
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
          default:
            return state;
    }

}

export default authReducer;