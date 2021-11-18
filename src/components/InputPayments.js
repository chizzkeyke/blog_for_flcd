import React from 'react'
import { Results } from '../components/Results'
import { FastChooseOnYears, FastChooseOnParcents } from './FastChooseContainers'
import { Slider } from '@material-ui/core'

export const InputPayments = ({ register, resultCredit, setValue, watch }) => {

   return (
      <div className='inputs_credit'>
         <form className='inputs_credit_payments_realestate'>
            <div>
               <span>Ежемесячный платеж</span>
               <input
                  type='number'
                  step={100000}
                  min={0}
                  {...register('everyMouthPayment')}
               />
               <Slider
                  value={watch('everyMouthPayment')}
                  min={100000}
                  max={9000000}
                  onChange={(event, newValue) => {
                     setValue('everyMouthPayment', newValue)
                  }}
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
               <Slider
                  value={watch('startPayment')}
                  min={100000}
                  max={9000000}
                  onChange={(event, newValue) => {
                     setValue('startPayment', newValue)
                  }}
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
               <Slider
                  value={watch('years')}
                  min={1}
                  max={40}
                  onChange={(event, newValue) => {
                     setValue('years', newValue)
                  }}
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
               <Slider
                  value={watch('parcent')}
                  min={1}
                  max={40}
                  onChange={(event, newValue) => {
                     setValue('parcent', newValue)
                  }}
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