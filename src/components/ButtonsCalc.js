import React from 'react'

export const ButtonsCalc = ({ toggle, showRealEstate, showCredits, showPayments }) => {


   return (
      <div className='toggle_btns'>
         <button
            className={showRealEstate ? 'btn_toggle_creditactive' : 'btn_toggle_credit'}
            onClick={() => toggle('realEstate')}
         >
            Недвижимость
         </button>
         <button
            className={showCredits ? 'btn_toggle_creditactive' : 'btn_toggle_credit'}
            onClick={() => toggle('credits')}
         >
            Кредит
         </button>
         <button
            className={showPayments ? 'btn_toggle_creditactive' : 'btn_toggle_credit'}
            onClick={() => toggle('payments')}
         >
            Платёж
         </button>
      </div>
   )
}