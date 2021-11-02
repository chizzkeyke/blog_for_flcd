import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootsReducer from './reducers/rootsReducer'
import thunk from 'redux-thunk'

const store = createStore(rootsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store