import React from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'

import Navigation from './partials/assets/Navigation'
import HomeHeader from './partials/home/HomeHeader'
import HomeFooter from './partials/home/HomeFooter'

export default class Home extends React.Component
{
  render()
  {
    return (
      <View style={styles.container} >
        <Navigation />
        <HomeHeader />
        <HomeFooter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#242735',
  },
})

AppRegistry.registerComponent('Home', () => Home)
