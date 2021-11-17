import React from 'react'
import { nanoid } from 'nanoid'

function ButtonFastChooseParcent({ num, setValue }) {

   return (
      <button
         className={'btn_fast_choose_calc'}
         onClick={() => {
            setValue('parcent', num)
         }}
      >
         {num + ' %'}
      </button>
   )
}

function ButtonFastChooseFirstPayment({ num, setValue, watch }) {

   return (
      <button
         className={'btn_fast_choose_calc'}
         onClick={() => {
            setValue('startPayment', String(Number(watch('realEstatePrice')) * (num / 100)))
         }}
      >
         {num + ' %'}
      </button>
   )
}

function ButtonFastChooseYears({ num, setValue }) {

   return (
      <button
         className={'btn_fast_choose_calc'}
         onClick={() => {
            setValue('years', num)
         }}
      >
         {num + ' лет'}
      </button>
   )
}

export const FastChooseOnStartPayment = ({ setValue, watch }) => {

   return (
      <div className='btn_fast_choose_calc_container'>
         {[0, 10, 15, 20, 25, 30].map(num => (
            <ButtonFastChooseFirstPayment
               num={num}
               setValue={setValue}
               watch={watch}
               key={nanoid()}
            />
         ))}
      </div>
   )
}

export const FastChooseOnYears = ({ setValue }) => {


   return (
      <div className='btn_fast_choose_calc_container'>
         {[5, 10, 15, 20, 25].map(num => (
            <ButtonFastChooseYears
               num={num}
               setValue={setValue}
               key={nanoid()}
            />
         ))}
      </div>
   )
}

export const FastChooseOnParcents = ({ setValue }) => {


   return (
      <div className='btn_fast_choose_calc_container'>
         {[4.5, 6, 7.5, 9.1, 10].map(num => (
            <ButtonFastChooseParcent
               num={num}
               setValue={setValue}
               key={nanoid()}
            />
         ))}
      </div>
   )
}

