import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserData } from '../DAL/authFetchUser'

const Login = () => {
   const titleText = 'Login'
   const linkText = "You don't have account ?"
   const urlLink = '/register'
   const urlAPI = 'login'

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const loggedIn = useSelector(state => state.auth.isAuth)
   const loading = useSelector(state => state.auth.loading)
   const dispatch = useDispatch()

   const userData = {
      email: email,
      password: password
   }

   const handleSubmit = event => {
      event.preventDefault()
      dispatch(fetchUserData(urlAPI, userData))
   }

   if (loggedIn) {
      return <Redirect to='/' />
   }

   return (
      loading
         ? <div><h1>LOADING....</h1></div>
         : (
            <div className='auth-container'>
               <h2>{titleText}</h2>
               <form onSubmit={handleSubmit}>
                  <span>Email</span>
                  <input
                     type='email'
                     placeholder='email...'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
                  <span>Password</span>
                  <input
                     type='password'
                     placeholder='password...'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  />
                  <button type='submit'>Submit</button>
               </form>
               <Link to={urlLink}>{linkText}</Link>
            </div>
         )

   )
}

export default Login