import React, { useState } from 'react'
import moment from 'moment'

export const Watch = () => {

   let time = new Date().toLocaleTimeString()
   const [seconds, setSeconds] = useState(time)

   const renderWatch = () => {
      time = new Date().toLocaleTimeString()
      setSeconds(time)
   }
   setInterval(renderWatch, 1000)
   return (
      <>
         <h5>{seconds}</h5>
      </>
   )
}

export const Watch2 = ({time}) => {
   const [seconds, setSeconds] = useState(time)

   const renderWatch = () => {
      time = new Date().toLocaleTimeString()
      setSeconds(time)
   }

   setInterval(renderWatch, 1000)
   return (
      <>
         <h5>{seconds}</h5>
      </>
   )
}

export const ClockWithParametrs = ({ hours }) => {
   const [timeNow, setTimeNow] = useState(moment().format("HH:mm:ss"))
   const action = hours.substring(0, 1)
   const time = Number(hours.substring(1))

   setInterval(() => {
      if (action === '+') {
         setTimeNow(moment().add(time, 'hours').format('HH:mm:ss'))
      } else {
         setTimeNow(moment().subtract(time, 'hours').format('HH:mm:ss')) 
      }
   }, 1000)

   return (
      <div>
         {timeNow}
      </div>
   )
}