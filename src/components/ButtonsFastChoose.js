import React, { useContext } from 'react'
import { ActiveButtonContext } from '../contexts/activeButton'

export function ButtonFastChooseFirstPayment({ num, setValue, watch, id }) {
   const [activeBtn, setActiveBtn] = useContext(ActiveButtonContext)

   return (
      <button
         id={id}
         className={String(id) === String(activeBtn) ? 'btn_fast_choose_calcactive' : 'btn_fast_choose_calc'}
         onClick={(e) => {
            setValue('startPayment', Number(Math.round((watch('realEstatePrice')) * (num / 100))))
            setActiveBtn(String(id))
         }}
      >
         {num + ' %'}
      </button>
   )
}

export function ButtonFastChooseParcent({ num, setValue, id, }) {
   const [activeBtn, setActiveBtn] = useContext(ActiveButtonContext)

   return (
      <button
         id={id}
         className={String(id) === String(activeBtn) ? 'btn_fast_choose_calcactive' : 'btn_fast_choose_calc'}
         onClick={(e) => {
            setValue('parcent', num)
            setActiveBtn(String(id))
         }}
      >
         {num + ' %'}
      </button>
   )
}

export function ButtonFastChooseYears({ num, setValue, id}) {
   const [activeBtn, setActiveBtn] = useContext(ActiveButtonContext)

   return (
      <button
         id={id}
         className={String(id) === String(activeBtn) ? 'btn_fast_choose_calcactive' : 'btn_fast_choose_calc'}
         onClick={(e) => {
            setValue('years', num)
            setActiveBtn(String(id))
         }}
      >
         {num + ' лет'}
      </button>
   )
}