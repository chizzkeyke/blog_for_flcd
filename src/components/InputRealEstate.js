import React from 'react'
import { Results } from '../components/Results'
import { FastChooseOnParcents, FastChooseOnYears, FastChooseOnStartPayment } from './FastChoose'

export const InputRealEstate = ({ register, resultRealEstate, setValue, watch }) => {
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
         <Results results={resultRealEstate} />
      </div>
   )
}