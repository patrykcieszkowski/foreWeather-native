import React from 'react'
import { AppRegistry, StyleSheet, View, Text, ScrollView } from 'react-native'
import moment from 'moment'
import _ from 'lodash'

import FooterScrollableListItem from './FooterScrollableListItem'

export default class FooterScrollabl extends React.Component
{
  render()
  {
    let { nextDaysWeather } = this.props
    let currentDate = moment().format('DD.MM')

    return (
      <ScrollView style={styles.container}>
        {nextDaysWeather[currentDate].map((_weather) => <FooterScrollableListItem key={_weather.dt} weather={_weather} />)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
})

AppRegistry.registerComponent('FooterScrollable', () => FooterScrollable)
