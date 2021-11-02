import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchUserData } from '../DAL/authFetchUser'
import { useDispatch } from 'react-redux'

const Register = () => {
   const { register, handleSubmit } = useForm()
   const loggedIn = useSelector(state => state.auth.isAuth)
   const dispatch = useDispatch()

   const onSubmit = ({ email, password }) => {
      const userData = {
         email,
         password
      }
      dispatch(fetchUserData('register', userData))
   }

   if (loggedIn) {
      return <Redirect to='/' />
   }

   return (
      <div>
         <h2>Регистрация</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               <span htmlFor='email'>Email</span>
               <input type='email' id='login' name='email' {...register('email')} />
            </div>
            <div>
               <span htmlFor='password'>Password</span>
               <input type='password' id='password' name='password' {...register('password')} />
            </div>
            <div>
               <button type='submit'>Submit</button>
            </div>
         </form>
      </div>
   )
}

export default Register