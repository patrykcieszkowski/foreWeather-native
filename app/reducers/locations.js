import { locations } from '../state'
import _ from 'lodash'

export default function(state=locations, action)
{
  switch (action.type)
  {
    case 'SEARCH_LOCATION':
    {
      console.log(action)
      return state
    }
    case 'SEARCH_LOCATION_FULFILLED':
    {
      console.log(action)
      return {
        ...state,
        status: 'success',
        // list: action.payload
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
