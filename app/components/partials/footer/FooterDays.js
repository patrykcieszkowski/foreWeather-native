import React from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'
import moment from 'moment'
import _ from 'lodash'

import FooterDayWeatherIcon from './FooterDayWeatherIcon'

export default class FooterDays extends React.Component
{
  render()
  {
    return (
      <View style={styles.container}>
        {_.map(this.props.nextDaysWeather, (_day) => <FooterDayWeatherIcon key={_day[0].dt} day={_day} />)}
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
