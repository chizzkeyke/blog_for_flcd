import { START_FETCH_PROFILE_USER, SUCCESS_FETCH_PROFILE_USER, ERROR_FETCH_PROFILE_USER } from '../actions/actionTypes'

const initialState = {
   data: {
      id: null,
      email: null,
      first_name: null,
      last_name: null,
      avatar: null
   },
   loading: false,
   error: null
}

export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case START_FETCH_PROFILE_USER: {
         return {
            ...state,
            loading: true
         }
      }
      case SUCCESS_FETCH_PROFILE_USER: {
         const { id, email, first_name, last_name, avatar } = action.payload
         return {
            ...state,
            loading: false,
            data: {
               id, email, first_name, last_name, avatar
            }
         }
      }
      case ERROR_FETCH_PROFILE_USER: {
         const { error } = action.payload
         return {
            ...state,
            loading: false,
            error
         }
      }

      default:
         return state;
   }
}