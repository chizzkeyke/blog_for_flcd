import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CardClock } from '../CardClock'
import { nanoid } from 'nanoid'

export const ClocksPage = () => {
   const [data, setData] = useState([])

   const { register, handleSubmit, reset } = useForm()

   const onSubmit = ({ clockName, paramToggleClock }) => {
      const newCard = {
         nameClock: clockName,
         time: paramToggleClock,
         id: nanoid()
      }
      reset({
         clockName: '',
         paramToggleClock: ''
      })
      setData([...data, newCard])
   }

   const deleteClock = (id) => {
      setData(data.filter((clock) => clock.id !== id))
   }

   console.log('soem')

   return (
      <div className='clock_page__container'>
         <div className='input_fields'>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input
                  type='text'
                  placeholder='Введите название'
                  {...register('clockName')}
               />
               <input
                  type='text'
                  placeholder='Введите время'
                  {...register('paramToggleClock')}
               />
               <button type='submit'>Add clock</button>
            </form>
            <div>
               <p>Example : '+5' or '-5' on seconds Input!!!</p>
            </div>
         </div>
         <div className='cards'>
            {
               data.length === 0
                  ? <h5>Cards is not a found</h5>
                  : data.map((clock, index) => (
                     <CardClock key={index} name={clock.nameClock} time={clock.time} onDelete={() => deleteClock(clock.id)} />
                  ))
            }
         </div>
      </div>
   )
}

