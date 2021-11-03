import { START_AUTH_USER, SUCCESS_AUTH_USER, ERROR_AUTH_USER, LOGOUT } from '../actions/constatns'

const token = localStorage.getItem('token')

const initialState = token
   ? {
      isAuth: true,
      token: token,
      loading: false,
      error: null
   }
   : {
      isAuth: false,
      token: null,
      loading: false,
      error: null
   }

export default function authReducer(state = initialState, action) {
   switch (action.type) {
      case START_AUTH_USER: {
         return {
            ...state,
            loading: true
         }
      }
      case SUCCESS_AUTH_USER: {
         const { token } = action.payload
         return {
            ...state,
            loading: false,
            isAuth: true,
            token
         }
      }
      case ERROR_AUTH_USER: {
         const { error } = action.payload
         return {
            ...state,
            loading: false,
            isAuth: false,
            error
         }
      }
      case LOGOUT: {
         return {
            ...initialState
         }
      }

      default:
         return state;
   }
}