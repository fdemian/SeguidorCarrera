import
{
  REQUEST_MATERIAS,
  RECEIVE_MATERIAS,
  RECEIVE_MATERIAS_FAILURE,
  REQUEST_CORRELATIVAS,
  RECEIVE_CORRELATIVAS,
  RECEIVE_CORRELATIVAS_FAILURE,  
  REQUEST_ESTADO,
  RECEIVE_ESTADO,
  REQUEST_ESTADO_FAILURE,
  UPDATE_ESTADO,
  UPDATE_ESTADO_OK,
  UPDATE_ESTADO_FAILURE
} from '../../Seguidor/Actions';

import flattenSubjects, {getNuevoEstadoArray} from './MapSubjects';

const initialState = {
  materias: [],
  correlativas: [],
  estados: [],
  isFetching: false,
  error: false
}

export function seguidor(state = initialState, action) {
 switch (action.type) {
  
  case REQUEST_MATERIAS:
      return { ...state, isFetching: true };
  case RECEIVE_MATERIAS:
      return { ...state, isFetching: false, materias:  flattenSubjects(action.data) };
  case RECEIVE_MATERIAS_FAILURE:
        return { ...state, isFetching: false, error: true};
		
  case REQUEST_CORRELATIVAS:
      return { ...state, isFetching: true };
  case RECEIVE_CORRELATIVAS:
      return { ...state, isFetching: false, correlativas: action.data };
  case RECEIVE_CORRELATIVAS_FAILURE:
        return { ...state, isFetching: false, error: true};		
		
  case REQUEST_ESTADO:
      return { ...state, isFetching: true };
  case RECEIVE_ESTADO:
      return { ...state, isFetching: false, estados: action.data };
  case REQUEST_ESTADO_FAILURE:
        return { ...state, isFetching: false, error: true}; 
  
  case UPDATE_ESTADO_OK:
    const _estados = getNuevoEstadoArray(action.data, state.estados);
	console.log("UPDATE ESTADO OK");
    return {...state, estados: _estados};
  
  default:
      return state;
  }
}

export default seguidor;
