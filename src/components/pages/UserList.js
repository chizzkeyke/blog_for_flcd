import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getListUser } from '../../DAL/getListUsers'
import { Redirect } from 'react-router-dom'

import { Table, Avatar } from 'antd'
import { Pagination } from '../Pagination'

export const UserList = () => {
   const loggedIn = useSelector(state => state.auth.isAuth)
   const users = useSelector(state => state.user.users?.data)
   const loading = useSelector(state => state.auth.loading)
   const totalPages = useSelector(state => state.user.users.total_pages)


   const dispatch = useDispatch()

   useEffect(() => {
      if (!loggedIn) {
         return
      }
      dispatch(getListUser())
   }, [dispatch, loggedIn])

   if (!loggedIn) {
      return <Redirect to='/' />
   }

   const returnTableUserList = () => {
      const columns = [
         {
            title: 'Photo',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar) => (<Avatar src={`${avatar}`} />),
         },
         {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
         },
         {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
         },
         {
            title: 'FirstName',
            dataIndex: 'first_name',
            key: 'first_name',
         },
         {
            title: 'LastName',
            dataIndex: 'last_name',
            key: 'last_name',
         },
      ]

      return (
         <>
            <Table dataSource={users} columns={columns} pagination={false} />
            <Pagination totalPages={totalPages} />
         </>
      )
   }

   return (
      <div>
         {
            loading
               ? (<h1>Loading....</h1>)
               : returnTableUserList()
         }
      </div>
   )
}