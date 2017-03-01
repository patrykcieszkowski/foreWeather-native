import { settings } from '../state'
import moment from 'moment'

export default function(state=settings, action)
{
  switch (action.type)
  {
    case 'UPDATE_RECENT_FETCH_DATE':
    {
      return {
        ...state,
        recentWeatherUpdate: moment().unix()
      }
    }
    case 'TOGGLE_FOOTER':
    {
      return {
        ...state,
        expandFooterBool: !state.expandFooterBool
      }
    }
    case 'TOGGLE_SIDEBAR':
    {
      return {
        ...state,
        expandSidebarBool: !state.expandSidebarBool
      }
    }
    case 'TOGGLE_SIDEBAR_SEARCH':
    {
      return {
        ...state,
        sidebarSearchBool: !state.sidebarSearchBool
      }
    }
    case 'SET_CURRENT_LOCATION':
    {
      let { id } = action.payload
      
      return {
        ...state,
        currentLocationId: id
      }
    }
    default:
      return state
  }
}
