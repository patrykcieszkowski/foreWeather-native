import React from 'react'
import { AppRegistry, View, Text, StyleSheet, ScrollView } from 'react-native'
import _ from 'lodash'

import SidebarMenuListItem from './SidebarMenuListItem'
import SidebarButton from '../../assets/SidebarButton'

export default class SidebarMenuList extends React.Component
{
  render()
  {
    let { weatherList, locations } = this.props
    let parsedLocations = _.cloneDeep(locations.list)

    if (weatherList.length > 0)
    {
      parsedLocations = parsedLocations.map((loc) =>
      {
        let goalCoord = loc.details.coord;
        
        loc.weather = weatherList.reduce((prev, curr) => (
          (Math.abs(curr.city.coord.lon - goalCoord.lon) < Math.abs(prev.city.coord.lon - goalCoord.lon) ? curr : prev)
          && (Math.abs(curr.city.coord.lat - goalCoord.lat) < Math.abs(prev.city.coord.lat - goalCoord.lat) ? curr : prev))
        )
        return loc
      }).filter((loc) => loc)
    }

    return (
      <View style={styles.container}>
      <ScrollView style={styles.list}>
        {parsedLocations.map((loc) => <SidebarMenuListItem
                                        key={loc.id}
                                        details={loc}
                                        removeLocation={this.props.removeLocation}
                                        setCurrentLocation={this.props.setCurrentLocation}
                                        toggleSidebarView={this.props.toggleSidebarView}
                                      />)}
      </ScrollView>
      <SidebarButton
        text='Add new city'
        onClick={() => this.props.toggleSearchView()}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1
  }
})

AppRegistry.registerComponent('SidebarMenuList', () => SidebarMenuList)
