import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import authReducer from '../auth/reducers/auth'
import userReducer from '../users/reducers/users'
import profileUserReducer from '../user/reducers/user'
import weatherReducer from '../weather/reducers/weatherReucers'

const rootsReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    profileUser: profileUserReducer,
    weather: weatherReducer
})

const store = createStore(rootsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store