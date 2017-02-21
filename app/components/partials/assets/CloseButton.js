import React from 'react'
import { AppRegistry, View, StyleSheet, TouchableHighlight } from 'react-native'

export default class CloseButton extends React.Component
{
  constructor(props)
  {
    super(props)

    let boxSize = (!isNaN(Number(props.size))) ? props.size : 40
    let barWidth = (!isNaN(Number(props.barWidth))) ? Math.ceil(props.barWidth): Math.ceil(boxSize*0.02)
    let wrapperSize = (!isNaN(Number(props.wrapperSize))) ? Math.ceil(props.wrapperSize) : barWidth
    this.state = {
      size: boxSize,
      barWidth: barWidth,
      wrapperSize: wrapperSize
    }
  }

  render()
  {
    let barSizeStyle = { left: (this.state.size*0.4), height: (this.state.size*0.8), width: this.state.barWidth }
    let mainStyle = [styles.container, { height: this.state.wrapperSize, width: this.state.wrapperSize }]
    if (this.props.style)
    {
      mainStyle.push(this.props.style)
    }

    return (
      <TouchableHighlight style={mainStyle} onPress={this.props.onClick} >
        <View style={[
            styles.close_btn,
            { height: (this.state.size*0.8), width: (this.state.size*0.8) }
          ]}>
          <View style={[
              styles.close_btn_bar,
              styles.close_btn_bar_first,
              barSizeStyle,
            ]} />
          <View style={[
              styles.close_btn_bar,
              styles.close_btn_bar_second,
              barSizeStyle,
            ]} />
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  close_btn: {
    position: 'relative',
  },
  close_btn_bar: {
    position: 'absolute',
    top: 0,
    width: 3,
    borderRadius: 1,
    backgroundColor: '#fff'
  },
  close_btn_bar_first: {
    transform: [{rotate: '45deg'}]
  },
  close_btn_bar_second: {
    transform: [{rotate: '-45deg'}]
  },
})

AppRegistry.registerComponent('CloseButton', () => CloseButton)
