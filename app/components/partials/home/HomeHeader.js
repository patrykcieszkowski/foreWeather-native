import React from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

import HomeHeaderBackground from './HomeHeaderBackground'
import HomeHeaderWeatherInfo from './HomeHeaderWeatherInfo'

export default class HomeHeader extends React.Component
{
  render()
  {
    return (
      <View style={styles.container} >
        <HomeHeaderBackground />
        <HomeHeaderWeatherInfo
          settings={this.props.settings}
          currentLocationWeather={this.props.currentLocationWeather}
          currentLocationDetails={this.props.currentLocationDetails}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 25,
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})

AppRegistry.registerComponent('HomeHeader', () => HomeHeader)
