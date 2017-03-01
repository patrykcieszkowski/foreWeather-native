import { locations } from '../state'
import _ from 'lodash'

export default function(state=locations, action)
{
  switch (action.type)
  {
    case 'SEARCH_LOCATION':
    {
      return state
    }
    case 'SEARCH_LOCATION_FULFILLED':
    {
      let { json } = action.payload
      let _locList = _.cloneDeep(json.results)
                      .map((loc) => ({
                        id: loc.place_id,
                        details: {
                          "addr": loc.formatted_address,
                          "city": loc.address_components[0],
                          "state": (loc.address_components[3].short_name == "US") ? loc.address_components[2] : loc.address_components[1],
                          "country": loc.address_components[3],
                          "coord": {
                            "lat": loc.geometry.location.lat,
                            "lon": loc.geometry.location.lng
                          }
                        }}))

      return {
        ...state,
        search: {
          ...state.search,
          status: 'success',
          result: _locList
        }
      }
    }
    case 'SEARCH_LOCATION_PENDING':
    {
      return {
        ...state,
        search: {
          ...state.search,
          status: 'pending'
        }
      }
    }
    case 'SEARCH_LOCATION_ERROR':
    {
      return {
        ...state,
        search: {
          ...state.search,
          status: 'error'
        }
      }
    }
    case 'SET_SEARCH_CRITERIA':
    {
      return {
        ...state,
        search: {
          ...state.search,
          criteria: action.payload.value
        }
      }
    }
    case 'REMOVE_LOCATION':
    {
      let { id } = action.payload
      let chosenLocId = state.list.findIndex((loc) => loc.id === id)

      if (chosenLocId < 0)
      {
        return state
      }

      return {
        ...state,
        list: [
          ...state.list.slice(0, chosenLocId),
          ...state.list.slice(chosenLocId+1)

        ]
      }
    }
    case 'ADD_LOCATION':
    {
      let { id } = action.payload
      let resultArr = state.search.result

      let chosenLocation = resultArr.find((loc) => loc.id === id)
      let currentListLocId = state.list.findIndex((loc) => loc.id === id)

      if (currentListLocId > -1
        || !chosenLocation)
      {
        return state
      }

      return {
        ...state,
        list: [
          ...state.list,
          chosenLocation
        ]
      }
    }
    default:
      return state
  }
}
