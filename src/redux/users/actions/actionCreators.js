import { START_FETCH_USERS, SUCCESS_FETCH_USERS, ERROR_FETCH_USERS } from './actionTypes'

export function startFetchUsers() {
   return {
      type: START_FETCH_USERS
   }
}

export function successFetchUsers(data) {
   return {
      type: SUCCESS_FETCH_USERS,
      payload: {
         data
      }
   }
}

export function errorFetchUsers(error) {
   return {
      type: ERROR_FETCH_USERS,
      payload: {
         error
      }
   }
}

