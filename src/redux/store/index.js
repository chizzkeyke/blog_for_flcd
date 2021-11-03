import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import authReducer from '../auth/reducers/auth'

const rootsReducer = combineReducers({
    auth: authReducer
})

const store = createStore(rootsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store