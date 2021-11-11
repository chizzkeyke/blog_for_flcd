import { React } from 'react'
import { ClockWithParametrs } from './Watch'

export const CardClock = ({ name, time, onDelete }) => {
   return (
      <div className='card_clock__container'>
         <div>{name}</div>
         <ClockWithParametrs hours={time} />
         <button onClick={() => onDelete()} className="waves-effect waves-light btn-small"><i className="material-icons">clear</i></button>
      </div>
   )
}