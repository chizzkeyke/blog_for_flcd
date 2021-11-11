import { CLEAR_WEATHER, START_FETCH_WEATHER, SUCCESS_FETCH_WEATHER, ERROR_FETCH_WEATHER } from './actionTypes'

export function startFetchWeather() {
   return {
      type: START_FETCH_WEATHER
   }
}

export function successFetchWeather(data) {
   const { name, weather, main } = data
   const { icon } = weather[0]
   const { temp } = main

   // const tempInCel = Math.ceil((temp - 273) * 100) / 100
   const image = icon + '.png'
   const newTemp = Math.round(temp)

   return {
      type: SUCCESS_FETCH_WEATHER,
      payload: {
         name,
         temp: newTemp,
         image
      }
   }
}

export function clearWeather() {
   return {
      type: CLEAR_WEATHER
   }
}

export function errorFetchWeather(error) {
   return {
      type: ERROR_FETCH_WEATHER,
      payload: {
         error
      }
   }
}


