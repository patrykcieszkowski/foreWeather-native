import React from 'react'
import { AppRegistry, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'

import SidebarMenuSearchListItem from './SidebarMenuSearchListItem'

export default class SidebarMenuSearchList extends React.Component
{
  render()
  {
    let { searchResult, addLocation, getForecast, toggleSearchView, toggleSidebarView } = this.props
    return (
      <ScrollView style={styles.container}>
        {searchResult.map((loc, i) => <SidebarMenuSearchListItem
                                        key={i}
                                        locationDetails={loc}
                                        addLocation={addLocation}
                                        getForecast={getForecast}
                                        toggleSearchView={toggleSearchView}
                                        toggleSidebarView={toggleSidebarView}
                                        /> )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
})

AppRegistry.registerComponent('SidebarMenuSearchList', () => SidebarMenuSearchList)
