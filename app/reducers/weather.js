import { weather } from '../state'

export default function(state=weather, action)
{
  switch (action.type)
  {
    default:
      return state
  }
}
