import axios from 'axios'
import { startFetchWeather, successFetchWeather, errorFetchWeather } from '../redux/weather/actions/actionCreators'

export const fetchDataWeather = (city) => dispatch => {
   dispatch(startFetchWeather())
   axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=61c399abc327b03c4e757d0f9b344318`
   })
      .then(res => {
         console.log(res.status)
         dispatch(successFetchWeather(res.data))
      })
      .catch(err => {
         dispatch(errorFetchWeather('City is not a found'))
         console.log(err)
      })
}





// https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=61c399abc327b03c4e757d0f9b344318