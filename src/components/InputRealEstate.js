import React from 'react'
import { Results } from '../components/Results'
import { FastChooseOnParcents, FastChooseOnYears, FastChooseOnStartPayment } from './FastChooseContainers'
import { Slider } from '@material-ui/core'

export const InputRealEstate = ({ register, resultRealEstate, setValue, watch }) => {
   const { mouthPayment } = resultRealEstate

   return (
      <div className='inputs_credit'>
         <form className='inputs_credit_payments_realestate'>
            <div >
               <span>Стоимость недвижимости</span>
               <input
                  type='number'
                  step={10000}
                  min={500000}
                  inputMode='numerics'
                  {...register('realEstatePrice')}
               />
               <Slider
                  value={watch('realEstatePrice')}
                  min={500000}
                  max={90000000}
                  onChange={(event, newValue) => {
                     if (mouthPayment < 500) {
                        return
                     } else {
                        setValue('realEstatePrice', newValue)
                     }
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
                  min={500000}
                  max={Number(watch('realEstatePrice'))}
                  onChange={(event, newValue) => {
                     setValue('startPayment', newValue)
                  }}
               />
            </div>
            <FastChooseOnStartPayment
               setValue={setValue}
               watch={watch}
            />

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
         <Results results={resultRealEstate} />
      </div>
   )
}