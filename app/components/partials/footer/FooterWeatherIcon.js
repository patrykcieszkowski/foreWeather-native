import React from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'

import WeatherIcon from '../assets/WeatherIcon'

export default class FooterWeatherIcon extends React.Component
{
  render()
  {
    return (
      <View style={styles.container}>
        <Text style={[styles.details_text]}>Monday</Text>
        <WeatherIcon size={90}/>
        <Text style={[styles.details_text, styles.details_text_temp]}>16°26°</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  details_text: {
    fontFamily: 'Raleway',
    color: '#fff',
    backgroundColor: 'transparent'
  },
  details_text_temp: {
    fontWeight: '600',
    fontSize: 20
  }
})

AppRegistry.registerComponent('FooterWeatherIcon', () => FooterWeatherIcon)
