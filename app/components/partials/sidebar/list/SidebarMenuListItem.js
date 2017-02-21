import React from 'react'
import { AppRegistry, View, Text, StyleSheet, TouchableHighlight } from 'react-native'

import WeatherIcon from '../../assets/WeatherIcon'
import CloseButton from '../../assets/CloseButton'

export default class SidebarMenuListItem extends React.Component
{
  render()
  {
    let { details, removeLocation } = this.props
    let locationDetails = details.details
    let weatherDetails = (details.weather) ? details.weather.list[0] : null

    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.weather_info_box_wrapper}>
          <View style={styles.weather_info_box}>
            <View style={styles.location_box}>
              <Text style={[
                  styles.weather_info_text,
                  styles.weather_info_text,
                  styles.location_city_text
                ]}>
                {locationDetails.city.long_name}
              </Text>
              <Text  style={[
                  styles.weather_info_text,
                  styles.weather_info_text,
                  styles.location_country_text
                ]}>
                {locationDetails.country.long_name}
              </Text>
            </View>
            <WeatherIcon size={60} icon={(weatherDetails) ? weatherDetails.weather[0].id : '??'} />
            <Text style={[styles.weather_info_text, styles.temp_text]}>
              {(weatherDetails) ? Math.round(weatherDetails.main.temp) : '??'}°
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.close_button_wrapper}>
          <CloseButton
            size={10}
            wrapperSize={30}
            barWidth={1}
            onClick={() => removeLocation(details.id)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  weather_info_box_wrapper: {
    flex: 1
  },
  weather_info_box: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  weather_info_text: {
    fontFamily: 'Raleway',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  location_box: {
    flexDirection: 'column',
    paddingLeft: 5
  },
  location_country_text: {
    fontSize: 14,
  },
  location_city_text: {
    fontSize: 18,
    fontWeight: '600'
  },
  temp_text: {
    fontSize: 28,
    fontWeight: '600'
  },
  close_button_wrapper: {
    flexBasis: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  close_button_text: {
    color: 'rgba(255, 255, 255, 0.8)'
  }
})

AppRegistry.registerComponent('SidebarMenuListItem', () => SidebarMenuListItem)
