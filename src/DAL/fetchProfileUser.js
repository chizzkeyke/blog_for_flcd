import { startFetchProfileUser, successFetchProfileUser, errorFetchProfileUser } from '../redux/user/actions/actionCreators'
import axios from 'axios'

export const fetchProfileUser = (id) => dispatch => {
   dispatch(startFetchProfileUser())
   axios({
      method: 'GET',
      url: `https://reqres.in/api/users/${id}`
   })
      .then(res => {
         console.log(res.status)
         dispatch(successFetchProfileUser(res.data.data))
      })
      .catch(err => {
         console.log(err)
         dispatch(errorFetchProfileUser(err))
      })
}