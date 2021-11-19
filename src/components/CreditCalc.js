import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getPercentages, getMonthlyPayment, getPayment } from '../utils/getParsents'
import { ButtonsCalc } from '../components/ButtonsCalc'
import { InputCredits } from './InputCredits'
import { InputPayments } from './InputPayments'
import { InputRealEstate } from './InputRealEstate'
import { ChartCredit } from './GraphicCredit'
import { dataForCharts } from '../utils/getDataForCharts'

export function CreditCalc() {
   const [showRealEstate, setShowRealEstate] = useState(true)
   const [showCredits, setShowCredits] = useState(false)
   const [showPayments, setShowPayments] = useState(false)
   const [activeBtn, setActiveBtn] = useState('')


   const { register, watch, setValue } = useForm({
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

      const creditAmount = Number((credit - startPayment).toFixed())
      const mouthPayment = getMonthlyPayment(creditAmount, years, parcent)
      const parcentAmount = getPercentages(creditAmount, mouthPayment, parcent, years)
      const creditPlusParcent = parcentAmount + creditAmount
      const requiredIncome = (mouthPayment * 1.6).toFixed()

      if (creditAmount < 500 || mouthPayment < 0 || parcentAmount < 0 || creditPlusParcent < 0) {
         return {
            credit: 500,
            parcent: 1,
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

      const mouthPayment = getMonthlyPayment(creditAmount, years, parcent)
      const parcentAmount = getPercentages(creditAmount, mouthPayment, parcent, years)
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

      const creditAmount = getPayment(mouthPayment, years, parcent)
      const parcentAmount = getPercentages(creditAmount, mouthPayment, parcent, years)
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
            <ButtonsCalc
               toggle={toggleLinks}
               showRealEstate={showRealEstate}
               showCredits={showCredits}
               showPayments={showPayments}
            />
            {showRealEstate && (
               <>
                  <InputRealEstate
                     register={register}
                     resultRealEstate={resultRealEstate()}
                     setValue={setValue}
                     watch={watch}
                     activeBtn={activeBtn}
                     setActiveBtn={setActiveBtn} />
                  <ChartCredit
                     data={dataForCharts(
                        Number(resultRealEstate().credit), 
                        Number(resultRealEstate().mouthPayment),
                        Number(watch('parcent')),
                        Number(watch('years')),
                        Number(watch('startPayment'))
                     )}
                  />
               </>
            )}
            {showCredits && (
               <>
                  <InputCredits
                     register={register}
                     resultCredit={resultCredit()}
                     setValue={setValue}
                     watch={watch}
                     activeBtn={activeBtn}
                     setActiveBtn={setActiveBtn} />
                  <ChartCredit 
                     data={dataForCharts(
                        Number(watch('creditAmount')), 
                        Number(resultCredit().mouthPayment),
                        Number(watch('parcent')),
                        Number(watch('years')),
                        0
                     )}
                  />
               </>
            )}
            {showPayments && (
               <>
                  <InputPayments
                     register={register}
                     resultCredit={resultPayment()}
                     setValue={setValue}
                     watch={watch}
                     activeBtn={activeBtn}
                     setActiveBtn={setActiveBtn} />
                  <ChartCredit 
                     data={dataForCharts(
                        Number(resultPayment().credit), 
                        Number(watch('everyMouthPayment')),
                        Number(watch('parcent')),
                        Number(watch('years')),
                        0
                     )}
                  />
               </>
            )}
         </div>
      </div>
   )
}
