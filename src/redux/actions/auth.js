import { START_AUTH_USER, SUCCESS_AUTH_USER, ERROR_AUTH_USER, LOGOUT } from '../constants/auth'

export function startFetchUser() {
   return {
      type: START_AUTH_USER
   }
}

export function successAuthUser(data) {
   const { token } = data
   return {
      type: SUCCESS_AUTH_USER,
      payload: {
         token
      }
   }
}

export function errorAuthUser(error) {
   return {
      type: ERROR_AUTH_USER,
      payload: {
         error
      }
   }
}

export function logout() {
   localStorage.removeItem('token')
   return {
      type: LOGOUT
   }
}
