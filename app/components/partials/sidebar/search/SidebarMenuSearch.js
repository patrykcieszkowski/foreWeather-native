import React from 'react'
import { AppRegistry, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'

import SidebarMenuSearchList from './SidebarMenuSearchList'
import CloseButton from '../../assets/CloseButton'

export default class SidebarMenuSearch extends React.Component
{
  onSubmitEditing()
  {
    let { searchLocation, locations } = this.props
    searchLocation(locations.search.criteria)
  }

  onCloseButtonClick(e)
  {
    let { criteria } = this.props.locations.search
    if (criteria.length < 1)
    {
      return this.props.toggleSearchView()
    }

    return this.props.setSearchCriteria('')
  }

  render()
  {
    return (
      <View style={styles.container}>
        <View style={styles.search_bar_wrapper}>
          <TextInput
            style={styles.search_bar}
            value={this.props.locations.search.criteria}
            onChangeText={(value) => this.props.setSearchCriteria(value)}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
            ref="search_bar"
          />
          <View style={styles.close_btn_wrapper}>
            <CloseButton
              wrapperSize={40}
              size={20}
              barWidth={2}
              onClick={this.onCloseButtonClick.bind(this)}
            />
          </View>
        </View>
        <SidebarMenuSearchList
          searchResult={this.props.locations.search.result}
          addLocation={this.props.addLocation}
          getForecast={this.props.getForecast}
          toggleSearchView={this.props.toggleSearchView}
          toggleSidebarView={this.props.toggleSidebarView}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  search_bar_wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#4b6cce'
  },
  search_bar: {
    height: 40,
    color: '#fff'
  },
  close_btn_wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 10,
    width: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

AppRegistry.registerComponent('SidebarMenuSearch', () => SidebarMenuSearch)
