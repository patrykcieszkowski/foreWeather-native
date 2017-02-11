import React from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

export default class HomeHeaderBackground extends React.Component
{
  render()
  {
    return (
      <View style={styles.circle_background}>
        <View style={styles.circle_wrapper} >
          <View style={[styles.circle, styles.circle_1]} />
        </View>
        <View style={styles.circle_wrapper} >
          <View style={[styles.circle, styles.circle_2]} />
        </View>
        <View style={styles.circle_wrapper} >
          <View style={[styles.circle, styles.circle_3]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  circle_background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  circle_wrapper: {
    position: 'absolute',
    top: 150,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 2,
    borderColor: '#38529d'
  },
  circle_1: {
    height: 125,
    width: 125,
    borderRadius: 63,
  },
  circle_2: {
    height: 185,
    width: 185,
    borderRadius: 93,
    borderColor: 'rgba(56,82,157, 0.6)'
  },
  circle_3: {
    height: 270,
    width: 270,
    borderRadius: 135,
    borderColor: 'rgba(56,82,157, 0.3)'
  }

})

AppRegistry.registerComponent('HomeHeaderBackground', () => HomeHeaderBackground)
