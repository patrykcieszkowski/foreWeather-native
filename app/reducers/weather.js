import { weather } from '../state'

export default function(state=weather, action)
{
  switch (action.type)
  {
    case 'GET_FORECAST_FULFILLED':
    {
      let { json } = action.payload

      let foundIndex = state.findIndex((_weather) => _weather.city.id === json.city.id)
      let parsedWeather = {
        city: json.city,
        list: json.list
      }

      if (foundIndex > -1)
      {
        return [
          ...state.slice(0, foundIndex),
          ...state.slice(foundIndex+1),
          parsedWeather
        ]
      }

      return [
        ...state,
        parsedWeather
      ]
    }
    default:
      return state
  }
}
