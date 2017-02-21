import { settings } from '../state'

export default function(state=settings, action)
{
  switch (action.type)
  {
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
