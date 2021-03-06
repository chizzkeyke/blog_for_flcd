import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import './index.css'

render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
)
