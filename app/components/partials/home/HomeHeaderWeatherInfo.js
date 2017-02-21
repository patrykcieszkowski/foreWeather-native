import React from 'react'
import { AppRegistry, View, Text, StyleSheet, Image } from 'react-native'

import WeatherIcon from '../assets/WeatherIcon'

export default class HomeHeaderWeatherInfo extends React.Component
{

  viewWeatherDetails(recentWeatherDetails)
  {
    if (this.props.settings.expandFooterBool)
    {
      return
    }

    return (
      <View style={styles.weather_details_wrapper}>
        <View style={styles.weather_details_single}>
          <View></View>
          <Text style={[styles.weather_info_text, styles.weather_details_single_text]}>
            {recentWeatherDetails.main.humidity}%
          </Text>
        </View>
        <View style={styles.weather_details_single}>
          <View></View>
          <Text style={[styles.weather_info_text, styles.weather_details_single_text]}>
            {recentWeatherDetails.wind.speed}m/s
          </Text>
        </View>
      </View>
    )
  }

  render()
  {
    let { currentLocationDetails, currentLocationWeather } = this.props
    let locDetails = (currentLocationDetails) ? currentLocationDetails.details : null
    let recentWeatherDetails = (currentLocationWeather.length) ? currentLocationWeather[0] : null

    return (
      <View style={styles.container} >
        <View style={styles.weather_icon} >
          <WeatherIcon icon={(recentWeatherDetails) ? recentWeatherDetails.weather[0].id : null} />
        </View>
        <View style={styles.weather_info} >
          <Text style={[styles.weather_info_text, styles.temp_text]}>
            {(recentWeatherDetails) ? recentWeatherDetails.main.temp : '??'}°
          </Text>
          <View style={styles.location_wrapper}>
            <Text style={[styles.weather_info_text, styles.location_text, styles.location_text_bold]}>
              {(locDetails) ? locDetails.city.short_name : '??'}
            </Text>
            <Text style={[styles.weather_info_text, styles.location_text]}>
              , {(locDetails) ? locDetails.state.short_name : '??'}
            </Text>
          </View>
          {this.viewWeatherDetails(recentWeatherDetails)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 85,
    height: 300,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 10,
  },
  weather_info: {
    alignItems: 'center'
  },
  weather_details_wrapper: {
    padding: 10
  },
  location_wrapper: {
    flexDirection: 'row'
  },
  location_text: {
    fontSize: 16,
  },
  location_text_bold: {
    fontWeight: '800'
  },
  weather_info_text: {
    fontFamily: 'Raleway',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  weather_details_single_text: {
    padding: 5,
    paddingLeft: 0,
    paddingRight: 0
  },
  temp_text: {
    fontWeight: '600',
    fontSize: 48
  },
  weather_icon: {
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('HomeHeaderWeatherInfo', () => HomeHeaderWeatherInfo)
