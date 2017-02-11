import React from 'react'
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default class Navigation extends React.Component
{
  render()
  {
    return (
      <View style={styles.header} >
        <TouchableHighlight
          style={[styles.btn, styles.btn_dark, styles.btn_rounded]}
          onPress={() => {return console.log('sa');}}
        >
          <Text style={styles.btn_text_dark}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => {return console.log('sa');}}
        >
          <View style={styles.btn_more}>
            <View style={styles.btn_more_bar} />
            <View style={styles.btn_more_bar} />
            <View style={styles.btn_more_bar} />
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

let buttonSize = 40
const styles = StyleSheet.create({
  header: {
    zIndex: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    // backgroundColor: 'pink',
    top: 20,
    left: 0,
    right: 0,
    height: 60,
  },
  btn: {
    height: Math.floor(buttonSize * 0.9),
    width: Math.floor(buttonSize * 0.9),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_more: {
    height: Math.floor(buttonSize * 0.5),
    width: Math.floor(buttonSize * 0.8),
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  btn_more_bar: {
    height: 3,
    width: Math.floor(buttonSize * 0.8),
    backgroundColor: '#38529d',
    borderRadius: 10
  },
  btn_rounded: {
    borderRadius: 50
  },
  btn_dark: {
    backgroundColor: '#181a21'
  },
  btn_light: {

  },
  btn_text: {

  },
  btn_text_dark: {
    color: '#38529d',
    fontSize: 24
  }
})

AppRegistry.registerComponent('Navigation', () => Navigation)
