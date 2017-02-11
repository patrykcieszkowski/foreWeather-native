import React from 'react'
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native'

const humIcon = require('../../../img/icons/hum.svg')
const allowedIcons = [
  {name: 'cloud', image: require('../../../img/icons/cloud.png')},
  {name: 'flash', image: require('../../../img/icons/flash.png')},
  {name: 'meteor', image: require('../../../img/icons/meteor.png')},
  {name: 'night_cloud', image: require('../../../img/icons/night_cloud.png')},
  {name: 'night', image: require('../../../img/icons/night.png')},
  {name: 'snow_rain', image: require('../../../img/icons/snow_rain.png')},
  {name: 'snow', image: require('../../../img/icons/snow.png')},
  {name: 'sun_cloud', image: require('../../../img/icons/sun_cloud.png')},
  {name: 'sun', image: require('../../../img/icons/sun.png')},
  {name: 'tornado', image: require('../../../img/icons/tornado.png')}
]


export default class WeatherIcon extends React.Component
{
  constructor(props)
  {
    super(props)
    let iconSize = props.size || 110
    let iconDefault = allowedIcons[9]
    if (props.icon && allowedIcons.indexOf(props.icon) > -1)
    {
      iconDefault = allowedIcons.find((_icon) => _icon.name === props.icon)
    }

    this.state = {
      icon: iconDefault,
      size: iconSize
    }
  }

  render()
  {
    // let _iconPath = "../../../img/icons/"+this.state.icon+".png"

    return (
      <View style={styles.icon_wrapper}>
        <Image
          source={this.state.icon.image}
          style={[styles.icon, styles[this.state.icon.name]]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon_wrapper: {
    height: 110,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    // backgroundColor: 'pink',
    height: 110,
    width: 110,
  },
  cloud: {
    top: -2,
  },
  flash: {
    top: 6,
  },
  meteor: {
    top: 3,
  },
  night_cloud: {
    top: -2,
    left: 1
  },
  night: {
    top: 3,
  },
  snow_rain: {
    top: 5,
  },
  snow: {
    top: 5,
  },
  sun_cloud: {
    top: -5,
    left: 9,
  },
  sun: {
    top: 3,
  },
  tornado: {
    top: 3,
  }
})

// {name: 'cloud', image: require('../../../img/icons/cloud.png')},
// {name: 'flash', image: require('../../../img/icons/flash.png')},
// {name: 'meteor', image: require('../../../img/icons/meteor.png')},
// {name: 'night_cloud', image: require('../../../img/icons/night_cloud.png')},
// {name: 'night', image: require('../../../img/icons/night.png')},
// {name: 'snow_rain', image: require('../../../img/icons/snow_rain.png')},
// {name: 'snow', image: require('../../../img/icons/snow.png')},
// {name: 'sun_cloud', image: require('../../../img/icons/sun_cloud.png')},
// {name: 'sun', image: require('../../../img/icons/sun.png')},
// {name: 'tornado', image: require('../../../img/icons/tornado.png')}


AppRegistry.registerComponent('WeatherIcon', () => WeatherIcon)
