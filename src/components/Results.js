import React from 'react'

export const Results = ({ results }) => {
   const { credit, parcent, creditPlusParcent, requiredIncome, mouthPayment, realAmount, paymentRealAmount } = results

   return (
      <div className='result_credit'>
         <div className='result_credit_inner'>
            {realAmount ? <h5 className='result_calc_title'>Стоимость недвижимости</h5> : <h5 className='result_calc_title'>Ваш ежемесячный платёж</h5>}
            {realAmount ? <h4 className='result_calc_title'>{paymentRealAmount} ₽</h4> : <h4 className='result_calc_title'>{mouthPayment} ₽</h4>}
            <div className='results_credit'>
               <div>Кредит</div>
               <div>{credit + '₽'}</div>
            </div>
            <div className='results_credit'>
               <div>Проценты</div>
               <div>{parcent + '₽'}</div>
            </div>
            <div className='results_credit'>
               <div>Проценты + Кредит</div>
               <div>{creditPlusParcent + '₽'}</div>
            </div>
            <div className='results_credit'>
               <div>Необходимый доход</div>
               <div>{requiredIncome + '₽'}</div>
            </div>
            <button className='btn_send_message_in_bank' onClick={() => console.log({...results})}>Подать заявку</button>
         </div>
      </div>
   )
}