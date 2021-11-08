import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Pagination2 } from '../Pagination'

export const HomePage = () => {
   const loggedIn = useSelector(state => state.auth.isAuth)
   return (
      loggedIn
         ? <div>
            <Pagination2 />
         </div>
         : (
            <div>
               <h2>You not authtorized</h2>
               <Link to='/register'>Войти или зарегистрироваться</Link>
            </div>
         )
   )
}
