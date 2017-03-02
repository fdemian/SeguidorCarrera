import 'isomorphic-fetch'

const API_ROOT = window.location.protocol + "//" + window.location.host;

function callAPIMiddleware({ dispatch, getState }) {

  return next => action => {

    const {
      types,
	    endpoint,
	    callHeaders,
      shouldCallAPI = () => true,
      payload = {}
    } = action

    if (!types)
	  {
      return next(action)
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    )
	  {
      throw new Error('Expected an array of three string types.')
    }

    if (!shouldCallAPI(getState())) {
      return
    }

    const [ requestType, successType, failureType ] = types

	  dispatch({type: requestType })

    let FULL_URL = "";

    if(endpoint.endsWith(".json"))
      FULL_URL = API_ROOT + "/" + endpoint;
    else
      FULL_URL = API_ROOT + "/api/" + endpoint;
    
    return fetch(FULL_URL, callHeaders).then(
	  response => response.json().then(function(json){dispatch({ data: json, type: successType })}),
      error => dispatch({type: failureType })
	)
  }
}

export default callAPIMiddleware;
