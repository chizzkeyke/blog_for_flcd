import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomePage = () => {
   const loggedIn = useSelector(state => state.auth.isAuth)
   return (
      loggedIn 
      ? <div>Welcome</div>
      : (
      <div>
         <h2>You not authtorized</h2>
         <Link to='/register'>Войти или зарегистрироваться</Link>
      </div>
      )
   )
}

export default HomePage