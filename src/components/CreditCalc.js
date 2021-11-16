import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export function CreditCalc() {
   const [showRealEstate, setShowRealEstate] = useState(true)
   const [showCredits, setShowCredits] = useState(false)
   const [showPayments, setShowPayments] = useState(false)

   const { register, watch } = useForm({
      defaultValues: {
         realEstatePrice: '550000',
         creditAmount: '0',
         everyMouthPayment: '0',
         startPayment: 43,
         years: '1',
         parcent: '1',
      }
   })

   const toggleLinks = (name) => {
      if (name === 'realEstate') {
         setShowRealEstate(true)
         setShowCredits(false)
         setShowPayments(false)
      }
      else if (name === 'credits') {
         setShowRealEstate(false)
         setShowCredits(true)
         setShowPayments(false)
      }
      else {
         setShowRealEstate(false)
         setShowCredits(false)
         setShowPayments(true)
      }
   }

   const resultRealEstate = () => {
      const credit = Number(watch('realEstatePrice'))
      const startPayment = Number(watch('startPayment'))
      const years = Number(watch('years'))
      const parcent = Number(watch('parcent'))

      const creditAmount = (credit - startPayment).toFixed(2)
      const mouthPayment = (creditAmount * ((parcent / 100 / 12) / (1 - (1 - (parcent / 100 / 12)) ** ((years * 12))))).toFixed(2)
      const parcentAmount = ((mouthPayment * ((years * 12))) - creditAmount).toFixed(2)
      const creditPlusParcent = parcentAmount + creditAmount
      const requiredIncome = (mouthPayment * 1.6).toFixed(2)

      if (creditAmount < 0) {
         return {
            credit: 0,
            parcent: 0,
            creditPlusParcent: 0,
            requiredIncome: 0,
            mouthPayment: 0,
            realAmount: 0,
         }
      }

      return {
         credit: creditAmount,
         parcent: parcentAmount,
         creditPlusParcent: creditPlusParcent,
         requiredIncome: requiredIncome,
         mouthPayment: mouthPayment,
         realAmount: false,
      }
   }

   const resultCredit = () => {
      const creditAmount = Number(watch('creditAmount'))
      const years = Number(watch('years'))
      const parcent = Number(watch('parcent'))

      const mouthPayment = Math.round(creditAmount * ((parcent / 100 / 12) / (1 - (1 - (parcent / 100 / 12)) ** (Math.round(years * 12)))))
      const parcentAmount = Math.round((mouthPayment * (Math.round(years * 12))) - creditAmount)
      const requiredIncome = Math.round(mouthPayment * 1.6)
      const creditPlusParcent = parcentAmount + creditAmount

      return {
         credit: creditAmount,
         parcent: parcentAmount,
         creditPlusParcent: creditPlusParcent,
         requiredIncome: requiredIncome,
         mouthPayment,
         realAmount: false,
      }
   }

   const resultPayment = () => {
      const mouthPayment = Number(watch('everyMouthPayment'))
      const startPayment = Number(watch('startPayment'))
      const years = Number(watch('years'))
      const parcent = Number(watch('parcent'))

      const creditAmount = Math.round(mouthPayment / ((parcent / 100 / 12) / (1 - (1 - (parcent / 100 / 12)) ** (Math.round(years * 12)))))
      const parcentAmount = Math.round((mouthPayment * (Math.round(years * 12))) - creditAmount)
      const creditPlusParcent = creditAmount + parcentAmount
      const requiredIncome = Math.round(mouthPayment * 1.6)
      const paymentRealAmount = Math.round(creditAmount + startPayment)

      return {
         credit: creditAmount,
         parcent: parcentAmount,
         creditPlusParcent: creditPlusParcent,
         requiredIncome: requiredIncome,
         paymentRealAmount: paymentRealAmount,
         realAmount: true
      }
   }

   return (
      <div className='credit_calc'>
         <div className='credit_calc_inner'>
            <Buttons toggle={toggleLinks} />
            {showRealEstate && <InputRealEstate register={register} resultRealEstate={resultRealEstate()} />}
            {showCredits && <InputCredits register={register} resultCredit={resultCredit()} />}
            {showPayments && <InputPayments register={register} resultCredit={resultPayment()} />}
         </div>
      </div>
   )
}

const Buttons = ({ toggle }) => {
   return (
      <div className='toggle_btns'>
         <button onClick={() => toggle('realEstate')}>Недвижимость</button>
         <button onClick={() => toggle('credits')}>Кредит</button>
         <button onClick={() => toggle('payments')}>Платёж</button>
      </div>
   )
}


const InputRealEstate = ({ register, resultRealEstate }) => {

   return (
      <div className='inputs_credit'>
         <form>
            <div>
               <span>Стоимость недвижимости</span>
               <input
                  type='number'
                  step={100000}
                  min={0}
                  inputMode='numerics'
                  {...register('realEstatePrice')}
               />
            </div>
            <div>
               <span>Первоначальный взнос</span>
               <input
                  type='number'
                  step={100000}
                  min={0}
                  {...register('startPayment')}
               />
            </div>
            <div>
               <span>Срок кредита</span>
               <input
                  type='number'
                  step={1}
                  min={0}
                  {...register('years')}
               />
            </div>
            <div>
               <span>Процентная ставка</span>
               <input
                  type='number'
                  step={1}
                  min={0}
                  {...register('parcent')}
               />
            </div>
         </form>
         <Results results={resultRealEstate} />
      </div>
   )
}

const InputCredits = ({ register, resultCredit }) => {


   return (
      <div className='inputs_credit'>
         <form>
            <div>
               <span>Сумма кредита</span>
               <input
                  type='number'
                  step={100000}
                  min={0}
                  {...register('creditAmount')}
               />
            </div>
            <div>
               <span>Срок кредита</span>
               <input
                  type='number'
                  step={1}
                  min={0}
                  {...register('years')}
               />
            </div>
            <div>
               <span>Процентная ставка</span>
               <input
                  type='number'
                  step={1}
                  min={0}
                  {...register('parcent')}
               />
            </div>
         </form>
         <Results results={resultCredit} />
      </div>
   )
}

const InputPayments = ({ register, resultCredit }) => {

   return (
      <div className='inputs_credit'>
         <form>
            <div>
               <span>Ежемесячный платеж</span>
               <input
                  type='number'
                  step={100000}
                  min={0}
                  {...register('everyMouthPayment')}
               />
            </div>
            <div>
               <span>Первоначальный взнос</span>
               <input
                  type='number'
                  step={100000}
                  min={0}
                  {...register('startPayment')}
               />
            </div>
            <div>
               <span>Срок кредита</span>
               <input
                  type='number'
                  step={1}
                  min={0}
                  {...register('years')}
               />
            </div>
            <div>
               <span>Процентная ставка</span>
               <input
                  type='number'
                  step={1}
                  min={0}
                  {...register('parcent')}
               />
            </div>
         </form>
         <Results results={resultCredit} />
      </div>
   )
}


const Results = ({ results }) => {
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

