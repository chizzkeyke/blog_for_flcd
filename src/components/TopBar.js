import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions/auth'

const TopBar = () => {
   const dispatch = useDispatch()
   const loggedIn = useSelector(state => state.auth.isAuth)
   const history = useHistory()

   const exit = () => {
      dispatch(logout())
      history.push('/')
   }

   return (
      <nav>
         <div className="nav-wrapper">
            <NavLink to='/' className="brand-logo">Logo</NavLink>
            {
               loggedIn
                  ? (
                     <>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                           <li><NavLink to='/'>Posts</NavLink></li>
                           <li><NavLink to='/'>Posts</NavLink></li>
                           <li><NavLink to='/'>Posts</NavLink></li>
                           <li><button onClick={exit} className="waves-effect waves-light btn-large">Button</button></li>
                        </ul>
                     </>
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

export default TopBar