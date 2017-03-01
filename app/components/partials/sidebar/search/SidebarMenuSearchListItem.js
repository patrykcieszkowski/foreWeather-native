import React from 'react'
import { AppRegistry, View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'

export default class SidebarMenuSearchListItem extends React.Component
{
  onPressEvent(e)
  {
    let { addLocation, locationDetails, getForecast, toggleSearchView, toggleSidebarView } = this.props
    addLocation(locationDetails.id)
    getForecast(locationDetails.details.addr)
    toggleSearchView()
    // toggleSidebarView()
  }

  render()
  {
    let { locationDetails } = this.props

    return (
      <TouchableHighlight
        style={styles.container}
        onPress={this.onPressEvent.bind(this)}
      >
        <View style={styles.location_wrapper}>
          <Text style={[styles.location_city, styles.location_text, styles.location_text_bold]}>
            {locationDetails.details.city.long_name}
          </Text>
          <Text style={[styles.location_state, styles.location_text, styles.location_text_bold]}>
            {locationDetails.details.state.long_name}, {locationDetails.details.country.short_name}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginLeft: 0,
    marginRight: 0
  },
  location_wrapper: {
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#4b6cce'
  },
  location_text: {
    fontFamily: 'Raleway',
    backgroundColor: 'transparent',
    color: '#fff'
  },
  location_text_bold: {
    fontWeight: '600'
  },
  location_city: {
    fontSize: 18
  }
})

AppRegistry.registerComponent('SidebarMenuSearchListItem', () => SidebarMenuSearchListItem)
