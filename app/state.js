// http://api.openweathermap.org/data/2.5/forecast?q=hatfield&appid=fe440c8c644813a039162525b2582da0&unit=Celsius
export const settings = {
  unit: '', // Celsius Kalvin
  expandFooterBool: false,
  expandSidebarBool: false,
  sidebarSearchBool: false,
  currentLocationId: 1231,
}
export const locations = {
  list: [{
    id: 1231,
    details: {
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
      geometry: {
        lat: 51.903761,
        lng: -0.196612
      }
    }
  }],
  search: {
    criteria: '',
    status: 'success',
    result: [{
      id: 993399,
      details: {
        city: {
          "long_name": "Hatfield",
          "short_name": "Hatfield",
        },
        state: {
          "long_name": "Hertfordshire",
          "short_name": "Hertfordshire",
        },
        country: {
          "long_name": "United Kingdom",
          "short_name": "GB",
        }
      },
    }]
  }
}
export const weather = [
  {
    coord: {
      lat: 51.902241,
      lon: -0.20256,
    },
    list: [
      {
        "dt": 1487278800,
        "main": {
          "temp": 7.53,
          "temp_min": 7.53,
          "temp_max": 7.53,
          "pressure": 1034.27,
          "sea_level": 1042.09,
          "grnd_level": 1034.27,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [{
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 3.45,
          "deg": 257.503
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-16 21:00:00"
      },
      {
        "dt": 1487289600,
        "main": {
          "temp": 6.86,
          "temp_min": 6.86,
          "temp_max": 6.86,
          "pressure": 1033.92,
          "sea_level": 1041.72,
          "grnd_level": 1033.92,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [{
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 3.41,
          "deg": 256.501
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-17 00:00:00"
      },
      {
        "dt": 1487300400,
        "main": {
          "temp": 6.47,
          "temp_min": 6.47,
          "temp_max": 6.47,
          "pressure": 1033.19,
          "sea_level": 1041.11,
          "grnd_level": 1033.19,
          "humidity": 89,
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
          "speed": 3.55,
          "deg": 264.501
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-17 03:00:00"
      },
      {
        "dt": 1487311200,
        "main": {
          "temp": 6.29,
          "temp_min": 6.29,
          "temp_max": 6.29,
          "pressure": 1032.99,
          "sea_level": 1040.82,
          "grnd_level": 1032.99,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [{
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 2.86,
          "deg": 262.502
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-17 06:00:00"
      },
      {
        "dt": 1487322000,
        "main": {
          "temp": 7.21,
          "temp_min": 7.21,
          "temp_max": 7.21,
          "pressure": 1033.55,
          "sea_level": 1041.32,
          "grnd_level": 1033.55,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [{
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 2.56,
          "deg": 265.001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-17 09:00:00"
      },
      {
        "dt": 1487332800,
        "main": {
          "temp": 10.45,
          "temp_min": 10.45,
          "temp_max": 10.45,
          "pressure": 1033.76,
          "sea_level": 1041.39,
          "grnd_level": 1033.76,
          "humidity": 84,
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
          "speed": 1.96,
          "deg": 278.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-17 12:00:00"
      },
      {
        "dt": 1487343600,
        "main": {
          "temp": 11.48,
          "temp_min": 11.48,
          "temp_max": 11.48,
          "pressure": 1032.94,
          "sea_level": 1040.63,
          "grnd_level": 1032.94,
          "humidity": 79,
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
          "speed": 1.76,
          "deg": 272.003
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-17 15:00:00"
      },
      {
        "dt": 1487354400,
        "main": {
          "temp": 7.46,
          "temp_min": 7.46,
          "temp_max": 7.46,
          "pressure": 1032.99,
          "sea_level": 1040.81,
          "grnd_level": 1032.99,
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
          "speed": 1.16,
          "deg": 208
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-17 18:00:00"
      },
      {
        "dt": 1487365200,
        "main": {
          "temp": 3.99,
          "temp_min": 3.99,
          "temp_max": 3.99,
          "pressure": 1033.3,
          "sea_level": 1041.19,
          "grnd_level": 1033.3,
          "humidity": 87,
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
          "speed": 1.22,
          "deg": 169.504
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-17 21:00:00"
      },
      {
        "dt": 1487376000,
        "main": {
          "temp": 2.23,
          "temp_min": 2.23,
          "temp_max": 2.23,
          "pressure": 1033.49,
          "sea_level": 1041.36,
          "grnd_level": 1033.49,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [{
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 1.36,
          "deg": 192
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-18 00:00:00"
      },
      {
        "dt": 1487386800,
        "main": {
          "temp": 4.33,
          "temp_min": 4.33,
          "temp_max": 4.33,
          "pressure": 1033,
          "sea_level": 1040.85,
          "grnd_level": 1033,
          "humidity": 99,
          "temp_kf": 0
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
          "speed": 1.91,
          "deg": 188.002
        },
        "rain": {
          "3h": 0.14
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-18 03:00:00"
      },
      {
        "dt": 1487397600,
        "main": {
          "temp": 5.6,
          "temp_min": 5.6,
          "temp_max": 5.6,
          "pressure": 1032.95,
          "sea_level": 1040.77,
          "grnd_level": 1032.95,
          "humidity": 100,
          "temp_kf": 0
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
          "speed": 1.88,
          "deg": 206.005
        },
        "rain": {
          "3h": 0.15
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-18 06:00:00"
      },
      {
        "dt": 1487408400,
        "main": {
          "temp": 7.08,
          "temp_min": 7.08,
          "temp_max": 7.08,
          "pressure": 1033.16,
          "sea_level": 1041,
          "grnd_level": 1033.16,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [{
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 2.4,
          "deg": 202
        },
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-18 09:00:00"
      },
      {
        "dt": 1487419200,
        "main": {
          "temp": 10.18,
          "temp_min": 10.18,
          "temp_max": 10.18,
          "pressure": 1032.85,
          "sea_level": 1040.61,
          "grnd_level": 1032.85,
          "humidity": 86,
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
          "speed": 3.37,
          "deg": 212.003
        },
        "rain": {
          "3h": 0.06
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-18 12:00:00"
      },
      {
        "dt": 1487430000,
        "main": {
          "temp": 11.23,
          "temp_min": 11.23,
          "temp_max": 11.23,
          "pressure": 1031.68,
          "sea_level": 1039.39,
          "grnd_level": 1031.68,
          "humidity": 80,
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
          "speed": 3.83,
          "deg": 229.004
        },
        "rain": {
          "3h": 0.01
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-18 15:00:00"
      },
      {
        "dt": 1487440800,
        "main": {
          "temp": 10.32,
          "temp_min": 10.32,
          "temp_max": 10.32,
          "pressure": 1031.26,
          "sea_level": 1039.03,
          "grnd_level": 1031.26,
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
          "all": 20
        },
        "wind": {
          "speed": 3.92,
          "deg": 227.502
        },
        "rain": {
          "3h": 0.02
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-18 18:00:00"
      },
      {
        "dt": 1487451600,
        "main": {
          "temp": 8.4,
          "temp_min": 8.4,
          "temp_max": 8.4,
          "pressure": 1031.4,
          "sea_level": 1039.1,
          "grnd_level": 1031.4,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [{
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 4.31,
          "deg": 240.002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-18 21:00:00"
      },
      {
        "dt": 1487462400,
        "main": {
          "temp": 7.42,
          "temp_min": 7.42,
          "temp_max": 7.42,
          "pressure": 1031.07,
          "sea_level": 1038.92,
          "grnd_level": 1031.07,
          "humidity": 91,
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
          "speed": 4.51,
          "deg": 255.503
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-19 00:00:00"
      },
      {
        "dt": 1487473200,
        "main": {
          "temp": 7.63,
          "temp_min": 7.63,
          "temp_max": 7.63,
          "pressure": 1030.74,
          "sea_level": 1038.61,
          "grnd_level": 1030.74,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [{
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 4.16,
          "deg": 274.501
        },
        "rain": {
          "3h": 0.06
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-19 03:00:00"
      },
      {
        "dt": 1487484000,
        "main": {
          "temp": 8.38,
          "temp_min": 8.38,
          "temp_max": 8.38,
          "pressure": 1030.98,
          "sea_level": 1038.82,
          "grnd_level": 1030.98,
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
          "all": 92
        },
        "wind": {
          "speed": 3.61,
          "deg": 290.502
        },
        "rain": {
          "3h": 0.14
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-19 06:00:00"
      },
      {
        "dt": 1487494800,
        "main": {
          "temp": 8.27,
          "temp_min": 8.27,
          "temp_max": 8.27,
          "pressure": 1032.32,
          "sea_level": 1040.01,
          "grnd_level": 1032.32,
          "humidity": 86,
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
          "speed": 3.27,
          "deg": 297.006
        },
        "rain": {
          "3h": 0.04
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-19 09:00:00"
      },
      {
        "dt": 1487505600,
        "main": {
          "temp": 9.24,
          "temp_min": 9.24,
          "temp_max": 9.24,
          "pressure": 1032.33,
          "sea_level": 1040.05,
          "grnd_level": 1032.33,
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
          "all": 68
        },
        "wind": {
          "speed": 3.53,
          "deg": 288.007
        },
        "rain": {
          "3h": 0.02
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-19 12:00:00"
      },
      {
        "dt": 1487516400,
        "main": {
          "temp": 9.68,
          "temp_min": 9.68,
          "temp_max": 9.68,
          "pressure": 1031.19,
          "sea_level": 1038.91,
          "grnd_level": 1031.19,
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
          "all": 92
        },
        "wind": {
          "speed": 4.1,
          "deg": 276.5
        },
        "rain": {
          "3h": 0.02
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2017-02-19 15:00:00"
      },
      {
        "dt": 1487527200,
        "main": {
          "temp": 9.55,
          "temp_min": 9.55,
          "temp_max": 9.55,
          "pressure": 1030.48,
          "sea_level": 1038.15,
          "grnd_level": 1030.48,
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
          "speed": 3.71,
          "deg": 263.504
        },
        "rain": {
          "3h": 0.06
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-19 18:00:00"
      },
      {
        "dt": 1487538000,
        "main": {
          "temp": 10.1,
          "temp_min": 10.1,
          "temp_max": 10.1,
          "pressure": 1029.79,
          "sea_level": 1037.57,
          "grnd_level": 1029.79,
          "humidity": 86,
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
          "speed": 4.14,
          "deg": 265.502
        },
        "rain": {
          "3h": 0.03
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-19 21:00:00"
      },
      {
        "dt": 1487548800,
        "main": {
          "temp": 10.61,
          "temp_min": 10.61,
          "temp_max": 10.61,
          "pressure": 1029.52,
          "sea_level": 1037.2,
          "grnd_level": 1029.52,
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
          "all": 80
        },
        "wind": {
          "speed": 4.36,
          "deg": 274.503
        },
        "rain": {
          "3h": 0.01
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-20 00:00:00"
      },
      {
        "dt": 1487559600,
        "main": {
          "temp": 10.45,
          "temp_min": 10.45,
          "temp_max": 10.45,
          "pressure": 1028.66,
          "sea_level": 1036.37,
          "grnd_level": 1028.66,
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
          "all": 76
        },
        "wind": {
          "speed": 4.31,
          "deg": 277.503
        },
        "rain": {
          "3h": 0.05
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-02-20 03:00:00"
      },
    ]
  }
]

export default {
  settings,
  locations,
  weather
}
