import React from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'
import moment from 'moment'

import WeatherIcon from '../assets/WeatherIcon'

export default class FooterWeatherIcon extends React.Component
{
  render()
  {
    let { day } = this.props
    let dayMoment = moment(day[0].dt_txt)

    return (
      <View style={styles.container}>
        <Text style={[styles.details_text]}>{dayMoment.format('dddd')}</Text>
        <WeatherIcon size={60} icon={day[0].weather[0].id} />
        <Text style={[styles.details_text, styles.details_text_temp]}>
          {Math.round(day[0].main.temp)}°
          {Math.round(day[day.length-1].main.temp)}°
        </Text>
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
