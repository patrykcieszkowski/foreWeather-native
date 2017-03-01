import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import async from 'async'
import _ from 'lodash'
import moment from 'moment'

import store from './app/Store'
import App from './app/components/App'
import * as actionCreators from './app/actions/actionCreators'

const actionList = bindActionCreators(actionCreators, store.dispatch)

let prevState = _.cloneDeep(store.getState())
const reloadAPI = () => {
  let currState = _.cloneDeep(store.getState())
  async.forEachOf(currState.locations.list, (val, key, done) => {
    let currCoords = val.details.coord

    // finding the closest matching weather
    let _weather = currState.weather.reduce((prev, curr) => (
        (Math.abs(curr.city.coord.lon - currCoords.lon) < Math.abs(prev.city.coord.lon - currCoords.lon) ? curr : prev)
        && (Math.abs(curr.city.coord.lat - currCoords.lat) < Math.abs(prev.city.coord.lat - currCoords.lat) ? curr : prev)
      )
    )

    if (!_weather)
    {
      return actionList.getForecast(val.details.addr)
    }

    // difference between now and latest weather date
    let _timeDiff = moment(_weather.list[_weather.list.length-1]).diff(moment(), 'hours')
    if (_timeDiff < 1)
    {
      actionList.getForecast(val.details.addr)
    }
  })
}

reloadAPI()

/*
  TEMPORARY
  probably not the smartest idea. In order to keep data up to date, process going
  to loop every 5secs, to check recent data fetch time. This is due the fact
  there is no way to keep app running on the background. Idea is to get the data
  updated asap after lunching the app back.
*/
setInterval(() => {
  let currState = _.cloneDeep(store.getState())
  let _timeDiff = moment(currState.settings.recentWeatherUpdate).diff(moment(), 'hours')
  if (_timeDiff < 1)
  {
    reloadAPI()
    store.dispatch({type: 'UPDATE_RECENT_FETCH_DATE'})
  }
}, 5000) // loop every 5secs

export default class ForeWeather extends Component {
  render()
  {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

AppRegistry.registerComponent('ForeWeather', () => ForeWeather)
