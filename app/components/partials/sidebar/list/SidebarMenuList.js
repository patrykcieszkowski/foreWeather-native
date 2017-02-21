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
                            .map((loc) => {
                              loc.weather = weatherList.find((_loc) => (
                                _loc.coord.lon.toFixed(1) === loc.details.geometry.lng.toFixed(1)
                                && _loc.coord.lat.toFixed(1) === loc.details.geometry.lat.toFixed(1) ))
                              return loc
                            }).filter((loc) => loc)

    return (
      <View style={styles.container}>
      <ScrollView style={styles.list}>
        {parsedLocations.map((loc) => <SidebarMenuListItem key={loc.id} details={loc} removeLocation={this.props.removeLocation} />)}
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
