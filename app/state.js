// http://api.openweathermap.org/data/2.5/forecast?q=hatfield&appid=fe440c8c644813a039162525b2582da0&unit=Celsius
export const settings = {
  unit: '', // Celsius Kalvin
  expandFooterBool: false,
  expandSidebarBool: false,
  sidebarSearchBool: false,
  currentLocationId: 1231,
  recentWeatherUpdate: -1 // date unix
}
export const locations = {
  list: [{
    id: 1231,
    details: {
      addr: "Stevenage,UK",
      city: {
        "long_name": "Stevenage",
        "short_name": "Stevenage",
      },
      state: {
        "long_name": "Hertfordshire",
        "short_name": "Hertfordshire",
      },
      country: {
        "long_name": "United Kingdom",
        "short_name": "GB",
      },
      coord: {
        lat: 51.903761,
        lon: -0.196612
      }
    }
  }],
  search: {
    criteria: '',
    status: 'success',
    result: []
  }
}
export const weather = [{
  "city": {
    "id": 2636940,
    "name": "Stevenage",
    "coord": {
      "lat": 51.9022,
      "lon": -0.2026
    },
    "country": "GB"
  },
  list: [{
      "dt": 1487710800,
      "main": {
        "temp": 283.89,
        "temp_min": 283.89,
        "temp_max": 284.491,
        "pressure": 1017.41,
        "sea_level": 1024.95,
        "grnd_level": 1017.41,
        "humidity": 81,
        "temp_kf": -0.6
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 7.9,
        "deg": 254.501
      },
      "rain": {
        "3h": 0.01
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-21 21:00:00"
    },
    {
      "dt": 1487721600,
      "main": {
        "temp": 284.06,
        "temp_min": 284.06,
        "temp_max": 284.459,
        "pressure": 1016.02,
        "sea_level": 1023.65,
        "grnd_level": 1016.02,
        "humidity": 81,
        "temp_kf": -0.4
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 7.86,
        "deg": 255.005
      },
      "rain": {
        "3h": 0.11
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-22 00:00:00"
    },
    {
      "dt": 1487732400,
      "main": {
        "temp": 284.31,
        "temp_min": 284.31,
        "temp_max": 284.507,
        "pressure": 1014.5,
        "sea_level": 1022.05,
        "grnd_level": 1014.5,
        "humidity": 82,
        "temp_kf": -0.2
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 8.51,
        "deg": 257.001
      },
      "rain": {
        "3h": 0.19
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-22 03:00:00"
    },
    {
      "dt": 1487743200,
      "main": {
        "temp": 284.289,
        "temp_min": 284.289,
        "temp_max": 284.289,
        "pressure": 1013.49,
        "sea_level": 1021.04,
        "grnd_level": 1013.49,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 8.36,
        "deg": 260.008
      },
      "rain": {
        "3h": 0.145
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-22 06:00:00"
    },
    {
      "dt": 1487754000,
      "main": {
        "temp": 284.74,
        "temp_min": 284.74,
        "temp_max": 284.74,
        "pressure": 1013.69,
        "sea_level": 1021.16,
        "grnd_level": 1013.69,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 8.41,
        "deg": 262.501
      },
      "rain": {
        "3h": 0.11
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-22 09:00:00"
    },
    {
      "dt": 1487764800,
      "main": {
        "temp": 285.461,
        "temp_min": 285.461,
        "temp_max": 285.461,
        "pressure": 1013.53,
        "sea_level": 1021.08,
        "grnd_level": 1013.53,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 8.26,
        "deg": 265.5
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-22 12:00:00"
    },
    {
      "dt": 1487775600,
      "main": {
        "temp": 285.51,
        "temp_min": 285.51,
        "temp_max": 285.51,
        "pressure": 1012.71,
        "sea_level": 1020.21,
        "grnd_level": 1012.71,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 7.82,
        "deg": 264.5
      },
      "rain": {
        "3h": 0.065
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-22 15:00:00"
    },
    {
      "dt": 1487786400,
      "main": {
        "temp": 285.161,
        "temp_min": 285.161,
        "temp_max": 285.161,
        "pressure": 1012.3,
        "sea_level": 1019.72,
        "grnd_level": 1012.3,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 6.95,
        "deg": 258.003
      },
      "rain": {
        "3h": 0.145
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-22 18:00:00"
    },
    {
      "dt": 1487797200,
      "main": {
        "temp": 285.008,
        "temp_min": 285.008,
        "temp_max": 285.008,
        "pressure": 1010.8,
        "sea_level": 1018.26,
        "grnd_level": 1010.8,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 7.21,
        "deg": 248.503
      },
      "rain": {
        "3h": 0.225
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-22 21:00:00"
    },
    {
      "dt": 1487808000,
      "main": {
        "temp": 284.603,
        "temp_min": 284.603,
        "temp_max": 284.603,
        "pressure": 1008.68,
        "sea_level": 1016.12,
        "grnd_level": 1008.68,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 7.47,
        "deg": 244.502
      },
      "rain": {
        "3h": 0.21
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-23 00:00:00"
    },
    {
      "dt": 1487818800,
      "main": {
        "temp": 284.213,
        "temp_min": 284.213,
        "temp_max": 284.213,
        "pressure": 1005.06,
        "sea_level": 1012.51,
        "grnd_level": 1005.06,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 7.46,
        "deg": 238.001
      },
      "rain": {
        "3h": 0.29
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-23 03:00:00"
    },
    {
      "dt": 1487829600,
      "main": {
        "temp": 283.841,
        "temp_min": 283.841,
        "temp_max": 283.841,
        "pressure": 1000.36,
        "sea_level": 1007.87,
        "grnd_level": 1000.36,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 8.81,
        "deg": 233.011
      },
      "rain": {
        "3h": 0.16
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-23 06:00:00"
    },
    {
      "dt": 1487840400,
      "main": {
        "temp": 283.435,
        "temp_min": 283.435,
        "temp_max": 283.435,
        "pressure": 996.36,
        "sea_level": 1003.87,
        "grnd_level": 996.36,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 11.12,
        "deg": 245.502
      },
      "rain": {
        "3h": 1.255
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-23 09:00:00"
    },
    {
      "dt": 1487851200,
      "main": {
        "temp": 282.081,
        "temp_min": 282.081,
        "temp_max": 282.081,
        "pressure": 1000.08,
        "sea_level": 1007.56,
        "grnd_level": 1000.08,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 11.41,
        "deg": 281.5
      },
      "rain": {
        "3h": 0.01
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-23 12:00:00"
    },
    {
      "dt": 1487862000,
      "main": {
        "temp": 281.355,
        "temp_min": 281.355,
        "temp_max": 281.355,
        "pressure": 1004.9,
        "sea_level": 1012.43,
        "grnd_level": 1004.9,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 8.82,
        "deg": 296.003
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-23 15:00:00"
    },
    {
      "dt": 1487872800,
      "main": {
        "temp": 280.31,
        "temp_min": 280.31,
        "temp_max": 280.31,
        "pressure": 1008.59,
        "sea_level": 1016.21,
        "grnd_level": 1008.59,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 7.46,
        "deg": 288.505
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-23 18:00:00"
    },
    {
      "dt": 1487883600,
      "main": {
        "temp": 280.109,
        "temp_min": 280.109,
        "temp_max": 280.109,
        "pressure": 1011.59,
        "sea_level": 1019.24,
        "grnd_level": 1011.59,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 6.71,
        "deg": 295.501
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-23 21:00:00"
    },
    {
      "dt": 1487894400,
      "main": {
        "temp": 279.499,
        "temp_min": 279.499,
        "temp_max": 279.499,
        "pressure": 1013.95,
        "sea_level": 1021.69,
        "grnd_level": 1013.95,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 6.26,
        "deg": 294.006
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-24 00:00:00"
    },
    {
      "dt": 1487905200,
      "main": {
        "temp": 278.76,
        "temp_min": 278.76,
        "temp_max": 278.76,
        "pressure": 1016,
        "sea_level": 1023.72,
        "grnd_level": 1016,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 5.77,
        "deg": 298
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-24 03:00:00"
    },
    {
      "dt": 1487916000,
      "main": {
        "temp": 278.806,
        "temp_min": 278.806,
        "temp_max": 278.806,
        "pressure": 1018.01,
        "sea_level": 1025.76,
        "grnd_level": 1018.01,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 5.56,
        "deg": 304
      },
      "rain": {
        "3h": 0.025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-24 06:00:00"
    },
    {
      "dt": 1487926800,
      "main": {
        "temp": 279.321,
        "temp_min": 279.321,
        "temp_max": 279.321,
        "pressure": 1020.34,
        "sea_level": 1027.94,
        "grnd_level": 1020.34,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.86,
        "deg": 301
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-24 09:00:00"
    },
    {
      "dt": 1487937600,
      "main": {
        "temp": 281.63,
        "temp_min": 281.63,
        "temp_max": 281.63,
        "pressure": 1021.52,
        "sea_level": 1029.18,
        "grnd_level": 1021.52,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02d"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.77,
        "deg": 294.007
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-24 12:00:00"
    },
    {
      "dt": 1487948400,
      "main": {
        "temp": 282.438,
        "temp_min": 282.438,
        "temp_max": 282.438,
        "pressure": 1021.19,
        "sea_level": 1028.86,
        "grnd_level": 1021.19,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02d"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.38,
        "deg": 270.501
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-24 15:00:00"
    },
    {
      "dt": 1487959200,
      "main": {
        "temp": 281.483,
        "temp_min": 281.483,
        "temp_max": 281.483,
        "pressure": 1020.86,
        "sea_level": 1028.57,
        "grnd_level": 1020.86,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 4.52,
        "deg": 247.501
      },
      "rain": {
        "3h": 0.05
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-24 18:00:00"
    },
    {
      "dt": 1487970000,
      "main": {
        "temp": 281.291,
        "temp_min": 281.291,
        "temp_max": 281.291,
        "pressure": 1019.56,
        "sea_level": 1027.28,
        "grnd_level": 1019.56,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 5.62,
        "deg": 228.501
      },
      "rain": {
        "3h": 0.03
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-24 21:00:00"
    },
    {
      "dt": 1487980800,
      "main": {
        "temp": 281.028,
        "temp_min": 281.028,
        "temp_max": 281.028,
        "pressure": 1017.61,
        "sea_level": 1025.38,
        "grnd_level": 1017.61,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 7.11,
        "deg": 234.002
      },
      "rain": {
        "3h": 2.06
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-25 00:00:00"
    },
    {
      "dt": 1487991600,
      "main": {
        "temp": 281.506,
        "temp_min": 281.506,
        "temp_max": 281.506,
        "pressure": 1014.5,
        "sea_level": 1022.12,
        "grnd_level": 1014.5,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [{
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 7.96,
        "deg": 237.002
      },
      "rain": {
        "3h": 3.185
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-25 03:00:00"
    },
    {
      "dt": 1488002400,
      "main": {
        "temp": 282.143,
        "temp_min": 282.143,
        "temp_max": 282.143,
        "pressure": 1012.06,
        "sea_level": 1019.63,
        "grnd_level": 1012.06,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 8.57,
        "deg": 238.002
      },
      "rain": {
        "3h": 1.17
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-25 06:00:00"
    },
    {
      "dt": 1488013200,
      "main": {
        "temp": 282.597,
        "temp_min": 282.597,
        "temp_max": 282.597,
        "pressure": 1010.22,
        "sea_level": 1017.83,
        "grnd_level": 1010.22,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 9.06,
        "deg": 237
      },
      "rain": {
        "3h": 0.47
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-25 09:00:00"
    },
    {
      "dt": 1488024000,
      "main": {
        "temp": 283.846,
        "temp_min": 283.846,
        "temp_max": 283.846,
        "pressure": 1008.71,
        "sea_level": 1016.25,
        "grnd_level": 1008.71,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 9.42,
        "deg": 243
      },
      "rain": {
        "3h": 1.33
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-25 12:00:00"
    },
    {
      "dt": 1488034800,
      "main": {
        "temp": 284.854,
        "temp_min": 284.854,
        "temp_max": 284.854,
        "pressure": 1008.69,
        "sea_level": 1016.23,
        "grnd_level": 1008.69,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 8.97,
        "deg": 260.006
      },
      "rain": {
        "3h": 1.22
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-25 15:00:00"
    },
    {
      "dt": 1488045600,
      "main": {
        "temp": 283.132,
        "temp_min": 283.132,
        "temp_max": 283.132,
        "pressure": 1012.17,
        "sea_level": 1019.66,
        "grnd_level": 1012.17,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.62,
        "deg": 282.502
      },
      "rain": {
        "3h": 0.04
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-25 18:00:00"
    },
    {
      "dt": 1488056400,
      "main": {
        "temp": 280.336,
        "temp_min": 280.336,
        "temp_max": 280.336,
        "pressure": 1015.32,
        "sea_level": 1023.01,
        "grnd_level": 1015.32,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.48,
        "deg": 278.502
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-25 21:00:00"
    },
    {
      "dt": 1488067200,
      "main": {
        "temp": 278.766,
        "temp_min": 278.766,
        "temp_max": 278.766,
        "pressure": 1016.93,
        "sea_level": 1024.62,
        "grnd_level": 1016.93,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.57,
        "deg": 256.503
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-26 00:00:00"
    },
    {
      "dt": 1488078000,
      "main": {
        "temp": 277.581,
        "temp_min": 277.581,
        "temp_max": 277.581,
        "pressure": 1016.41,
        "sea_level": 1024.24,
        "grnd_level": 1016.41,
        "humidity": 99,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.36,
        "deg": 241.001
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-26 03:00:00"
    },
    {
      "dt": 1488088800,
      "main": {
        "temp": 276.69,
        "temp_min": 276.69,
        "temp_max": 276.69,
        "pressure": 1015.48,
        "sea_level": 1023.29,
        "grnd_level": 1015.48,
        "humidity": 99,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.82,
        "deg": 228.005
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-26 06:00:00"
    },
    {
      "dt": 1488099600,
      "main": {
        "temp": 279.102,
        "temp_min": 279.102,
        "temp_max": 279.102,
        "pressure": 1013.88,
        "sea_level": 1021.6,
        "grnd_level": 1013.88,
        "humidity": 99,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 3.33,
        "deg": 204.502
      },
      "rain": {
        "3h": 0.02
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-26 09:00:00"
    },
    {
      "dt": 1488110400,
      "main": {
        "temp": 284.273,
        "temp_min": 284.273,
        "temp_max": 284.273,
        "pressure": 1011.72,
        "sea_level": 1019.28,
        "grnd_level": 1011.72,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 3.92,
        "deg": 211
      },
      "rain": {
        "3h": 0.28
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-26 12:00:00"
    },
    {
      "dt": 1488121200,
      "main": {
        "temp": 285.696,
        "temp_min": 285.696,
        "temp_max": 285.696,
        "pressure": 1010.06,
        "sea_level": 1017.57,
        "grnd_level": 1010.06,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 5.76,
        "deg": 244.002
      },
      "rain": {
        "3h": 0.21
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-26 15:00:00"
    },
    {
      "dt": 1488132000,
      "main": {
        "temp": 283.262,
        "temp_min": 283.262,
        "temp_max": 283.262,
        "pressure": 1010.43,
        "sea_level": 1017.94,
        "grnd_level": 1010.43,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 5.71,
        "deg": 256.003
      },
      "rain": {
        "3h": 0.14
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-02-26 18:00:00"
    }
  ]
}]

export default {
  settings,
  locations,
  weather
}
