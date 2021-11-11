import React from 'react'
import { counterForArray } from '../utils/counterForArray'
import { useHistory } from 'react-router'

export const Pagination = ({ totalPages, current }) => {
   const pages = counterForArray(totalPages)
   const history = useHistory()

   const checkPrevNum = () => {
      const numberPage = current - 1
      if (pages[numberPage - 1] === undefined) {
         return false
      } else {
         return true
      }
   }

   const checkNextNum = () => {
      const numberPage = current - 1
      if (pages[numberPage + 1] === undefined) {
         return false
      } else {
         return true
      }
   }

   const goOnNextPage = () => {
      history.push(`/users?page=${++current}`)
   }

   const goOnPreviousPage = () => {
      if (--current === 1) {
         history.push(`/users`)
      } else {
         history.push(`/users?page=${current - 1}`)
      }

   }

   return (
      <div className='block-pagination'>
         {checkPrevNum() && <div onClick={goOnPreviousPage} className="waves-effect waves-light btn-large"><i className="material-icons left">arrow_back</i></div>}
         <div className="waves-effect waves-light btn-large">{current}</div>
         {checkNextNum() && <div onClick={goOnNextPage} className="waves-effect waves-light btn-large"><i className="material-icons right">arrow_forward</i></div>} 
      </div>
   )
}