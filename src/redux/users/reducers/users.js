import { START_FETCH_USERS, SUCCESS_FETCH_USERS, ERROR_FETCH_USERS } from '../actions/actionTypes'

const initialState = {
   users: {},
   loading: false,
   error: null
}

export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case START_FETCH_USERS: {
         return {
            ...state,
            loading: true
         }
      }
      case SUCCESS_FETCH_USERS: {
         const { data } = action.payload
         return {
            ...state,
            users: {
               ...data
            },
            loading: false
         }
      }
      case ERROR_FETCH_USERS: {
         const { error } = action.payload
         return {
            ...state,
            error,
            loading: false
         }
      }
      default:
         return state
   }
}