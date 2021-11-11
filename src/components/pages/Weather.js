import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataWeather } from '../../DAL/fetchWeather'
import { WeatherCard } from '../WeatherCard'
import { clearWeather } from '../../redux/weather/actions/actionCreators'

import '../../App.css'

export const Weather = () => {
   const city = useRef()
   const loading = useSelector(state => state.weather.loading)
   const data = useSelector(state => state.weather.data)
   const error = useSelector(state => state.weather.error)
   const dispatch = useDispatch()

   const handleInput = () => {
      dispatch(clearWeather())
      dispatch(fetchDataWeather(city.current.value))
      city.current.value = ''
   }

   return (
      <div className='weather__container'>
         <div className='weather__input'>
            <input
               placeholder='city...'
               ref={city}
            />
            <button onClick={() => handleInput()}>Find city</button>
         </div>
         <div className='weather__content'>
            {loading
               ? <h4>Wait please</h4>
               : (
                  <>
                     {
                        data.city == null
                           ? null
                           : <WeatherCard city={data?.city} png={data?.png} temp={data?.currentTemp} />
                     }
                     {error && (<h4>{error}</h4>)}
                  </>

               )
            }
         </div>
      </div>
   )
}