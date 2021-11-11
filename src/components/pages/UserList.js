import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getListUser } from '../../DAL/getListUsers'
import { Redirect } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useHistory } from 'react-router-dom'
import { Table, Avatar } from 'antd'
import { Pagination } from '../Pagination'

import '../../App.css'

export const UserList = props => {
   const loggedIn = useSelector(state => state.auth.isAuth)
   const users = useSelector(state => state.user.users?.data)
   const loading = useSelector(state => state.auth.loading)
   const totalPages = useSelector(state => state.user.users.total_pages)
   const dispatch = useDispatch()
   const history = useHistory()

   const paramProps = props.location.search === ''
   const currentPage = paramProps ? 1 : Number(props.location.search.substr(6))

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
            // render: id => <Link to={`/users/${id}`}>{id}</Link>
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

      let newUsersData

      const createNewUserData = () => {
         newUsersData = users?.map((user) => {
            return {
               avatar: user.avatar,
               id: user.id,
               email: user.email,
               first_name: user.first_name,
               last_name: user.last_name,
               key: nanoid()
            }
         })
      }

      createNewUserData()
      console.log(<Table />)

      return (
         <>
            <Table
               dataSource={newUsersData}
               columns={columns}
               onRow={(record) => {
                  return {
                     onClick: () => history.push(`/users/${record.id}`)
                  }
               }}
               pagination={false}
            />
            <Pagination totalPages={totalPages} current={currentPage} />
         </>
      )
   }

   return (
      <>
         {
            loading
               ? <h1>Loading ...</h1>
               : returnTableUserList()
         }
      </>
   )
}