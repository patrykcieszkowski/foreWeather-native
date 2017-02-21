import React from 'react'
import { AppRegistry, StyleSheet, View, Text, ScrollView } from 'react-native'
import moment from 'moment'

import WeatherIcon from '../assets/WeatherIcon'

export default class FooterScrollableListItem extends React.Component
{
  render()
  {
    let { weather } = this.props

    let _moment = moment(weather.dt_txt)

    return (
      <View style={styles.container}>
        <View style={[styles.half, styles.half_first]}>
          <Text style={[styles.text, styles.time_text]}>
            {_moment.format('h')}-{_moment.add(3, 'hours').format('h a')}
          </Text>
        </View>
        <View style={[styles.half, styles.half_second]}>
          <WeatherIcon size={60} icon={weather.weather[0].id} />
          <Text style={[styles.text, styles.temperature_text]}>
            {Math.round(weather.main.temp)}°
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  half: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2
  },
  half_first: {
    justifyContent: 'flex-start',
    flex: 3
  },
  half_second: {
    justifyContent: 'space-around'
  },
  text: {
    fontFamily: 'Raleway',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  time_text: {
    fontSize: 14
  },
  temperature_text: {
    fontSize: 22,
    fontWeight: '600'
  }
})

AppRegistry.registerComponent('FooterScrollableListItem', () => FooterScrollableListItem)
