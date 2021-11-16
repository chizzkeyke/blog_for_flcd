import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/auth/actions/actionsCreators'
import { Watch } from './Watch'

export const TopBar = () => {
   const dispatch = useDispatch()
   const loggedIn = useSelector(state => state.auth.isAuth)
   const history = useHistory()

   const exit = () => {
      dispatch(logout())
      setTimeout(() => {
         history.push('/login')
      }, 2000);
   }

   return (
      <nav>
         <div className="nav-wrapper">
            <NavLink to='/' className="brand-logo">Logo</NavLink>
            {
               loggedIn
                  ? (
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Watch /></li>
                        <li><NavLink to='/credit'>Credit</NavLink></li>
                        <li><NavLink to='/clocks_page'>Clocks</NavLink></li>
                        <li><NavLink to='/users'>Users</NavLink></li>
                        <li><NavLink to='/weather'>Weather</NavLink></li>
                        <li><button onClick={exit} className="waves-effect waves-light btn-large">LOGOUT</button></li>
                     </ul>
                  )
                  : (
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to='/register'>Register</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                     </ul>
                  )
            }
         </div>
      </nav>
   )
}
