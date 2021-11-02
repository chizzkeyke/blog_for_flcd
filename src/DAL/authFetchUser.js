import axios from 'axios'
import { startFetchUser, successAuthUser, errorAuthUser } from '../redux/actions/auth'

export const fetchUserData = (url, userData) => dispatch => {
   dispatch(startFetchUser())
   axios({
      method: 'POST',
      url: `https://reqres.in/api/${url}`,
      data: userData
   })
      .then(res => {
         localStorage.setItem('token', res.data.token)
         dispatch(successAuthUser(res.data))
      })
      .catch(err => {
         dispatch(errorAuthUser(err))
         console.log(err)
      })
}