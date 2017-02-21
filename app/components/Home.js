import React from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'
import Dimensions from 'Dimensions'

import TopNavigation from './partials/assets/TopNavigation'
import HomeHeader from './partials/home/HomeHeader'
import Footer from './partials/footer/Footer'
import SidebarMenu from './partials/sidebar/SidebarMenu'

export default class Home extends React.Component
{
  render()
  {
    let mainAppStyleList = [styles.main_app]
    if (this.props.settings.expandSidebarBool)
    {
      mainAppStyleList.push(styles.main_app_push)
    }

    return (
      <View style={styles.container} >
        <View style={mainAppStyleList} >
          <TopNavigation
            settings={this.props.settings}
            toggleSidebarView={this.props.toggleSidebarView}
            toggleFooterView={this.props.toggleFooterView}
          />
          <HomeHeader
            settings={this.props.settings}
            currentLocationWeather={this.props.currentLocationWeather}
            currentLocationDetails={this.props.currentLocationDetails}
          />
          <Footer
            settings={this.props.settings}
            currentLocationWeather={this.props.currentLocationWeather}
          />
        </View>
        <SidebarMenu
          settings={this.props.settings}
          locations={this.props.locations}
          weatherList={this.props.weather}
          toggleSearchView={this.props.toggleSearchView}
          toggleSidebarView={this.props.toggleSidebarView}
          setSearchCriteria={this.props.setSearchCriteria}
          removeLocation={this.props.removeLocation}
          addLocation={this.props.addLocation}
        />
      </View>
    )
  }
}

const deviceDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#242735',
  },
  main_app: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: deviceDimensions.width,
  },
  main_app_push: {
    left: -(deviceDimensions.width*0.8)
  }


})

AppRegistry.registerComponent('Home', () => Home)
