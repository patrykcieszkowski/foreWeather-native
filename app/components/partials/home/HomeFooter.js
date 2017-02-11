import React from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

export default class HomeFooter extends React.Component
{
  render()
  {
    return (
      <View style={styles.container}>
        <Text>dads</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38529d',
    flexBasis: 150
  }
})

AppRegistry.registerComponent('HomeFooter', () => HomeFooter)
