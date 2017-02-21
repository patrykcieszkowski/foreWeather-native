import React from 'react'
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Dimensions from 'Dimensions'

export default class TopNavigation extends React.Component
{

  viewExpandButton()
  {
    let buttonStylesList = [styles.btn, styles.btn_rounded]
    let textStylesList = [styles.btn_text]
    let textStr = ''

    if (this.props.settings.expandFooterBool)
    {
      buttonStylesList.push(styles.btn_dark)
      textStylesList.push(styles.btn_text_dark)
      textStr = '-'
    }
    else
    {
      buttonStylesList.push(styles.btn_light)
      textStylesList.push(styles.btn_text_light)
      textStr = '+'
    }

    return (
      <TouchableHighlight
        style={buttonStylesList}
        onPress={() => this.props.toggleFooterView()}
      >
        <Text style={textStylesList}>
          {textStr}
        </Text>
      </TouchableHighlight>
    )
  }

  viewSidebarButton()
  {
    if (this.props.settings.expandSidebarBool)
    {
      return
    }

    return (
      <TouchableHighlight
        style={styles.btn}
        onPress={() => this.props.toggleSidebarView()}
      >
        <View style={styles.btn_more}>
          <View style={styles.btn_more_bar} />
          <View style={styles.btn_more_bar} />
          <View style={styles.btn_more_bar} />
        </View>
      </TouchableHighlight>
    )
  }

  render()
  {
    return (
      <View style={styles.header} >
        {this.viewExpandButton()}
        {this.viewSidebarButton()}
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
  header: {
    zIndex: 10,
    paddingLeft: (deviceDimensions.width*0.05),
    paddingRight: (deviceDimensions.width*0.05),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    height: 60,
  },
  btn: {
    height: Math.floor(buttonSize * 0.8),
    width: Math.floor(buttonSize * 0.8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_more: {
    height: Math.floor(buttonSize * 0.5),
    width: Math.floor(buttonSize * 0.8),
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    backgroundColor: '#38529d'
  },
  btn_text: {
    fontSize: 24,
  },
  btn_text_dark: {
    color: '#38529d',
  },
  btn_text_light: {
    color: '#fff'
  }
})

AppRegistry.registerComponent('TopNavigation', () => TopNavigation)
