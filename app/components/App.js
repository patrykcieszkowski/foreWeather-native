import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators'
import Home from './Home'

import _ from 'lodash'
import moment from 'moment'

function mapStateToProps(state, params)
{
  let currLocDetails = _.cloneDeep(state.locations.list).find((_loc) => _loc.id === state.settings.currentLocationId)
  let currLocWeather = _.cloneDeep(state.weather).find((_loc) => (
    _loc.coord.lon.toFixed(1) == currLocDetails.details.geometry.lng.toFixed(1)
    && _loc.coord.lat.toFixed(1) == currLocDetails.details.geometry.lat.toFixed(1) ))
    .list

  let newState = {
    ...state,
    currentLocationWeather: currLocWeather,
    currentLocationDetails: currLocDetails
  }

  return newState
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Home)

export default App
