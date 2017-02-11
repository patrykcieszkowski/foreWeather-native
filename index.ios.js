import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Home from './app/components/Home'

export default class ForeWeather extends Component {
  render()
  {
    return (
      <View style={styles.wrapper}>
        <Home />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

AppRegistry.registerComponent('ForeWeather', () => ForeWeather)
