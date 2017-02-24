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

export function searchLocation(location)
{
  let _url = `http://maps.googleapis.com/maps/api/geocode/json?address=${location}&sensor=true`

  return (dispatch) =>
  {
    searchLocation_pending()
    fetch(_url)
      .then((res) => dispatch(searchLocation_fulfilled(res)) )
      .catch((e) => dispatch(searchLocation_error(e)) )
  }
}

export function searchLocation_pending(res)
{
  return { type: 'SEARCH_LOCATION_PENDING' }
}

export function searchLocation_fulfilled(res)
{
  return { type: 'SEARCH_LOCATION_FULFILLED', payload: res.json() }
}

export function searchLocation_error(error)
{
  return { type: 'SEARCH_LOCATION_ERROR', payload: { error } }
}

export function getForecast(location)
{
  let _url = `http://foreweather.heroku.com?location=${location}`
  return {
    type: 'FORECAST',
    payload: fetch(_url).then(res => res.json())
  }
}
