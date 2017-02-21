import React from 'react'
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native'

import Dimensions from 'Dimensions'

export default class SidebarButton extends React.Component
{
  render()
  {
    return (
      <TouchableHighlight
        style={styles.sidebar_button}
        onPress={this.props.onClick.bind(this)}
        >
        <Text style={styles.sidebar_button_text}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    )
  }
}

const deviceDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const styles = StyleSheet.create({
  sidebar_button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: ((deviceDimensions.width*0.8)-20),
    backgroundColor: '#4b6cce',
    padding: 10,
    borderRadius: 1
  },
  sidebar_button_text: {
    color: '#fff'
  }
})

AppRegistry.registerComponent('SidebarButton', () => SidebarButton)
