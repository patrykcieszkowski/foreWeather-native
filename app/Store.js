import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducers'
import defaultState from './state'

const middleware = applyMiddleware(ReduxThunk)
const store = createStore(rootReducer, defaultState, middleware)

export default store
