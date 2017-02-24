import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import rootReducer from './reducers'
import defaultState from './state'

const middleware = applyMiddleware(promise(), ReduxThunk)
const store = createStore(rootReducer, defaultState, middleware)

export default store
