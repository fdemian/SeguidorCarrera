export default function sendContent(_endpoint, _types, content) {  
  
  const headers = {method: 'post', mode: 'cors', cache: 'default', body: content};
  
  return {
    
	// Types of actions to emit before and after
    types: _types,
    
	// Check the cache (optional):
    shouldCallAPI: (state) => true,
	
	endpoint: _endpoint,
	
	callHeaders: headers,
	
	// Arguments to inject in begin/end actions
    payload: null
  }
}

// Authentication is required to perform this action.
export function authenticationRequired() {
  return {
    type: AUTHENTICATION_REQUIRED
  }	
}