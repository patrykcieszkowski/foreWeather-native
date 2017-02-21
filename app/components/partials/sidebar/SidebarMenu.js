import React from 'react'
import { AppRegistry, View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'
import Dimensions from 'Dimensions'

import SidebarMenuList from './list/SidebarMenuList'
import SidebarMenuSearch from './search/SidebarMenuSearch'
import CloseButton from '../assets/CloseButton'

export default class SidebarMenu extends React.Component
{
  viewSidebarContent()
  {
    let contentComponent = <SidebarMenuList
      locations={this.props.locations}
      weatherList={this.props.weatherList}
      toggleSearchView={this.props.toggleSearchView}
      settings={this.props.settings}
      removeLocation={this.props.removeLocation}
    />

    if (this.props.settings.sidebarSearchBool)
    {
      contentComponent = <SidebarMenuSearch
        settings={this.props.settings}
        locations={this.props.locations}
        toggleSearchView={this.props.toggleSearchView}
        setSearchCriteria={this.props.setSearchCriteria}
        addLocation={this.props.addLocation}
      />
    }

    return (
      <View style={styles.sidebar_wrapper} >
        {contentComponent}
      </View>
    )
  }

  render()
  {
    let containerStyleList = [styles.container]
    if (!this.props.settings.expandSidebarBool)
    {
      containerStyleList.push(styles.container_push_off)
    }

    return (
      <View style={containerStyleList} >
        <TouchableHighlight
          style={styles.offset_button_background}
          onPress={() => this.props.toggleSidebarView()}
        >
          <View>
            <CloseButton size={30} barWidth={3} />
          </View>
        </TouchableHighlight>
        {this.viewSidebarContent()}
      </View>
    )
  }
}

const deviceDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

let buttonSize = 40
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: deviceDimensions.width,
  },
  container_push_off: {
    left: deviceDimensions.width
  },
  offset_button_background: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexBasis: (deviceDimensions.width*0.2),
    flexGrow: 0,
    flexShrink: 0,
    paddingTop: 35,
    alignItems: 'center'
  },
  sidebar_wrapper: {
    backgroundColor: '#38529d',
    flexBasis: (deviceDimensions.width*0.8),
    flexGrow: 0,
    flexShrink: 0,
    paddingTop: 20,
    paddingBottom: 20
  },

})

AppRegistry.registerComponent('SidebarMenu', () => SidebarMenu)
