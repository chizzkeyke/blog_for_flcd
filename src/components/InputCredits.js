import React from 'react'
import { Results } from '../components/Results'
import { FastChooseOnYears, FastChooseOnParcents } from './FastChoose'
import { Slider } from '@material-ui/core'

export const InputCredits = ({ register, resultCredit, setValue, watch }) => {
   return (
      <div className='inputs_credit'>
         <form>
            <div>
               <span>Сумма кредита</span>
               <input
                  type='number'
                  step={100000}
                  min={100000}
                  {...register('creditAmount')}
               />
               <Slider
                  value={watch('creditAmount')}
                  min={100000}
                  max={9900000}
                  onChange={(event, newValue) => {
                     setValue('creditAmount', newValue)
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