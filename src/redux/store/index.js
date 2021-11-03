import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import authReducer from '../auth/reducers/auth'
import userReducer from '../users/reducers/users'

const rootsReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
})

const store = createStore(rootsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store