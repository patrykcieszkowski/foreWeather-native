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
    dispatch(searchLocation_pending())
    return fetch(_url)
      .then((res) => res.json())
      .then((json) => dispatch(searchLocation_fulfilled(json)))
      .catch((e) => dispatch(searchLocation_error(e)) )
  }
}

export function searchLocation_pending()
{
  return { type: 'SEARCH_LOCATION_PENDING' }
}

export function searchLocation_fulfilled(json)
{
  return { type: 'SEARCH_LOCATION_FULFILLED', payload: { json } }
}

export function searchLocation_error(error)
{
  console.log(error);
  return { type: 'SEARCH_LOCATION_ERROR', payload: { error } }
}

/* forecast */

export function getForecast(location)
{
  let _url = `https://foreweather.herokuapp.com/api/forecast?location=${location}`

  return (dispatch) =>
  {
    return fetch(_url)
      .then((res) => res.json())
      .then((json) => dispatch(getForecast_fulfilled(json)))
      .catch((e) => dispatch(getForecast_error(e)) )
  }
}

export function getForecast_fulfilled(json)
{
  return { type: 'GET_FORECAST_FULFILLED', payload: { json } }
}

export function getForecast_error(error)
{
  console.log(error);
  return { type: 'GET_FORECAST_ERROR', payload: { error } }
}
