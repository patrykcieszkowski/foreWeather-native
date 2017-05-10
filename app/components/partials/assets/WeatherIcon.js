import React from 'react'
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native'

const allowedIcons = [
  {name: 'cloud', image: require('../../../img/icons/cloud.png')},
  {name: 'flash', image: require('../../../img/icons/flash.png')},
  {name: 'meteor', image: require('../../../img/icons/meteor.png')},
  {name: 'night_cloud', image: require('../../../img/icons/night_cloud.png')},
  {name: 'night', image: require('../../../img/icons/night.png')},
  {name: 'snow_rain', image: require('../../../img/icons/snow_rain.png')},
  {name: 'rain', image: require('../../../img/icons/rain.png')},
  {name: 'snow', image: require('../../../img/icons/snow.png')},
  {name: 'sun_cloud', image: require('../../../img/icons/sun_cloud.png')},
  {name: 'sun', image: require('../../../img/icons/sun.png')},
  {name: 'tornado', image: require('../../../img/icons/tornado.png')}
]

let boxSize = 110
export default class WeatherIcon extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = {
      icon: allowedIcons[2],
      size: (!isNaN(Number(props.size))) ? props.size : boxSize
    }
  }

  componentWillReceiveProps()
  {
    const icon = allowedIcons.find((_icon) => _icon.name === iconIdToName(this.props.icon))

    this.setState({ icon })
  }

  render()
  {
    return (
      <View style={[styles.icon_wrapper, {height: this.state.size, width: this.state.size}]}>
        <Image
          source={this.state.icon.image}
          style={[styles.icon, styles[this.state.icon.name], {height: this.state.size, width: this.state.size}]}
        />
      </View>
    )
  }
}

const iconIdToName = function(_icon)
{
  switch(_icon)
  {
    case 801:
    case 802:
    case 803:
    case 905:
    {
      return 'sun_cloud'
    }
    case 721:
    case 711:
    case 701:
    case 741:
    case 802:
    case 804:
    case 903:
    {
      return 'cloud'
    }
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
    {
      return 'flash'
    }
    case 751:
    case 762:
    case 762:
    {
      return 'meteor'
    }
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 614:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
    case 906:
    {
      return 'snow'
    }
    case 615:
    case 616:
    {
      return 'snow_rain'
    }
    case 800:
    case 904:
    case 951:
    case 952:
    case 953:
    case 954:
    case 955:
    {
      return 'sun'
    }
    case 781:
    case 771:
    case 731:
    case 900:
    case 901:
    case 902:
    case 962:
    case 960:
    case 959:
    case 959:
    case 957:
    case 956:
    {
      return 'tornado'
    }
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
    {
      return 'rain'
    }
    default:
      return 'meteor'
  }
}

const styles = StyleSheet.create({
  icon_wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  cloud: { // 802, 721, 711, 701, 741, 804, 903
    top: -2,
  },
  flash: { // 200, 201, 202, 210, 211, 212, 221, 230, 231, 232
    top: 6,
  },
  meteor: { // 762, 761, 751,
    top: 3,
  },
  night_cloud: {
    top: -2,
    left: 1
  },
  night: {
    top: 3,
  },
  snow: { // 600-602, 611-616, 620-622, 906
    top: 5,
  },
  snow_rain: { // 615, 616
    top: 5,
  },
  sun_cloud: { // 801, 802, 803, 905,
    top: 0,
    left: 2,
  },
  sun: { // 800, 904, 951-955
    top: 3,
  },
  tornado: { // 781, 771, 731, 900, 901, 902, 962, 961, 960, 959, 958, 957, 956
    top: 3,
    left: -5
  },
  rain: { // 300-302, 310-314, 321, 500-504, 511, 520-522, 531
    top: 3
  }
})

AppRegistry.registerComponent('WeatherIcon', () => WeatherIcon)
