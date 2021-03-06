import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import { HomePage } from './components/pages/HomePage'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { TopBar } from './components/TopBar'
import { UserList } from './components/pages/UserList'
import { ProfileUser } from './components/pages/Profile'
import { Weather } from './components/pages/Weather'
import { ClocksPage } from './components/pages/ClocksPage'
import { CreditPage } from './components/pages/CreditPage'

export const App = () => {
   return (
      <BrowserRouter>
         <TopBar />
         <Switch>
            <Route path='/credit' component={CreditPage} />
            <Route path='/clocks_page' component={ClocksPage} />
            <Route path='/users/:id' component={ProfileUser} exact />
            <Route path='/users?page=:id' component={UserList} />
            <Route path='/users' component={UserList} />
            <Route path='/weather' component={Weather} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/' component={HomePage} exact />
         </Switch>
      </BrowserRouter>
   )
}

