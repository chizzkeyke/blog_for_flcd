import React from 'react'

export const WeatherCard = ({ city, png, temp }) => {
   return (
      <div className='weather_card__container'>
         <div className='weather_card__inner'>
            <h4 >{city}</h4>
            <img src={`http://openweathermap.org/img/wn/${png}`} alt='weather_page' />
            <h4 className='temp'>{temp} ℃ </h4>
         </div>
      </div>
   )
}