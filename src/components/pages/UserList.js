import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getListUser } from '../../DAL/getListUsers'
import { getNumberFromString } from '../../utils/getNumbersFrooString'
import { Redirect } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { Table, Avatar } from 'antd'
import { Pagination2 } from '../Pagination'

export const UserList = props => {
   const loggedIn = useSelector(state => state.auth.isAuth)
   const users = useSelector(state => state.user.users?.data)
   const loading = useSelector(state => state.auth.loading)
   const totalPages = useSelector(state => state.user.users.total_pages)
   const dispatch = useDispatch()

   const paramProps = props.location.search === ''
   const currentPage = paramProps ? 1 : getNumberFromString(props.location.search)

   console.log(props)

   useEffect(() => {
      if (!loggedIn) {
         return
      }
      dispatch(getListUser(currentPage))
   }, [loggedIn, dispatch, currentPage])

   if (!loggedIn) {
      return <Redirect to='/' />
   }

   const returnTableUserList = () => {
      const columns = [
         {
            title: 'Photo',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar) => (<Avatar src={`${avatar}`}/>),
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
            <Pagination2 totalPages={totalPages} current={currentPage}/>
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