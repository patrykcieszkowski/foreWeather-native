import React from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

import FooterDays from './FooterDays'
import FooterScrollable from './FooterScrollable'

export default class Footer extends React.Component
{
  viewFooter()
  {
    // if (this.props.settings.expandView)
    // {
    //   return (
    //     <FooterScrollable />
    //   )
    // }

    return (
      <FooterDays />
    )
  }

  render()
  {
    let classList = [styles.container]

    // if (this.props.settings.expandView)
    // {
      // classList.push(styles.scrollable)
    // }

    return (
      <View style={classList}>
        {this.viewFooter()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38529d',
    overflow: 'hidden',
    flexBasis: 150,
  },
  scrollable: {
    flexBasis: 0,
    flex: 1
  }
})

AppRegistry.registerComponent('Footer', () => HomeFooter)
