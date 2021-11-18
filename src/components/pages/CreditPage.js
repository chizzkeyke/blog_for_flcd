import React from 'react'
import { CreditCalc } from '../CreditCalc'
import { ActiveButtonProvider } from '../../contexts/activeButton'

export const CreditPage = () => {

   return (
      <div className='creditpage_container'>
         <ActiveButtonProvider>
            <CreditCalc />
         </ActiveButtonProvider>
      </div>
   )
}