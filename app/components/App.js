import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators'
import Home from './Home'

import _ from 'lodash'
import moment from 'moment'

function mapStateToProps(state, params)
{
  let { weather, locations, settings } = state
  let currLocWeather
  let currLocDetails = locations.list.find((_loc) => _loc.id === settings.currentLocationId) || locations.list[0]
  if (weather.length && currLocDetails)
  {
    let goal = currLocDetails.details.coord
    currLocWeather = weather.reduce((prev, curr) => (
      (Math.abs(curr.city.coord.lon - goal.lon) < Math.abs(prev.city.coord.lon - goal.lon) ? curr : prev)
      && (Math.abs(curr.city.coord.lat - goal.lat) < Math.abs(prev.city.coord.lat - goal.lat) ? curr : prev))
    )
  }

  let newState = {
    ...state,
    currentLocationWeather: (currLocWeather) ? currLocWeather.list : [],
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
