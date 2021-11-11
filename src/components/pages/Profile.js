import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchProfileUser } from '../../DAL/fetchProfileUser'
import '../../App.css'

export const ProfileUser = props => {
   const idUser = props.match.params.id
   const isLoggedIn = useSelector(state => state.auth.isAuth)
   const dataUser = useSelector(state => state.profileUser.data)
   const loading = useSelector(state => state.profileUser.loading)
   const history = useHistory()
   const dispatch = useDispatch()

   useEffect(() => {
      if (!isLoggedIn) {
         return
      }

      dispatch(fetchProfileUser(idUser))
   }, [dispatch, idUser, isLoggedIn])

   return (
      <>
         {
            loading
               ? <h2>Loading ..</h2>
               : (<div className='profileuser'>
                  <div className='profileuser_inner'>
                     <div className='profileuser_inner__photo'>
                        <img src={dataUser.avatar} alt={'avatar'} />
                     </div>
                     <div className='profileuser_inner__text'>
                        <div>ID: {dataUser.id}</div>
                        <div>Email: {dataUser.email}</div>
                        <div>Name: {dataUser.first_name}</div>
                        <div>Last name: {dataUser.last_name}</div>
                     </div>
                     <div className='profileuser_inner__btn'>
                        <button onClick={() => history.goBack()}>Back</button>
                     </div>
                  </div>
               </div>
               )
         }
      </>
   )
}

