import React from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'

import FooterWeatherIcon from './FooterWeatherIcon'

export default class FooterDays extends React.Component
{
  render()
  {
    return (
      <View style={styles.container}>
        <FooterWeatherIcon />
        <FooterWeatherIcon />
        <FooterWeatherIcon />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

AppRegistry.registerComponent('FooterDays', () => FooterDays)
