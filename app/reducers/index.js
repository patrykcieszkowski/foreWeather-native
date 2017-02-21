import { combineReducers } from 'redux'

import settings from './settings'
import locations from './locations'
import weather from './weather'

const rootReducer = combineReducers({
  settings,
  locations,
  weather,
})

export default rootReducer
