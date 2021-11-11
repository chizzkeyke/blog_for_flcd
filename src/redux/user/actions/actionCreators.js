import { START_FETCH_PROFILE_USER, SUCCESS_FETCH_PROFILE_USER, ERROR_FETCH_PROFILE_USER } from './actionTypes'

export function startFetchProfileUser() {
   return {
      type: START_FETCH_PROFILE_USER
   }
}

export function successFetchProfileUser(data) {
   return {
      type: SUCCESS_FETCH_PROFILE_USER,
      payload: {
         ...data
      }
   }
}

export function errorFetchProfileUser(error) {
   return {
      type: ERROR_FETCH_PROFILE_USER,
      payload: {
         error
      }
   }
}