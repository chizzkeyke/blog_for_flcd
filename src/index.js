import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import TopBar from './components/TopBar'
import './index.css'

const App = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <TopBar />
            <Switch>
               <Route path='/' component={HomePage} exact />
               <Route path='/register' component={Register} />
               <Route path='/login' component={Login} />
            </Switch>
         </BrowserRouter>
      </Provider>
   )
}

render(<App />, document.getElementById('root'))