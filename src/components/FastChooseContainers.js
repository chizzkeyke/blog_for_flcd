import React from 'react'
import { nanoid } from 'nanoid'
import { ButtonFastChooseFirstPayment, ButtonFastChooseParcent, ButtonFastChooseYears } from './ButtonsFastChoose'

export const FastChooseOnStartPayment = ({ setValue, watch }) => {

   return (
      <div className='btn_fast_choose_calc_container'>
         {[0, 10, 15, 20, 25, 30].map((num, index) => (
            <ButtonFastChooseFirstPayment
               id={num + index * 2}
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
         {[5, 10, 15, 20, 25].map((num, index) => (
            <ButtonFastChooseYears
               num={num}
               id={num + index}
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
         {[4.5, 6, 7.5, 9.1, 10].map((num, index) => (
            <ButtonFastChooseParcent
               num={num}
               id={num + index}
               setValue={setValue}
               key={nanoid()}
            />
         ))}
      </div>
   )
}

