import React from 'react'

export const Results = ({ results }) => {
   const { credit, parcent, creditPlusParcent, requiredIncome, mouthPayment, realAmount, paymentRealAmount } = results

   return (
      <div className='result'>
         <div className='result_inner'>
            {realAmount ? <div>Стоимость недвижимости</div> : <div>Ваш ежемесячный платёж</div>}
            {realAmount ? <h4>{paymentRealAmount} ₽</h4> : <h4>{mouthPayment} ₽</h4>}
            <div>Кредит {credit} ₽</div>
            <div>Проценты {parcent} ₽</div>
            <div>Проценты + Кредит {creditPlusParcent} ₽</div>
            <div>Необходимый доход {requiredIncome} ₽</div>
         </div>
      </div>
   )
}