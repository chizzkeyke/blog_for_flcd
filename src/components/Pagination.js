import React from 'react'
import { useDispatch } from 'react-redux'
import { getListUser } from '../DAL/getListUsers'
import { counterForArray } from '../utils/counterForArray'

const ButtonPagination = ({ index }) => {
   const dispatch = useDispatch()

   return (
      <>
         <button
            className='btn-pagination'
            onClick={() => dispatch(getListUser(index))}
         >
            {index}
         </button>
      </>
   )
}

export const Pagination = ({totalPages}) => {
   const pages = counterForArray(totalPages)
   
   return (
      <div className='block-pagination'>
         {pages.map((num, index) => (
            <ButtonPagination index={num} key={index}>{num}</ButtonPagination>
         ))}
      </div>
   )
}