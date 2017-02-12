import React from 'react'
import { AppRegistry, StyleSheet, View, Text, ScrollView } from 'react-native'

import FooterScrollableListItem from './FooterScrollableListItem'

export default class FooterScrollabl extends React.Component
{
  render()
  {
    return (
      <ScrollView style={styles.container}>
        <FooterScrollableListItem />
        <FooterScrollableListItem />
        <FooterScrollableListItem />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
})

AppRegistry.registerComponent('FooterScrollable', () => FooterScrollable)
