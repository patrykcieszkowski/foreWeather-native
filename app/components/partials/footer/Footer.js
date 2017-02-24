import React from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import _ from 'lodash'

import FooterDays from './FooterDays'
import FooterScrollable from './FooterScrollable'

export default class Footer extends React.Component
{
  viewFooter()
  {
    let { currentLocationWeather } = this.props
    let nextDaysWeather = _(_.cloneDeep(currentLocationWeather))
                            .sortBy((obj) => moment(obj.dt_txt).unix())
                            .filter((obj) => moment(obj.dt_txt).isBetween(moment(), moment().add(2, 'days').hours(23)))
                            .groupBy(obj => moment(obj.dt_txt).format('DD.MM'))
                            .value()

    if (this.props.settings.expandFooterBool)
    {
      return (
        <FooterScrollable
          nextDaysWeather={nextDaysWeather}
        />
      )
    }

    return (
      <FooterDays
        nextDaysWeather={nextDaysWeather}
      />
    )
  }

  render()
  {
    let classList = [styles.container]

    if (this.props.settings.expandFooterBool)
    {
      classList.push(styles.scrollable)
    }

    return (
      <View style={classList}>
        {this.viewFooter()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38529d',
    overflow: 'hidden',
    flexBasis: 150,
    flexGrow: 0
  },
  scrollable: {
    flexBasis: 0,
    flex: 1,
    flexGrow: 1
  }
})

AppRegistry.registerComponent('Footer', () => HomeFooter)
