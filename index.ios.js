import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './app/Store'
import App from './app/components/App'

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
