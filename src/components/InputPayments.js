import React from 'react'
import { Results } from '../components/Results'
import { FastChooseOnYears, FastChooseOnParcents } from './FastChoose'

export const InputPayments = ({ register, resultCredit, setValue }) => {

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
            <FastChooseOnYears
               setValue={setValue}
            />
            <div>
               <span>Процентная ставка</span>
               <input
                  type='number'
                  step={1}
                  min={0}
                  {...register('parcent')}
               />
            </div>
            <FastChooseOnParcents
               setValue={setValue}
            />
         </form>
         <Results results={resultCredit} />
      </div>
   )
}