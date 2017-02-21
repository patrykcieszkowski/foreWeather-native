// import axios from 'axios'


export function toggleFooterView()
{
  return { type: 'TOGGLE_FOOTER' }
}

export function toggleSidebarView()
{
  return { type: 'TOGGLE_SIDEBAR' }
}

export function toggleSearchView()
{
  return { type: 'TOGGLE_SIDEBAR_SEARCH' }
}

// set search criteria
export function setSearchCriteria(value)
{
  return { type: 'SET_SEARCH_CRITERIA', payload: { value }}
}

export function setCurrentLocation(id)
{
  return { type: 'SET_CURRENT_LOCATION', payload: { id }}
}

//locaiton manipulation
export function removeLocation(id)
{
  return { type: 'REMOVE_LOCATION', payload: { id } }
}

export function addLocation(id)
{
  return { type: 'ADD_LOCATION', payload: { id } }
}
