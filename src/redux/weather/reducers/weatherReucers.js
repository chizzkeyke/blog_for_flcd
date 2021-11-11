import {CLEAR_WEATHER, START_FETCH_WEATHER, SUCCESS_FETCH_WEATHER, ERROR_FETCH_WEATHER } from "../actions/actionTypes";

const initiaState = {
   data: {
      city: null,
      currentTemp: null,
      weather: null
   },
   loading: false,
   error: null
}

export default function weatherReducer(state = initiaState, action) {
   switch (action.type) {
      case START_FETCH_WEATHER: {
         return {
            ...state,
            loading: true
         }
      }
      case SUCCESS_FETCH_WEATHER: {
         const { name, temp, image } = action.payload

         return {
            ...state,
            data: {
               city: name,
               currentTemp: temp,
               png: image
            },
            loading: false
         }
      }
      case ERROR_FETCH_WEATHER: {
         const { error } = action.payload
         return {
            ...state,
            error,
            loading: false
         }
      }
      case CLEAR_WEATHER: {
         return initiaState
      }
      default:
         return state;
   }
}