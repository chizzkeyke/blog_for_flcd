import React, { createContext, useState } from 'react'

export const ActiveButtonContext = createContext([{}, () => {}])

export const ActiveButtonProvider = ({ children }) => {
   const [activeBtnId, setActiveBtnId] = useState('')

   return (
      <ActiveButtonContext.Provider value={[activeBtnId, setActiveBtnId]}>
         {children}
      </ActiveButtonContext.Provider>
   )
}