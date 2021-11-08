import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage } from './components/pages/HomePage'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { TopBar } from './components/TopBar'
import { UserList } from './components/pages/UserList'
import './App.css'

export const App = () => {
   return (
      <BrowserRouter>
         <TopBar />
         <Switch>
            <Route path='/users?page=:id' component={UserList}/>
            <Route path='/users' component={UserList} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/' component={HomePage} exact />
         </Switch>
      </BrowserRouter>
   )
}

