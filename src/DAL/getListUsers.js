import axios from 'axios'
import { startFetchUsers, successFetchUsers, errorFetchUsers } from '../redux/users/actions/actionCreators'

export const getListUser = (id = 1) => dispatch => {
   dispatch(startFetchUsers())
   axios({
      method: 'GET',
      url: `https://reqres.in/api/users?page=${id}`
   })
      .then(res => {
         dispatch(successFetchUsers(res.data))
         console.log(res.status)
      })
      .catch(err => {
         dispatch(errorFetchUsers(err))
         console.log(err)
      })
}